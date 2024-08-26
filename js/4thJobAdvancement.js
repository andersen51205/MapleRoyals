const JOB_INSTRUCTOR = [
    [
        NPC_DATA['Tylus'],
        NPC_DATA['Robeira'],
        NPC_DATA['Rene'],
        NPC_DATA['Arec'],
        NPC_DATA['Pedro'],
    ], [
        NPC_DATA['Harmonia'],
        NPC_DATA['Gritto'],
        NPC_DATA['Legor'],
        NPC_DATA['Hellin'],
        NPC_DATA['Samuel'],
    ],
];
const QUEST_BASE_PATH = 'src/Quest/4thJobAdvancement/';
const questFlowDetails = [
    {
        info: QUEST_BASE_PATH+"01.png",
        npcs: [
            NPC_DATA['Rene'],
            NPC_DATA['Legor'],
        ],
        steps: [
            {
                text: "前往 <strong>冰原雪域</strong> 的 <strong>長老公館</strong>，找三轉教官接轉職任務",
            }, {
                text: "前往 <strong>神木村</strong> 的 <strong>祭司之林</strong>，與四轉教官對話",
            }
        ]
    }, {
        info: QUEST_BASE_PATH+"02.png",
        npcs: [
            NPC_DATA['Legor'],
        ],
        steps: [
            {
                text: '前往 <strong>神木村</strong> 的 <strong>祭司之林</strong>，與四轉教官對話',
            }
        ]
    }, {
        info: QUEST_BASE_PATH+"03.png",
        npcs: [
            NPC_DATA['Legor'],
        ],
        steps: [
            {
                text: '前往 <strong>神木村</strong> 的 <strong>祭司之林</strong>，與四轉教官對話',
            }
        ]
    }, {
        info: QUEST_BASE_PATH+"04.png",
        npcs: [
            NPC_DATA['Legor'],
        ],
        steps: [
            {
                text: '前往 <strong>神木村</strong> 的 <strong>祭司之林</strong>，與四轉教官對話',
            }
        ]
    }, {
        info: QUEST_BASE_PATH+"05.png",
        npcs: [
            NPC_DATA['Legor'],
        ],
        steps: [
            {
                text: '前往 <strong>神木村</strong> 的 <strong>祭司之林</strong>，與四轉教官對話',
            }, {
                text: '需要準備道具：<br>'+getItemHtml('TheHeroicPentagon.png')+' 五角勳章、'+getItemHtml('TheHeroicStar.png')+' 英雄星型墜飾',
            }
        ]
    }, {
        info: QUEST_BASE_PATH+"06.png",
        npcs: [
            NPC_DATA['ChiefTatamo'],
        ],
        steps: [
            {
                text: '前往 <strong>神木村</strong>，與村長塔塔曼接任務',
            }
        ]
    }, {
        info: QUEST_BASE_PATH+"07.png",
        npcs: [
            NPC_DATA['Vega'],
        ],
        steps: [
            {
                text: '準備好1000萬，前往<strong>愛奧斯塔44樓</strong>，<br>找<strong>卷軸商人</strong>購買 '+getItemHtml('SecretSpellScroll.png')+' 秘咒',
            }, {
                text: '前往<strong>神木村</strong>，將 '+getItemHtml('SecretSpellScroll.png')+' 秘咒交給<strong>村長塔塔曼</strong>',
            }, {
                text: '取得 '+getItemHtml('TheHeroicPentagon.png')+' 五角勳章、'+getItemHtml('TheHeroicStar.png')+' 英雄星型墜飾',
            }, {
                text: '前往<strong>祭司之林</strong>，將 '+getItemHtml('TheHeroicPentagon.png')+' 五角勳章、'+getItemHtml('TheHeroicStar.png')+' 英雄星型墜飾交給四轉教官',
            }
        ]
    }, {
        info: QUEST_BASE_PATH+"08.png",
        npcs: [
            NPC_DATA['Legor'],
        ],
        steps: [
            {
                text: '前往<strong>祭司之林</strong>，與四轉教官對話',
            }, {
                text: '選擇 <strong>1. I want to advance to ...</strong>，即可完成四轉',
            }
        ]
    }
];

// Vue實體
const mainVm = Vue.createApp({
    data() {
        return {
            jobInstructor: JOB_INSTRUCTOR,
            questFlowDetails: questFlowDetails,
        }
    }
}).mount('#Main_content');
