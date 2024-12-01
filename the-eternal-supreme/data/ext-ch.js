const tableBody = document.getElementById('tableBody');
const searchInputLarge = document.getElementById('searchInput-lg');
const searchInputSmall = document.getElementById('searchInput-sm');
const searchButtonLarge = document.getElementById('searchButton-lg');
const searchButtonSmall = document.getElementById('searchButton-sm');

function renderTable(dataToRender) {
    tableBody.innerHTML = "";
    const defaultRow = `
	<tr>
		<td>
			<a class="fname" href="https://terjemahin.github.io/website/the-eternal-supreme">
				<i class="fa fa-level-up fa-fw"></i> ..</a>
		</td>
		<td class="d-none d-md-table-cell">-</td>
		<td class="d-none d-sm-table-cell">-</td>
		<td>-</td>
	</tr>`;
    tableBody.insertAdjacentHTML('beforeend', defaultRow);

    dataToRender.forEach((entry, index) => {
        const row = `<tr>
		<td class="d-none d-md-table-cell">
			<a class="fname" href="${entry.url}" title="${entry.chapter}">
				<i class="fa fa-file-code-o fa-fw"></i> ${entry.chapter}</a>
		</td>
		<td class="d-table-cell d-md-none">
			<a class="fname on-tiny-view" href="${entry.url}">
				<i class="fa fa-file-code-o fa-fw"></i> ${entry.chapter}</a>
		</td>
		<td class="d-none d-md-table-cell">${entry.date}</td>
		<td class="d-none d-sm-table-cell">${entry.size}</td>
		<td>
			<a href="javascript:void(0)" class="btn btn-sm btn-outline-secondary" title="Copy Link"
				onclick="navigator.clipboard.writeText('${entry.url}')">
				<i class="fa fa-link fa-fw"></i></a>
			<a href="${entry.url}" class="btn btn-sm btn-outline-primary" title="Download chapter" onclick="downloadFile(this.href)">
				<i class="fa fa-download fa-fw"></i></a>
		</td>
	</tr>`;
        tableBody.insertAdjacentHTML('beforeend', row);
    });
}

function searchAndRender(inputElement) {
    const searchTerm = inputElement.value.toLowerCase();
    const filteredData = [];

    Object.keys(data).forEach(chapter => {
        if (chapter.toLowerCase().includes(searchTerm)) {
            const item = data[chapter];
            filteredData.push({
                chapter: chapter,
                url: item.url,
                date: item.date,
                size: item.size
            });
        }
    });

    renderTable(filteredData);
}

searchButtonLarge.addEventListener('click', () => searchAndRender(searchInputLarge));
searchInputLarge.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        searchAndRender(searchInputLarge);
    }
});

searchButtonSmall.addEventListener('click', () => searchAndRender(searchInputSmall));
searchInputSmall.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        searchAndRender(searchInputSmall);
    }
});

function renderAllData() {
    const allData = [];
    Object.keys(data).forEach(chapter => {
        const item = data[chapter];
        allData.push({
            chapter: chapter,
            url: item.url,
            date: item.date,
            size: item.size
        });
    });
    renderTable(allData);
}

renderAllData();