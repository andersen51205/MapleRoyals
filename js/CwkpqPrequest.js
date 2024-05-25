const NPC_DETAIL = {
    JohnBarricade: {
        img: "JohnBarricade.png",
        map: {
            img: "BiggerBen-Lobby.png",
            title: "大笨鐘：大廳",
        },
        miniMap: {
            img: "BiggerBenLobby.png",
            title: "「新葉城：大笨鐘」的入口處",
        }
    },
    Jack: {
        img: "Jack.png",
        map: {
            img: "LowerAscent.png",
            title: "紅杉木堡壘：較低的攀升",
        },
        miniMap: {
            img: "CavernOfPain.png",
            title: "「紅杉木堡壘：疼痛洞穴」的入口處",
        }
    },
    ElpamGorlab: {
        img: "ElpamGorlab.png",
        map: {
            img: "NewLeafCity-TownCenter.png",
            title: "新葉城：市區中心",
        }
    },
};
const prequestList = [
    {
        name: "1. 蘇白尼的遺物",
        npc: NPC_DETAIL['JohnBarricade'],
        levelRestrictions: "36等",
        prerequisite: "無",
        questFlow: 'subanis-legacy',
    }, {
        name: "2. 迷失了",
        npc: NPC_DETAIL['ElpamGorlab'],
        levelRestrictions: "40等",
        prerequisite: "無",
        questFlow: 'lost',
    }, {
        name: "3. 重返異世界",
        npc: NPC_DETAIL['ElpamGorlab'],
        levelRestrictions: "40等",
        prerequisite: "完成任務「<strong>迷失了</strong>」",
        questFlow: 'reversal',
    }, {
        name: "4. 尋找傑克",
        npc: NPC_DETAIL['JohnBarricade'],
        levelRestrictions: "50等",
        prerequisite: "完成任務「<strong>蘇白尼的遺物</strong>」、「<strong>重返異世界</strong>」",
        reward: {
            icon: 'MapOfPhantomForest.png',
            name: '幻影森林地圖',
        },
        questFlow: 'finding-jack',
    }, {
        name: "5. 迷失在翻譯裡",
        npc: NPC_DETAIL['Jack'],
        levelRestrictions: "70等",
        prerequisite: "完成任務「<strong>尋找傑克</strong>」",
        questFlow: 'lost-in-translation',
    }, {
        name: "6. 力挽狂瀾",
        npc: NPC_DETAIL['Jack'],
        levelRestrictions: "70等",
        prerequisite: "完成任務「<strong>迷失在翻譯裡</strong>」",
        reward: {
            icon: 'CrimsonwoodKeystone.png',
            name: '守護者的鑰匙石',
        },
        questFlow: 'stemming-the-tide',
    }, {
        name: "其他：英勇印記",
        npc: NPC_DETAIL['JohnBarricade'],
        levelRestrictions: "70等",
        prerequisite: "完成任務「<strong>力挽狂瀾</strong>」",
        reward: {
            icon: 'MarkerOfHeroism.png',
            name: '英雄標誌',
        },
        questFlow: 'the-mark-of-heroism',
    }
];

// Vue實體
const mainVm = Vue.createApp({
    data() {
        return {
            prequestList
        }
    }
}).mount('#Main_content');

// 切換頁面
function showPage(page) {
    document.querySelectorAll('.page-content').forEach(function (el) {
        el.classList.add('d-none');
    })
    document.querySelector(`.${page}`).classList.remove('d-none');
}
