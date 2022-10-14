// 頁面資料
const questData = [{
        title: "綜合1",
        image: "./image/HpQuest/Misc1.png",
        url: "./HpQuest-Misc1.html",
    },{
        title: "綜合2",
        image: "./image/HpQuest/Misc2.png",
        url: "./HpQuest-Misc2.html",
    },{
        title: "水世界",
        image: "./image/HpQuest/Aquarium1.png",
        url: "./HpQuest-Aquarium1.html",
    },{
        title: "玩具城",
        image: "./image/HpQuest/Ludibrium1.png",
        url: "./HpQuest-Ludibrium1.html",
    },{
        title: "神木村1",
        image: "./image/HpQuest/Leafre1.png",
        url: "./HpQuest-Leafre1.html",
    },{
        title: "神木村2",
        image: "./image/HpQuest/Leafre2.png",
        url: "./HpQuest-Leafre2.html",
    },{
        title: "神木村3",
        image: "./image/HpQuest/Leafre3.png",
        url: "./HpQuest-Leafre3.html",
    },{
        title: "新葉城",
        image: "./image/HpQuest/NLC1.png",
        url: "./HpQuest-NLC1.html",
    },{
        title: "新加坡",
        image: "./image/HpQuest/CBD1.png",
        url: "./HpQuest-CBD1.html",
    },{
        title: "世界旅行",
        image: "./image/HpQuest/WorldTravel1.png",
        url: "./HpQuest-WorldTravel1.html",
}];

// Vue實例
const questDetail = Vue.createApp({
    data() {
        return {
            questData
        }
    }
}).mount('#Div_quest_content');

// 任務內容查看按鈕
function showQuestContent() {
    document.querySelector('#Btn_quest_content').click();
}
