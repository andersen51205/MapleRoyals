// 頁面資料
const questData = [{
        title: "綜合1",
        image: "./image/HpQuest/Misc1.png",
    },{
        title: "綜合2",
        image: "./image/HpQuest/Misc2.png",
    },{
        title: "水世界",
        image: "./image/HpQuest/Aquarium1.png",
    },{
        title: "玩具城",
        image: "./image/HpQuest/Ludibrium1.png",
    },{
        title: "神木村1",
        image: "./image/HpQuest/Leafre1.png",
    },{
        title: "神木村2",
        image: "./image/HpQuest/Leafre2.png",
    },{
        title: "神木村3",
        image: "./image/HpQuest/Leafre3.png",
    },{
        title: "新葉城",
        image: "./image/HpQuest/NLC1.png",
    },{
        title: "新加坡",
        image: "./image/HpQuest/CBD1.png",
    },{
        title: "世界旅行",
        image: "./image/HpQuest/WorldTravel1.png",
}];
// 任務內容查看按鈕
function showQuestDetail() {
    document.querySelector('#Btn_quest_detail').click();
}
// Vue實例
const questDetail = Vue.createApp({
    data() {
        return {
            questData
        }
    }
}).mount('#Div_quest_detail');
