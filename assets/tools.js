function downloadZip(url) {
    const zip = new JSZip();
    const files = [];
    const parts = url.split('/');
    const fileName = parts[parts.length - 2]; 
    const chapterName = parts[parts.length - 1];
    const baseUrl = `https://raw.githubusercontent.com/terjemahin/website/refs/heads/main/${fileName}`;
    const start = chapterName.split('-')[1];
    const end = chapterName.split('-')[2];

    for (let i = parseInt(start, 10); i <= parseInt(end, 10); i++) {
        const chapterNumber = String(i).padStart(4, '0'); 
        const link = `${baseUrl}/chapter-${chapterNumber}.html`;
        files.push({ name: `chapter-${chapterNumber}.html`, url: link });
    }

    const promises = files.map(file => fetch(file.url)
        .then(response => response.blob())
        .then(blob => {
            zip.file(file.name, blob, { binary: true, mimeType: "text/html" });
        })
    );

    Promise.all(promises).then(() => {
        zip.generateAsync({ type: "blob", mimeType: "application/zip" })
            .then(function (content) {
                const a = document.createElement("a");
                a.href = URL.createObjectURL(content);
                a.download = `${fileName}_chapter-${start}-${end}.zip`;
                a.click();
            });
    }).catch(() => alert('Failed to download file.'));
}


function downloadFile(url) {
    const parts = url.split("/");
    const baseUrl = "https://raw.githubusercontent.com/terjemahin/website/refs/heads/main" + parts.slice(3).join("/").replace("website", "") + ".html";

    fetch(baseUrl)
        .then(response => response.text())
        .then(content => {
            const blob = new Blob([content], { type: 'text/html' }); 
            const objectURL = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = objectURL;
            a.download = parts.pop() + '.html';
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(objectURL);
        }).catch(() => alert('Failed to download file.'));
}


function rowText(url, chapter, date, size, reason) {
    if (["chapter", "dir"].includes(reason)) {
        const icon = reason === "chapter" ? "fa-file-code-o" : "fa-folder-open";
        const action = `<a href="${url}" class="btn btn-sm btn-outline-primary" title="Download chapter" onclick="${reason === "chapter" ? "downloadFile" : "downloadZip"}(this.href); return false;"> <i class="fa fa-download fa-fw"></i></a>`;

        return `<tr>
        <td class="d-none d-md-table-cell">
            <a class="fname" href="${url}" title="${chapter}">
                <i class="fa ${icon} fa-fw"></i> ${chapter}</a>
        </td>
        <td class="d-table-cell d-md-none">
            <a class="fname" href="${url}">
                <i class="fa ${icon} fa-fw"></i> ${chapter}</a>
        </td>
        <td class="d-none d-md-table-cell">${date}</td>
        <td class="d-none d-sm-table-cell">${size}</td>
        <td>
            <a href="javascript:void(0)" class="btn btn-sm btn-outline-secondary" title="Copy Link"
                onclick="navigator.clipboard.writeText('${url}')">
                <i class="fa fa-link fa-fw"></i></a>
            ${action}
        </td>
    </tr>`;
    }
}

function renderTable(dataToRender, toText, backButton = null) {
    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = "";
    if (backButton) {
        const defaultRow = `<tr>
		<td>
			 <a class="fname" href="${backButton}">
				<i class="fa fa-level-up fa-fw"></i> ..</a>
		</td>
		<td class="d-none d-md-table-cell">-</td>
		<td class="d-none d-sm-table-cell">-</td>
		<td>-</td>
	</tr >`;
        tableBody.insertAdjacentHTML('beforeend', defaultRow);
    };
    dataToRender.forEach((entry) => {
        const row = rowText(entry.url, entry.chapter, entry.date, entry.size, toText);
        tableBody.insertAdjacentHTML('beforeend', row);
    });
} 

function searchAndRender(inputElement, reason, backButton) {
    const searchTerm = inputElement.value.toLowerCase();
    const filteredData = Object.keys(data)
        .filter(chapter => chapter.toLowerCase().includes(searchTerm))
        .map(chapter => ({
            chapter: chapter,
            url: data[chapter].url,
            date: data[chapter].date,
            size: data[chapter].size
        }));

    renderTable(filteredData, reason, backButton);
}

function renderAllData(reason, backButton) {
    const allData = Object.keys(data).map(chapter => ({
        chapter: chapter,
        url: data[chapter].url,
        date: data[chapter].date,
        size: data[chapter].size
    }));

    renderTable(allData, reason, backButton);

    const searchInputs = [
        { input: document.getElementById('searchInput-lg'), button: document.getElementById('searchButton-lg') },
        { input: document.getElementById('searchInput-sm'), button: document.getElementById('searchButton-sm') }
    ];

    searchInputs.forEach(({ input, button }) => {
        const searchHandler = () => searchAndRender(input, 'dir', '..');
        button.addEventListener('click', searchHandler);
        input.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') searchHandler();
        });
    });
}
