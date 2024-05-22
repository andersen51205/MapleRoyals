// Vue實體
// const questFlowVm = Vue.createApp({
//     data() {
//         return {
//             questFlowDetails
//         }
//     }
// }).mount('#Div_quest_flow');

// 切換頁面
function showPage(page) {
    document.querySelectorAll('.page-content').forEach(function (el) {
        el.classList.add('d-none');
    })
    document.querySelector(`.${page}`).classList.remove('d-none');
}
