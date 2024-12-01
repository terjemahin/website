function downloadFile(url) {
    event.preventDefault();
    const parts = url.split("/");
    const rawUrl = "https://raw.githubusercontent.com/terjemahin/website/refs/heads/main" + parts.slice(3).join("/").replace("website", "") + ".html";

    fetch(rawUrl)
        .then(response => response.blob())
        .then(blob => {
            const objectURL = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = objectURL;
            a.download = parts.pop() + '.html';
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(objectURL);
        })
        .catch(() => alert('Failed to download file.'));
}