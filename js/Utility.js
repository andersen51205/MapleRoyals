/**
 * 彈出視窗：大地圖
 *
 * @param {dom element} el
 */
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

/**
 * 彈出視窗：小地圖
 *
 * @param {dom element} el
 */
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

/**
 * 彈出視窗：寬版小地圖
 *
 * @param {dom element} el
 */
function showWidthMiniMap(el) {
    const src = el.getAttribute('data-src');
    const title = el.getAttribute('data-mapName');
    Swal.fire({
        title: `<strong>${title}</strong>`,
        html:
            `<img src="${src}" height="400" alt="">`,
        showConfirmButton: false,
        width: '900',
    });
}

/**
 * 彈出視窗：任務
 *
 * @param {dom element} el
 */
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

/**
 * 產生道具圖示模板
 *
 * @param {string} item 道具圖檔名稱
 * @param {string} path 圖檔路徑
 *
 * @return {string} 道具圖示的HTML
 */
function getItemHtml(item, path='src/Item') {
    return `<img class="my-1" src="${path}/${item}" height="32">`;
}
