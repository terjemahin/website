let data = {};

function mergeData(sources) {
  return new Promise((resolve, reject) => {
    let loadedScripts = 0;

    sources.forEach((src) => {
      const script = document.createElement("script");
      script.src = src;
      script.async = false;

      script.onload = () => {
        loadedScripts++;
        if (loadedScripts === sources.length) {
          resolve(data);
        }
      };

      script.onerror = () => {
        reject(new Error(`Failed to load script: ${src}`));
      };

      document.body.appendChild(script);
    });
  });
}

async function getUrlZip(jsonUrl, inputIndex) {
  try {
    const response = await fetch(jsonUrl);
    if (!response.ok) throw new Error("Failed to load JSON");

    const data = await response.json();
    const keys = Object.keys(data);

    if (inputIndex >= 1 && inputIndex <= keys.length) {
      const selectedKey = keys[inputIndex - 1];
      const array = data[selectedKey];

      const urls = array.map((item) => item.url);
      return { title: selectedKey, urls };
    }

    return { title: null, urls: [] };
  } catch (error) {
    console.error(error.message);
    return { title: null, urls: [] };
  }
}

function downloadZip(url) {
  const zip = new JSZip();
  const files = [];
  const [path, query] = url.split("?");
  const slug = path.split("/")[3];
  const index = query?.split("=")[1];

  if (!slug || !index) {
    alert("Invalid URL format");
    return;
  }

  const baseUrl = `https://raw.githubusercontent.com/terjemahin/website/refs/heads/main/${slug}`;
  const jsonUrl = `${baseUrl}/data/data.json`;

  getUrlZip(jsonUrl, parseInt(index, 10)).then((result) => {
    const title = result.title || "download";
    const links = result.urls;

    links.forEach((link) => {
      files.push({ name: `${link}.html`, url: `${baseUrl}/${link}.html` });
    });

    const promises = files.map((file) =>
      fetch(file.url)
        .then((response) => {
          if (!response.ok) throw new Error(`Failed to fetch ${file.url}`);
          return response.blob();
        })
        .then((blob) => {
          zip.file(file.name, blob, { binary: true, mimeType: "text/html" });
        })
        .catch((error) => {
          console.error(error.message);
        }),
    );

    Promise.all(promises)
      .then(() => {
        zip.generateAsync({ type: "blob", mimeType: "application/zip" }).then(function (content) {
          const a = document.createElement("a");
          a.href = URL.createObjectURL(content);
          a.download = `${title}.zip`;
          a.click();
        });
      })
      .catch(() => alert("Failed to download file."));
  });
}

function downloadFile(url) {
  const parts = url.split("/");
  const fileName = parts[parts.length - 1];
  const baseUrl = `https://raw.githubusercontent.com/terjemahin/website/refs/heads/main/${fileName}`;

  fetch(baseUrl)
    .then((response) => response.text())
    .then((content) => {
      const blob = new Blob([content], { type: "text/html" });
      const objectURL = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.style.display = "none";
      a.href = objectURL;
      a.download = parts.pop() + ".html";
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(objectURL);
    })
    .catch(() => alert("Failed to download file."));
}

function rowText(url, title, date, size = null, total = null, status = null, reason = null) {
  const isChapterOrDir = ["chapter", "dir"].includes(reason);
  const icon = isChapterOrDir ? (reason === "chapter" ? "fa-file-code-o" : "fa-folder-open") : "fa-folder-open";
  const action = isChapterOrDir
    ? `<a href="${url}" class="btn btn-sm btn-outline-primary" title="Download" onclick="${
        reason === "chapter" ? "downloadFile" : "downloadZip"
      }(this.href); return false;">
                <i class="fa fa-download fa-fw"></i>
           </a>`
    : "";
  const copyLink = isChapterOrDir
    ? `<a href="javascript:void(0)" class="btn btn-sm btn-outline-secondary" title="Copy Link" onclick="navigator.clipboard.writeText('${url}')">
                <i class="fa fa-link fa-fw"></i>
           </a>`
    : "";

  return `<tr>
        <td class="d-none d-md-table-cell">
            <a class="fname" href="${url}" title="${title}">
                <i class="fa ${icon} fa-fw"></i> ${title}</a>
        </td>
        <td class="d-table-cell d-md-none">
            <a class="fname" href="${url}">
                <i class="fa ${icon} fa-fw"></i> ${title}</a>
        </td>
        <td class="d-none d-md-table-cell">${date}</td>
        <td${isChapterOrDir ? ' class="d-none d-sm-table-cell"' : ""}>${isChapterOrDir ? size : total}</td>
        <td${!isChapterOrDir ? ' class="d-none d-sm-table-cell"' : ""}>
            ${isChapterOrDir ? copyLink + action : status || ""}
        </td>
    </tr>`;
}

function renderTable(data, reason, backButton = null, custom = null) {
  const tableBody = document.getElementById("tableBody");
  tableBody.innerHTML = backButton
    ? `<tr>
            <td><a class="fname" href="${backButton}"><i class="fa fa-level-up fa-fw"></i> ..</a></td>
            <td class="d-none d-md-table-cell">-</td>
            <td class="d-none d-sm-table-cell">-</td>
            <td>-</td>
        </tr>`
    : "";
  if (custom) {
    tableBody.innerHTML += custom;
  }

  data.forEach((entry) =>
    tableBody.insertAdjacentHTML(
      "beforeend",
      rowText(entry.url, entry.title, entry.date, entry.size, entry.total, entry.status, reason),
    ),
  );
}

function filterData(searchTerm, data) {
  return Object.keys(data)
    .filter((title) => title.toLowerCase().includes(searchTerm))
    .map((title) => ({ title, ...data[title] }));
}

function searchAndRender(inputElement, reason, backButton = null, searchData = reason === "chapter" ? data : dataDir) {
  const searchTerm = inputElement.value.trim().toLowerCase();
  renderTable(filterData(searchTerm, searchData), reason, backButton);
}

function renderAllData(reason, backButton, custom) {
  const sourceData = reason === "chapter" ? data : dataDir;
  renderTable(filterData("", sourceData), reason, backButton, custom);
}

function findRow(reason, backButton, searchData) {
  const searchInputs = ["lg", "sm"].map((size) => ({
    input: document.getElementById(`searchInput-${size}`),
    button: document.getElementById(`searchButton-${size}`),
  }));

  searchInputs.forEach(({ input, button }) => {
    const searchHandler = () => {
      input.value.trim() ? searchAndRender(input, reason, backButton, searchData) : location.reload();
    };

    button.addEventListener("click", searchHandler);
    input.addEventListener("keydown", (event) => event.key === "Enter" && searchHandler());
  });
}

function getQueryParameter() {
  const searchParams = window.location.search;
  return searchParams.startsWith("?=") ? searchParams.split("=")[1] : null;
}

function loadScriptSequentially(src, callback) {
  const script = document.createElement("script");
  script.src = src;
  script.onload = callback;
  document.body.appendChild(script);
}
