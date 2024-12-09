function addCookies(name, value, days = 7) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = `expires=${date.toUTCString()}`;
    const sameSite = "SameSite=Lax";
    document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}; ${expires}; path=/; ${sameSite}`;
}

function getCookie(name) {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.startsWith(`${encodeURIComponent(name)}=`)) {
            return decodeURIComponent(cookie.substring(name.length + 1));
        }
    }
    return null;
}



//  Font-size
const increaseButton = document.getElementById('increaseFont');
const decreaseButton = document.getElementById('decreaseFont');
const content = document.querySelector('.text');

increaseButton.addEventListener('click', function() {
    let currentFontSize = window.getComputedStyle(content).fontSize;
    currentFontSize = parseFloat(currentFontSize); 
    content.style.fontSize = (currentFontSize + 1) + 'px'; 
    addCookies("fontSize", currentFontSize + 1 + 'px')
});

decreaseButton.addEventListener('click', function() {
    let currentFontSize = window.getComputedStyle(content).fontSize;
    currentFontSize = parseFloat(currentFontSize);
    content.style.fontSize = (currentFontSize - 1) + 'px'; 
    addCookies("fontSize", currentFontSize - 1 + 'px')
});



//  Themes
const button = document.getElementById('theme-button');
const body = document.body;
const PAGE_URL = window.location.href;
const PAGE_IDENTIFIER = document.title;

function reloadDisqusTheme(theme) {
    var disqus_config = function() {
        this.page.url = PAGE_URL;
        this.page.identifier = PAGE_IDENTIFIER;
        this.theme = theme;
    };

    DISQUS.reset({
        reload: true,
        config: disqus_config
    });
}

button.addEventListener('click', () => {
    body.classList.toggle('light');

    const currentTheme = body.classList.contains('light') ? 'light' : 'dark';
    button.textContent = body.classList.contains('light') ? '💤' : '🕯️';
    addCookies('theme', currentTheme)

    reloadDisqusTheme(currentTheme);
});



//  Tooltip
const toggleButton = document.getElementById('toggle-tooltip');
const tooltips = document.querySelectorAll('.scripts');
const tooltipCookie = getCookie('tooltip');
const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

let tooltipEnabled = tooltipCookie === null ? true : tooltipCookie === 'true';

document.querySelectorAll('.scripts').forEach(tooltip => {

    tooltip.addEventListener('click', () => {
        tooltip.classList.toggle('tooltip');
    });

    tooltip.addEventListener('mouseleave', () => {
        tooltip.classList.remove('tooltip');
    });
});

if (!isTouchDevice) {
    document.querySelectorAll('.scripts').forEach(tooltip => {
        
        tooltip.addEventListener('mouseover', () => {
            tooltip.classList.toggle('tooltip');
        });
    });
}

toggleButton.addEventListener('click', () => {
    tooltipEnabled = !tooltipEnabled; 
    addCookies("tooltip", tooltipEnabled)
    tooltips.forEach(tooltip => {
        if (tooltipEnabled) {
            tooltip.classList.remove('disabled'); 
        } else {
            tooltip.classList.add('disabled'); 
        }
    });
    
    toggleButton.textContent = tooltipEnabled ? '❤️' : '💔';
});



// Cookies-loader
function fontSizeLoader() {
    const fontSize = getCookie('fontSize');
    if (fontSize) {
        const element = document.querySelector('.text');

        if (element) {
            element.style.transition = 'none';
            element.style.fontSize = fontSize;
            setTimeout(function() {
                element.style.transition = 'font-size 0.4s ease';
            }, 50);
        }
    }
}

function themeLoader() {
    const theme = getCookie('theme');
    if (theme == "light") {
        body.classList.add('light');;
        button.textContent = body.classList.contains('light') ? '💤' : '🕯️';
        reloadDisqusTheme(body.classList.contains('light') ? 'light' : 'dark');
    }
}

function tooltipLoader() {
    if (tooltipCookie !== null) {
        tooltips.forEach(tooltip => {
            if (tooltipEnabled) {
                tooltip.classList.remove('disabled');
            } else {
                tooltip.classList.add('disabled');
            }
        });
        toggleButton.textContent = tooltipEnabled ? '❤️' : '💔';
    }
}

function hideShortcutNote() {
    document.getElementById('shortcut-note').style.display = 'none';
    document.querySelectorAll('hr')[3].style.display = 'none';
}

function shortcutLoader() {
    if (getCookie('shortcut') === 'true') {
        hideShortcutNote();
    }
}
document.querySelector('.close-note').addEventListener('click', () => {
    hideShortcutNote();
    addCookies('shortcut', 'true');
});

['fontSizeLoader', 'themeLoader', 'tooltipLoader', 'shortcutLoader'].forEach(fn => document.addEventListener('DOMContentLoaded', window[fn])); // function loader when refresh



// Navigation button
const pathSegments = location.pathname.split("/");
let basePath = "";

for (let i = 0; i < pathSegments.length - 1; i++) {
    basePath += pathSegments[i] + "/";
}

const openPage = (chapterUrl) => {
    open(chapterUrl, "_self");
};

const openChapter = (chapterNumber) => {
    const paddedChapter = String(chapterNumber).padStart(4, "0");
    const chapterUrl = location.protocol + basePath + "chapter-" + paddedChapter;
    open(chapterUrl, "_self");
};



//  Sidebar chapter list
const sidebarToggleBtn = document.getElementById('sidebarToggle');
const sidebar = document.getElementById('sidebar');
const closeSidebarBtn = document.getElementById('closeSidebar');

sidebarToggleBtn.addEventListener('click', function() {
    sidebar.classList.toggle('open');
    if (sidebar.classList.contains('open')) {
        document.body.classList.add('close-sidebar-mode');
    } else {
        document.body.classList.remove('close-sidebar-mode');
    }
});

closeSidebarBtn.addEventListener('click', function() {
    closeSidebar();
});

document.body.addEventListener('click', function(event) {
    if (document.body.classList.contains('close-sidebar-mode')) {
        if (!sidebar.contains(event.target) && event.target !== sidebarToggleBtn) {
            closeSidebar();
        }
    }
});

function closeSidebar() {
    sidebar.classList.remove('open');
    document.body.classList.remove('close-sidebar-mode');
}



// JSON-content url link
const dropdown = document.getElementById('dropdown');
const jsonContent = document.getElementById('jsonContent');
const jsonUrl = 'https://raw.githubusercontent.com/terjemahin/website/refs/heads/main/the-eternal-supreme/data/data.json';

async function loadJsonData() {
    try {
        const response = await fetch(jsonUrl);
        if (!response.ok) throw new Error('Gagal memuat data');
        const data = await response.json();
        populateDropdown(data);
        setupDropdownListener(data);
    } catch (error) {
        console.error('Error:', error);
    }
}

function populateDropdown(data) {
    dropdown.innerHTML = '<option value="">Pilih Chapter</option>';
    for (const group in data) {
        const option = document.createElement('option');
        option.value = group;
        option.textContent = group;
        dropdown.appendChild(option);
    }
}

function setupDropdownListener(data) {
    dropdown.addEventListener('change', function() {
        const selectedGroup = this.value;
        jsonContent.innerHTML = "";

        if (selectedGroup && data[selectedGroup]) {
            document.querySelector('.json-result').style.display = "block";

            const selectedData = data[selectedGroup];
            selectedData.forEach(item => {
                const link = document.createElement('a');
                link.href = item.url;
                link.textContent = item.chapter;
                link.style.display = "block";
                jsonContent.appendChild(link);
            });
        } else {
            document.querySelector('.json-result').style.display = "none";
        }
    });
}

loadJsonData();



// Disqus-comment
(() => {
    const d = document;
    const s = d.createElement("script");
    s.src = "https://terjemahin.disqus.com/embed.js";
    s.setAttribute("data-timestamp", +new Date());
    (d.head || d.body).appendChild(s);
})();
