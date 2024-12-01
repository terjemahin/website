const tableBody = document.getElementById('tableBody');
const searchInputLarge = document.getElementById('searchInput-lg');
const searchInputSmall = document.getElementById('searchInput-sm');
const searchButtonLarge = document.getElementById('searchButton-lg');
const searchButtonSmall = document.getElementById('searchButton-sm');

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

    renderTable(filteredData, 'chapter', 'https://terjemahin.github.io/website/the-eternal-surpeme');
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
    renderTable(allData, 'chapter', 'https://terjemahin.github.io/website/the-eternal-surpeme');
}

renderAllData();
