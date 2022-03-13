function showMap(el) {
    const src = el.getAttribute('data-src');
    const title = el.getAttribute('data-mapName');
    Swal.fire({
        title: `<strong>${title}</strong>`,
        html:
            `<img src="${src}" with="664" heigh="521" alt="">`,
        showConfirmButton: false,
        width: '730',
    });
}
