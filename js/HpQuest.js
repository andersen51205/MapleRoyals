// 頁面資料
const requirements = [{
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
const details = [
    {
        title: "綜合1",
        info: "./image/HpQuest/Misc1.png",
        rows: [{
            mob: "./image/HpQuest/GreenMushroom.png",
            location: '魔法森林：南部森林訓練場Ⅲ<br>(從"魔法森林南部"進入)',
            mapBtn: {
                content : "進入位置",
                img: "./image/HpQuest/Map-TheForestSouthOfEllinia.png",
                title: "魔法森林：魔法森林南部",
            },
            miniMapBtn:{
                img: "./image/HpQuest/Minimap-SouthernForestDungeonIII.png",
                title: "「魔法森林：南部森林訓練場Ⅲ」入口處",
            },
        },{
            mob: "./image/HpQuest/BlueWyvern.png",
            location: '神木村：藍翼龍巢穴<br>(從"峽谷東側路"進入)',
            mapBtn: {
                content : "進入位置",
                img: "./image/HpQuest/Map-CanyonEastRoad.png",
                title: "神木村：峽谷東側路"
            },
            miniMapBtn: {
                img: "./image/HpQuest/Minimap-BlueWyvernNest.png",
                title: "「神木村：藍翼龍巢穴」入口處",
            },
        },{
            mob: "./image/HpQuest/DarkCornian.png",
            location: '神木村：神秘森林',
            mapBtn: {
                img: "./image/HpQuest/Map-TheForestThatDisappeared.png",
                title: "神木村：神秘森林",
            },
        }]
    },{
        title: "綜合2",
        info: "./image/HpQuest/Misc2.png",
        rows: [{
            mob: "./image/HpQuest/MemoryMonk.png",
            location: '時間神殿 : 回憶之路1',
            mapBtn: {
                img: "./image/HpQuest/Map-MemoryLane1.png",
                title: "時間神殿 : 回憶之路1",
            },
        },{
            mob: "./image/HpQuest/Birks.png",
            width: "300",
            location: '神木村：森林岔道',
            mapBtn: {
                img: "./image/HpQuest/Map-ForestCrossroad.png",
                title: "神木村 : 森林岔道",
            },
        },{
            mob: "./image/HpQuest/Homunculus.png",
            location: '瑪迦提亞城 : 研究所202號房',
            mapBtn: {
                img: "./image/HpQuest/Map-LabU202.png",
                title: "瑪迦提亞城 : 研究所202號房",
            }
        }]
    },{
        title: "水世界",
        info: "./image/HpQuest/Aquarium1.png",
        rows: [{
            mob: "./image/HpQuest/Squids.png",
            width: "300",
            location: '水世界：危險海峽Ⅱ',
            mapBtn: {
                img: "./image/HpQuest/Map-DangerousSeaGorgeII.png",
                title: "水世界：危險海峽Ⅱ",
            },
        },{
            mob: "./image/HpQuest/Thanatos.png",
            location: '玩具城鐘塔：遺忘的迴廊',
            mapBtn: {
                img: "./image/HpQuest/Map-ForgottenPassage.png",
                title: "玩具城鐘塔：遺忘的迴廊",
            },
        },{
            mob: "./image/HpQuest/Flyeye.png",
            location: '水世界：危險的洞穴',
            mapBtn: {
                img: "./image/HpQuest/Map-TheDangerousCave.png",
                title: "水世界：危險的洞穴",
            },
        }]
    },{
        title: "玩具城",
        info: "./image/HpQuest/Ludibrium1.png",
        rows: [{
            mob: "./image/HpQuest/GiganticSpiritViking.png",
            location: '玩具城鐘塔：糾結的時間<br>(從"扭曲的時間之路4"進入)',
            mapBtn: {
                content: "進入位置",
                img: "./image/HpQuest/Map-WarpedPathOfTime4.png",
                title: "玩具城鐘塔：扭曲的時間之路4",
            },
            miniMapBtn: {
                img: "./image/HpQuest/Minimap-TwistedTime.png",
                title: "「玩具城鐘塔：糾結的時間」入口處",
            },
        },{
            mob: "./image/HpQuest/GrimPhantomWatch.png",
            location: '玩具城鐘塔：禁忌的時間<br>(從"遺忘的時間之路4"進入)',
            mapBtn: {
                content: "進入位置",
                img: "./image/HpQuest/Map-ForgottenPathOfTime4.png",
                title: "玩具城鐘塔：遺忘的時間之路4",
            },
            miniMapBtn: {
                img: "./image/HpQuest/Minimap-ForbiddenTime.png",
                title: "「玩具城鐘塔：禁忌的時間」入口處",
            },
        },{
            mob: "./image/HpQuest/Gatekeeper.png",
            location: '玩具城鐘塔：扭曲的迴廊',
            mapBtn: {
                img: "./image/HpQuest/Map-WarpedPassage.png",
                title: "玩具城鐘塔：扭曲的迴廊",
            },
        }]
    },{
        title: "神木村1",
        info: "./image/HpQuest/Leafre1.png",
        rows: [{
            mob: "./image/HpQuest/JrNewtie.png",
            location: '神木村：遭破壞的龍之巢穴',
            mapBtn: {
                img: "./image/HpQuest/Map-DestroyedDragonNest.png",
                title: "神木村：遭破壞的龍之巢穴",
            },
        },{
            mob: "./image/HpQuest/Skelegon.png",
            location: '神木村：死龍巢穴',
            mapBtn: {
                img: "./image/HpQuest/Map-NestOfDeadDragon.png",
                title: "神木村：死龍巢穴",
            },
        },{
            mob: "./image/HpQuest/Skelosaurus.png",
            location: '神木村：死龍巢穴',
            mapBtn: {
                img: "./image/HpQuest/Map-NestOfDeadDragon.png",
                title: "神木村：死龍巢穴",
            },
        }]
    },{
        title: "神木村2",
        info: "./image/HpQuest/Leafre2.png",
        rows: [{
            mob: "./image/HpQuest/Birk.png",
            location: '神木村：森林岔道',
            mapBtn: {
                img: "./image/HpQuest/Map-ForestCrossroad.png",
                title: "神木村：森林岔道",
            },
        },{
            mob: "./image/HpQuest/BlackKentaurus.png",
            location: '神木村：暗黑半人馬領土',
            mapBtn: {
                img: "./image/HpQuest/Map-AreaOfBlackKentaurus.png",
                title: "神木村：暗黑半人馬領土",
            },
        },{
            mob: "./image/HpQuest/Brexton.png",
            location: '神木村：龍森林 Ⅲ',
            mapBtn: {
                img: "./image/HpQuest/Map-DragonForestIII.png",
                title: "神木村：龍森林 Ⅲ",
            },
        }]
    },{
        title: "神木村3",
        info: "./image/HpQuest/Leafre3.png",
        rows: [{
            mob: "./image/HpQuest/DrangonTurtles.png",
            width: "300",
            location: '神木村：龍森林路口',
            mapBtn: {
                img: "./image/HpQuest/Map-EntranceToDragonForest.png",
                title: "神木村：龍森林路口",
            },
        },{
            mob: "./image/HpQuest/Hobi.png",
            location: '神木村：怪脾氣森林',
            mapBtn: {
                img: "./image/HpQuest/Map-CrankyForest.png",
                title: "神木村：怪脾氣森林",
            },
        },{
            mob: "./image/HpQuest/Rash.png",
            location: '神木村：西邊森林',
            mapBtn: {
                img: "./image/HpQuest/Map-WestLeafreForest.png",
                title: "神木村：西邊森林",
            },
        }]
    },{
        title: "新葉城",
        info: "./image/HpQuest/NLC1.png",
        rows: [{
            mob: "./image/HpQuest/GluttonGhoul.png",
            location: '幻影森林：鬧鬼宅邸大廳<br>(從"新葉城"最左處搭車可抵達"鬧鬼宅邸")',
            miniMapBtn: {
                img: "./image/HpQuest/Minimap-HauntedHouseFoyer.png",
                title: "「幻影森林：鬧鬼宅邸大廳」入口處",
            },
        },{
            mob: "./image/HpQuest/WolfSpider.png",
            location: '新葉城：機械蜘蛛洞穴<br>(從"大笨鐘"進入數張圖後抵達)',
            mapBtn: {
                img: "./image/HpQuest/Map-WolfSpiderCavern.png",
                title: "新葉城：機械蜘蛛洞穴",
            },
            miniMapBtn: {
                img: "./image/HpQuest/Minimap-BiggerBenLobby.png",
                title: "「新葉城：大笨鐘」入口處",
            },
        },{
            mob: "./image/HpQuest/BabyTyphon.png",
            location: '紅杉木堡壘：危險之路<br>(從"較低的攀升"進入)',
            miniMapBtn: {
                img: "./image/HpQuest/Minimap-ThePathOfPeril.png",
                title: "紅杉木堡壘：較低的攀升",
            },
            howToGoBtn: {
                img: "",
                title: "",
            },
            spawnPointBtn: {
                img: "./image/HpQuest/Minimap-BabyTyphon.png",
                title: "怪物重生點：黃點處"
            },
        }]
    },{
        title: "新加坡",
        info: "./image/HpQuest/CBD1.png",
        rows: [{
            mob: "./image/HpQuest/Duku.png",
            location: '新加坡：毀滅公園1',
            mapBtn: {
                img: "./image/HpQuest/Map-DestroyedParkI.png",
                title: "新加坡：毀滅公園1",
            },
        },{
            mob: "./image/HpQuest/Petrifighter.png",
            location: '新加坡：烏魯城中心',
            mapBtn: {
                img: "./image/HpQuest/Map-UluCityCenter.png",
                title: "新加坡：烏魯城中心",
            },
        },{
            mob: "./image/HpQuest/Slygie.png",
            location: '新加坡：烏魯莊園Ⅱ',
            mapBtn: {
                img: "./image/HpQuest/Map-UluEstateII.png",
                title: "新加坡：烏魯莊園Ⅱ",
            },
        }]
    },{
        title: "世界旅行",
        info: "./image/HpQuest/WorldTravel1.png",
        rows: [{
            mob: "./image/HpQuest/GiantGoldMonk.png",
            location: '少林寺：藏經閣7樓<br>(需解完"進入少林寺"任務，<br>才可進入大雄寶殿)',
            mapBtn: {
                img: "./image/HpQuest/Map-ShaolinTempleFloor7.png",
                title: "少林寺：藏經閣7樓",
            },
            shortCutBtn: {},
            prequestBtn: {
                img: "./image/HpQuest/EnteringShaolinTemple.png",
                title: "前置任務：進入少林寺"
            }
        },{
            mob: "./image/HpQuest/DreamyGhost.png",
            location: '日本神社：與大佛的邂逅',
            mapBtn: {
                img: "./image/HpQuest/Map-EncounterWithBuddha.png",
                title: "日本神社：與大佛的邂逅",
            },
        },{
            mob: "./image/HpQuest/TempleBlockMonster.png",
            location: '少林寺：少林寺廣場',
            mapBtn: {
                img: "./image/HpQuest/Map-TemplePlaza.png",
                title: "少林寺：少林寺廣場",
            },
            shortCutBtn: {},
            spawnPointBtn: {
                img: "./image/HpQuest/Minimap-TempleBlockMonster.png",
                title: "怪物重生點：藍點處"
            }
        }]
    }
];

// Vue實體
const requirementListVm = Vue.createApp({
    data() {
        return {
            requirements
        }
    }
}).mount('#Div_requirement_list');
const detailVm = Vue.createApp({
    data() {
        return {
            detail: [],
        }
    }
}).mount('#Div_requirement_detail');
// 切換頁面
function showPage(page) {
    document.querySelector('#Div_quest_info').classList.add('d-none');
    document.querySelector('#Div_requirement_list').classList.add('d-none');
    document.querySelector('#Div_requirement_detail').classList.add('d-none');
    if(page === "info") {
        const element = document.querySelector('.my-element');
        element.classList.add('animate__animated', 'animate__bounceOutLeft');
        document.querySelector('#Div_quest_info').classList.remove('d-none');
    }
    else if(page === "requirement") {
        document.querySelector('#Div_requirement_list').classList.remove('d-none');
    }
    else if(page === "detail") {
        document.querySelector('#Div_requirement_detail').classList.remove('d-none');
    }
}
function showDetail(el) {
    const dataIndex = el.getAttribute('data-index');
    if(dataIndex) {
        detailVm.detail = details[dataIndex];
        showPage('detail');
    }
}
