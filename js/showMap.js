function showMap(el) {
    const src = el.getAttribute('data-src');
    const title = el.getAttribute('data-mapName');
    Swal.fire({
        title: `<strong>${title}</strong>`,
        html:
            `<img src="${src}" width="664" height="521" alt="">`,
        showConfirmButton: false,
        width: '730',
    });
}
function showMiniMap(el) {
    const src = el.getAttribute('data-src');
    const title = el.getAttribute('data-mapName');
    Swal.fire({
        title: `<strong>${title}</strong>`,
        html:
            `<img src="${src}" height="400" alt="">`,
        showConfirmButton: false,
        width: '700',
    });
}
function showQuest(el) {
    const src = el.getAttribute('data-src');
    const title = el.getAttribute('data-questName');
    Swal.fire({
        title: `<strong>${title}</strong>`,
        html:
            `<img src="${src}" height="400" alt="">`,
        showConfirmButton: false,
        width: '700',
    });
}
