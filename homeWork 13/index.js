function checkProtocol() {
    let link = document.getElementById('link-input').value;
    if (link.startsWith('http://') || link.startsWith('https://')) {
    window.location.href = link;
    } else {
    window.location.href = 'https://' + link;
    }
}