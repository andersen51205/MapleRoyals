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
    document.querySelector('#Div_quest_info').classList.add('d-none');
    document.querySelector('#Div_subanis_legacy_quest_flow').classList.add('d-none');
    document.querySelector('#Div_lost_quest_flow').classList.add('d-none');
    if(page === "info") {
        document.querySelector('#Div_quest_info').classList.remove('d-none');
    }
    else if(page === "subanis_legacy") {
        document.querySelector('#Div_subanis_legacy_quest_flow').classList.remove('d-none');
    }
    else if(page === "lost") {
        document.querySelector('#Div_lost_quest_flow').classList.remove('d-none');
    }
}
