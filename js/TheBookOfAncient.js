const NPC_DETAIL = {
    Alcaster: {
        img: "Alcaster.png",
        map: {
            img: "ElNathMarket.png",
            title: "冰原雪域：冰原雪域市集",
        }
    },
    ElmaTheHousekeeper: {
        img: "ElmaTheHousekeeper.png",
        map: {
            img: "OrbisPark.png",
            title: "天空之城：天空之城公園",
        }
    },
    Jade: {
        img: "Jade.png",
        map: {
            img: "ElNath.png",
            title: "冰原雪域：冰原雪域",
        }
    },
    Spiruna: {
        img: "Spiruna.png",
        width: "200",
        map: {
            img: "CloudParkIV.png",
            title: "天空之城：雲彩公園4",
        }
    },
    RockCoveredInSnow: {
        img: "RockCoveredInSnow.png",
        map: {
            img: "IceValleyI.png",
            title: "冰原雪域：冰雪峽谷1",
        }
    },
    KrielTheFairy: {
        img: "KrielTheFairy.png",
        width: "200",
        map: {
            img: "Orbis.png",
            title: "天空之城：雜貨店",
        }
    },
    SmallTomb: {
        img: "SmallTomb.png",
        map: {
            img: "WolfTerritoryI.png",
            title: "冰原雪域：狼的領土1"
        }
    },
    Scadur: {
        img: "Scadur.png",
        map: {
            img: "ElNath.png",
            title: "冰原雪域：冰原雪域",
        }
    },
    DancesWithBalrog: {
        img: "DancesWithBalrog.png",
        map: {
            img: "Perion.png",
            title: "維多利亞島：勇士之村",
        }
    },
    GrendelTheReallyOld: {
        img: "GrendelTheReallyOld.png",
        map: {
            img: "Ellinia.png",
            title: "維多利亞島：魔法森林",
        }
    },
    AthenaPierce: {
        img: "AthenaPierce.png",
        map: {
            img: "HenesysPark.png",
            title: "維多利亞島：弓箭手村公園",
        }
    },
    DarkLord: {
        img: "DarkLord.png",
        map: {
            img: "KerningCity.png",
            title: "維多利亞島：墮落城市",
        }
    },
    CorporalEasy: {
        img: "CorporalEasy.png",
        map: {
            img: "CloudParkVI.png",
            title: "天空之城：雲彩公園6",
        }
    },
    Statue: {
        img: "Statue.png",
        map: {
            img: "OrbisTower8-20F.png",
            title: "天空之塔：8樓",
        }
    },
};
const questFlowDetails = [
    {
        info: "./src/Quest/TheBookOfAncient/01.png",
        NPCs: [
            NPC_DETAIL['Alcaster'],
            NPC_DETAIL['ElmaTheHousekeeper'],
        ],
        steps: [
            "與 <strong>冰原雪域</strong> 的 <strong>Alcaster</strong> 接受任務",
            "到 <strong>天空之城</strong> 與 <strong>ElmaTheHousekeeper</strong> 對話",
        ],
    },{
        info: "./src/Quest/TheBookOfAncient/02.png",
        NPCs: [
            NPC_DETAIL['ElmaTheHousekeeper'],
            NPC_DETAIL['Jade'],
        ],
        steps: [
            "與 <strong>天空之城</strong> 的 <strong>ElmaTheHousekeeper</strong> 對話",
            "選 <strong>(2)Did Hella have any close friends?</strong><br>接受任務",
            "到 <strong>冰原雪域</strong> 與 <strong>Jade</strong> 對話",
        ],
    },{
        info: "./src/Quest/TheBookOfAncient/03.png",
        NPCs: [
            NPC_DETAIL['Jade'],
            NPC_DETAIL['ElmaTheHousekeeper'],
        ],
        steps: [
            "與 <strong>冰原雪域</strong> 的 <strong>Jade</strong> 接受任務",
            "到 <strong>天空之城</strong> 與 <strong>ElmaTheHousekeeper</strong> 對話",
        ],
    },{
        info: "./src/Quest/TheBookOfAncient/04.png",
        NPCs: [
            NPC_DETAIL['ElmaTheHousekeeper'],
            NPC_DETAIL['Jade'],
        ],
        steps: [
            "與 <strong>天空之城</strong> 的 <strong>ElmaTheHousekeeper</strong> 接受任務",
            "到 <strong>冰原雪域</strong> 與 <strong>Jade</strong> 對話",
            
        ],
    },{
        info: "./src/Quest/TheBookOfAncient/05.png",
        NPCs: [
            NPC_DETAIL['Jade'],
            NPC_DETAIL['Spiruna'],
        ],
        steps: [
            "與 <strong>冰原雪域</strong> 的 <strong>Jade</strong> 接受任務",
            "到 <strong>天空之城：雲彩公園4</strong> 的小屋與 <strong>Spiruna</strong> 對話",
            
        ],
    },{
        info: "./src/Quest/TheBookOfAncient/06.png",
        NPCs: [
            NPC_DETAIL['Spiruna'],
            NPC_DETAIL['RockCoveredInSnow'],
        ],
        steps: [
            "與 <strong>天空之城：雲彩公園4</strong> 小屋的 <strong>Spiruna</strong> 接受任務",
            "到 <strong>冰原雪域：冰雪峽谷1</strong> 與 <strong>RockCoveredInSnow</strong> 對話",
        ],
    },{
        info: "./src/Quest/TheBookOfAncient/07.png",
        NPCs: [
            NPC_DETAIL['RockCoveredInSnow'],
            NPC_DETAIL['Spiruna'],
        ],
        steps: [
            "與 <strong>冰原雪域：冰雪峽谷1</strong> 的 <strong>RockCoveredInSnow</strong> 接受任務，<br>獲得<strong>黑水晶碎片</strong>",
            "將 <strong>黑水晶碎片</strong> 交給 <strong>天空之城：雲彩公園4</strong> 小屋的 <strong>Spiruna</strong>",
        ],
    },{
        info: "./src/Quest/TheBookOfAncient/08.png",
        NPCs: [
            NPC_DETAIL['Spiruna'],
        ],
        steps: [
            "與 <strong>天空之城：雲彩公園4</strong> 小屋的 <strong>Spiruna</strong> 接受任務",
            "與 <strong>Spiruna旁的助手</strong> 對話",
        ],
    },{
        info: "./src/Quest/TheBookOfAncient/09.png",
        NPCs: [
            NPC_DETAIL['Spiruna'],
            NPC_DETAIL['KrielTheFairy'],
        ],
        steps: [
            "與 <strong>天空之城：雲彩公園4</strong> 小屋的 <strong>Spiruna旁的助手</strong> 接受任務",
            "到 <strong>天空之城：雜貨店</strong> 與 <strong>KrielTheFairy</strong> 對話",
        ],
    },{
        info: "./src/Quest/TheBookOfAncient/10.png",
        NPCs: [
            NPC_DETAIL['KrielTheFairy'],
        ],
        steps: [
            "與 <strong>天空之城：雜貨店</strong> 的 <strong>KrielTheFairy</strong> 對話",
            "準備<img src='./src/Item/StarPixieStarpiece.png' height='32'><strong>星光精靈碎片100個</strong>、"
            + "<img src='./src/Item/LunarPixieMoonpiece.png' height='32'><strong>月光精靈碎片50個</strong>、"
            + "<img src='./src/Item/LusterPixieSunpiece.png' height='32'><strong>日光精靈碎片30個</strong>，"
            + "交給 <strong>KrielTheFairy</strong>"
        ],
    },{
        info: "./src/Quest/TheBookOfAncient/11.png",
        NPCs: [
            NPC_DETAIL['KrielTheFairy'],
            NPC_DETAIL['Spiruna'],
        ],
        steps: [
            "與 <strong>天空之城：雜貨店</strong> 的 <strong>KrielTheFairy</strong> 對話，取得<strong>精靈之粉</strong>",
            "將 <strong>精靈之粉</strong> 交給 <strong>天空之城：雲彩公園4</strong> 小屋的 <strong>Spiruna</strong>"
        ],
    },{
        info: "./src/Quest/TheBookOfAncient/12.png",
        NPCs: [
            NPC_DETAIL['Spiruna'],
        ],
        steps: [
            "與 <strong>天空之城：雲彩公園4</strong> 小屋的 <strong>Spiruna</strong> 接受任務",
            "與 <strong>Spiruna旁的助手</strong> 對話",
        ],
    },{
        info: "./src/Quest/TheBookOfAncient/13.png",
        NPCs: [
            NPC_DETAIL['Spiruna'],
            NPC_DETAIL['Jade'],
        ],
        steps: [
            "與 <strong>Spiruna旁的助手</strong> 對話，取得 <strong>赫拉的飾品</strong>",
            "到 <strong>冰原雪域</strong> 將 <strong>赫拉的飾品</strong> 交給 <strong>Jade</strong>",
        ],
    },{
        info: "./src/Quest/TheBookOfAncient/14.png",
        NPCs: [
            NPC_DETAIL['Jade'],
            NPC_DETAIL['SmallTomb'],
        ],
        steps: [
            "與 <strong>冰原雪域</strong> 的 <strong>Jade</strong> 接受任務",
            "到 <strong>冰原雪域：狼的領土1</strong> 與 <strong>SmallTomb</strong> 對話",
            '提示：可在<strong>狼的領土1</strong>先將<strong>3個<img src="./src/Item/WerewolfToenail.png" height="32">狼人指甲</strong>準備好'
        ],
    },{
        info: "./src/Quest/TheBookOfAncient/15.png",
        NPCs: [
            NPC_DETAIL['SmallTomb'],
            NPC_DETAIL['Alcaster'],
        ],
        steps: [
            "與 <strong>冰原雪域：狼的領土1</strong> 的 <strong>SmallTomb</strong> 對話，取得 <strong>古老的戒指</strong>",
            "到 <strong>冰原雪域</strong> 與 <strong>Alcaster</strong> 對話",
        ],
    },{
        info: "./src/Quest/TheBookOfAncient/16.png",
        NPCs: [
            NPC_DETAIL['Alcaster'],
            NPC_DETAIL['Scadur'],
        ],
        steps: [
            "與 <strong>冰原雪域</strong> 的 <strong>Alcaster</strong> 接受任務",
            "到 <strong>冰原雪域</strong> 將 <strong>古老的戒指</strong> 交給 <strong>Scadur</strong>"
        ],
    },{
        info: "./src/Quest/TheBookOfAncient/17.png",
        NPCs: [
            NPC_DETAIL['Scadur'],
        ],
        steps: [
            "與 <strong>冰原雪域</strong> 的 <strong>Scadur</strong> 對話",
            "準備<img src='./src/Item/HectorTail.png' height='32'><strong>野狼尾巴80個</strong>、"
            + "<img src='./src/Item/WhiteFangTail.png' height='32'><strong>白狼尾巴80個</strong>，"
            + "交給 <strong>Scadur</strong>"
        ],
    },{
        info: "./src/Quest/TheBookOfAncient/18.png",
        NPCs: [
            NPC_DETAIL['Scadur'],
            NPC_DETAIL['DancesWithBalrog'],
        ],
        steps: [
            "與 <strong>冰原雪域</strong> 的 <strong>Scadur</strong> 對話，取回 <strong>古老的戒指</strong>",
            "到 <strong>勇士之村</strong> 找 <strong>DancesWithBalrog</strong> 對話",
        ],
    },{
        info: "./src/Quest/TheBookOfAncient/19.png",
        NPCs: [
            NPC_DETAIL['DancesWithBalrog'],
        ],
        steps: [
            "與 <strong>勇士之村</strong> 的 <strong>DancesWithBalrog</strong> 接受任務",
            '準備<img src="./src/Item/StrCrystal.png" height="32"><strong>力量水晶2個</strong>，交給 <strong>DancesWithBalrog</strong>'
        ],
    },{
        info: "./src/Quest/TheBookOfAncient/20.png",
        NPCs: [
            NPC_DETAIL['DancesWithBalrog'],
            NPC_DETAIL['GrendelTheReallyOld'],
        ],
        steps: [
            "與 <strong>勇士之村</strong> 的 <strong>DancesWithBalrog</strong> 接受任務，取得 <strong>古老的地圖碎片</strong>",
            "到 <strong>魔法森林</strong> 找 <strong>GrendelTheReallyOld</strong> 對話",
        ],
    },{
        info: "./src/Quest/TheBookOfAncient/21.png",
        NPCs: [
            NPC_DETAIL['GrendelTheReallyOld'],
        ],
        steps: [
            "與 <strong>魔法森林</strong> 的 <strong>GrendelTheReallyOld</strong> 接受任務",
            '準備<img src="./src/Item/IntCrystal.png" height="32"><strong>智慧水晶2個</strong>，交給 <strong>GrendelTheReallyOld</strong>'
        ],
    },{
        info: "./src/Quest/TheBookOfAncient/22.png",
        NPCs: [
            NPC_DETAIL['GrendelTheReallyOld'],
            NPC_DETAIL['AthenaPierce'],
        ],
        steps: [
            "與 <strong>魔法森林</strong> 的 <strong>GrendelTheReallyOld</strong> 接受任務，取得 <strong>古老的地圖碎片</strong>",
            "到 <strong>弓箭手村</strong> 找 <strong>AthenaPierce</strong> 對話",
        ],
    },{
        info: "./src/Quest/TheBookOfAncient/23.png",
        NPCs: [
            NPC_DETAIL['AthenaPierce'],
        ],
        steps: [
            "與 <strong>弓箭手村</strong> 的 <strong>AthenaPierce</strong> 接受任務",
            '準備<img src="./src/Item/DexCrystal.png" height="32"><strong>敏捷水晶2個</strong>，交給 <strong>AthenaPierce</strong>'
        ],
    },{
        info: "./src/Quest/TheBookOfAncient/24.png",
        NPCs: [
            NPC_DETAIL['AthenaPierce'],
            NPC_DETAIL['DarkLord'],
        ],
        steps: [
            "與 <strong>弓箭手村</strong> 的 <strong>AthenaPierce</strong> 接受任務，取得 <strong>古老的地圖碎片</strong>",
            "到 <strong>墮落城市</strong> 找 <strong>DarkLord</strong> 對話",
        ],
    },{
        info: "./src/Quest/TheBookOfAncient/25.png",
        NPCs: [
            NPC_DETAIL['DarkLord'],
        ],
        steps: [
            "與 <strong>墮落城市</strong> 的 <strong>DarkLord</strong> 接受任務",
            '準備<img src="./src/Item/LukCrystal.png" height="32"><strong>幸運水晶2個</strong>，交給 <strong>DarkLord</strong>'
        ],
    },{
        info: "./src/Quest/TheBookOfAncient/26.png",
        NPCs: [
            NPC_DETAIL['DarkLord'],
            NPC_DETAIL['Alcaster'],
        ],
        steps: [
            "與 <strong>墮落城市</strong> 的 <strong>DarkLord</strong> 接受任務，取得 <strong>古老的地圖碎片</strong>",
            "到 <strong>冰原雪域</strong> 將 <strong>古老的地圖碎片</strong> 交給 <strong>Alcaster</strong>",
        ],
    },{
        info: "./src/Quest/TheBookOfAncient/27.png",
        NPCs: [
            NPC_DETAIL['Alcaster'],
            NPC_DETAIL['CorporalEasy'],
        ],
        steps: [
            "與 <strong>冰原雪域</strong> 的 <strong>Alcaster</strong> 接受任務",
            "到 <strong>天空之城：雲彩公園6</strong> 找 <strong>CorporalEasy</strong> 對話",
        ],
    },{
        info: "./src/Quest/TheBookOfAncient/28.png",
        NPCs: [
            NPC_DETAIL['CorporalEasy'],
        ],
        steps: [
            "與 <strong>天空之城：雲彩公園6</strong> 的 <strong>CorporalEasy</strong> 接受任務",
            '準備<img src="./src/Item/WerewolfToenail.png" height="32"><strong>狼人指甲3個</strong>，交給 <strong>CorporalEasy</strong>'
        ],
    },{
        info: "./src/Quest/TheBookOfAncient/29.png",
        NPCs: [
            NPC_DETAIL['CorporalEasy'],
            NPC_DETAIL['Alcaster'],
        ],
        steps: [
            "與 <strong>天空之城：雲彩公園6</strong> 的 <strong>CorporalEasy</strong> 接受任務，取得 <strong>記憶之粉</strong>",
            "到 <strong>冰原雪域</strong> 將 <strong>記憶之粉</strong> 交給 <strong>Alcaster</strong>",
        ],
    },{
        info: "./src/Quest/TheBookOfAncient/30.png",
        NPCs: [
            NPC_DETAIL['Alcaster'],
            NPC_DETAIL['Statue'],
        ],
        steps: [
            "與 <strong>冰原雪域</strong> 的 <strong>Alcaster</strong> 接受任務",
            "到 <strong>天空之塔 8樓</strong> 使用 <strong>古老的戒指</strong> 調查 <strong>雕像</strong> 取得 <strong>上古魔書</strong>",
        ],
    },{
        info: "./src/Quest/TheBookOfAncient/31.png",
        NPCs: [
            NPC_DETAIL['Alcaster']
        ],
        steps: [
            "將 <strong>上古魔書</strong> 交給 <strong>冰原雪域</strong> 的 <strong>Alcaster</strong> 完成任務",
        ],
    }
];

// Vue實體
const questFlowVm = Vue.createApp({
    data() {
        return {
            questFlowDetails
        }
    }
}).mount('#Div_quest_flow');

// 切換頁面
function showPage(page) {
    document.querySelector('#Div_quest_info').classList.add('d-none');
    document.querySelector('#Div_quest_flow').classList.add('d-none');
    if(page === "info") {
        document.querySelector('#Div_quest_info').classList.remove('d-none');
    }
    else if(page === "flow") {
        document.querySelector('#Div_quest_flow').classList.remove('d-none');
    }
}
