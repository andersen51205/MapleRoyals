// 頁面資料
const requirements = [
    {
        title: "綜合1",
        image: "./src/Quest/Misc1.png",
    },{
        title: "綜合2",
        image: "./src/Quest/Misc2.png",
    },{
        title: "維多利亞島",
        image: "./src/Quest/Victoria1.png",
    },{
        title: "水世界",
        image: "./src/Quest/Aquarium1.png",
    },{
        title: "玩具城",
        image: "./src/Quest/Ludibrium1.png",
    },{
        title: "神木村1",
        image: "./src/Quest/Leafre1.png",
    },{
        title: "神木村2",
        image: "./src/Quest/Leafre2.png",
    },{
        title: "神木村3",
        image: "./src/Quest/Leafre3.png",
    },{
        title: "新葉城1",
        image: "./src/Quest/NLC1.png",
    },{
        title: "新葉城2",
        image: "./src/Quest/NLC2.png",
    },{
        title: "新加坡",
        image: "./src/Quest/CBD1.png",
    },{
        title: "世界旅行1",
        image: "./src/Quest/WorldTravel1.png",
    },{
        title: "世界旅行2",
        image: "./src/Quest/WorldTravel2.png",
    }
];
const details = [
    {
        title: "綜合1",
        info: "./src/Quest/Misc1.png",
        rows: [{
            mob: "./src/Mobs/GreenMushroom.png",
            location: '魔法森林：南部森林訓練場Ⅲ<br>(從"魔法森林南部"進入)',
            mapBtn: {
                content : "進入位置",
                img: "./src/Map/TheForestSouthOfEllinia.png",
                title: "魔法森林：魔法森林南部",
            },
            miniMapBtn:{
                img: "./src/Minimap/SouthernForestDungeonIII.png",
                title: "「魔法森林：南部森林訓練場Ⅲ」的入口處",
            },
        },{
            mob: "./src/Mobs/BlueWyvern.png",
            location: '神木村：藍翼龍巢穴<br>(從"峽谷東側路"進入)',
            mapBtn: {
                content : "進入位置",
                img: "./src/Map/CanyonEastRoad.png",
                title: "神木村：峽谷東側路"
            },
            miniMapBtn: {
                img: "./src/Minimap/BlueWyvernNest.png",
                title: "「神木村：藍翼龍巢穴」的入口處",
            },
        },{
            mob: "./src/Mobs/DarkCornian.png",
            location: '神木村：神秘森林',
            mapBtn: {
                img: "./src/Map/TheForestThatDisappeared.png",
                title: "神木村：神秘森林",
            },
        }]
    },{
        title: "綜合2",
        info: "./src/Quest/Misc2.png",
        rows: [{
            mob: "./src/Mobs/MemoryMonk.png",
            location: '時間神殿 : 回憶之路1',
            mapBtn: {
                img: "./src/Map/MemoryLane1.png",
                title: "時間神殿 : 回憶之路1",
            },
        },{
            mob: "./src/Mobs/Birks.png",
            width: "300",
            location: '神木村：森林岔道',
            mapBtn: {
                img: "./src/Map/ForestCrossroad.png",
                title: "神木村 : 森林岔道",
            },
        },{
            mob: "./src/Mobs/Homunculus.png",
            location: '瑪迦提亞城 : 研究所202號房',
            mapBtn: {
                img: "./src/Map/Lab-Unit202.png",
                title: "瑪迦提亞城 : 研究所202號房",
            }
        }]
    },{
        title: "維多利亞島",
        info: "./src/Quest/Victoria1.png",
        rows: [{
            mob: "./src/Mobs/WildKargo.png",
            location: '迷霧森林 : 魔龍領土 (換頻打怪)',
            mapBtn: {
                img: "./src/Map/WildCargoArea.png",
                title: "迷霧森林 : 魔龍領土",
            },
        },{
            mob: "./src/Mobs/CommanderSkeleton.png",
            location: '遺跡發掘地 : 遺跡之峭壁',
            mapBtn: {
                img: "./src/Map/RemainsCliff.png",
                title: "遺跡發掘地 : 遺跡之峭壁",
            },
        },{
            mob: "./src/Mobs/OfficerSkeleton.png",
            location: '遺跡發掘地 : 第三軍營',
            mapBtn: {
                content : "進入位置",
                img: "./src/Map/RemainsTombIV.png",
                title: "遺跡發掘地：遺跡之墓IV",
            },
            miniMapBtn:{
                img: "./src/Minimap/Camp3.png",
                title: "「遺跡發掘地 : 第三軍營」的入口處",
            },
        }]
    },{
        title: "水世界",
        info: "./src/Quest/Aquarium1.png",
        rows: [{
            mob: "./src/Mobs/Squids.png",
            width: "300",
            location: '水世界：危險海峽Ⅱ',
            mapBtn: {
                img: "./src/Map/DangerousSeaGorgeII.png",
                title: "水世界：危險海峽Ⅱ",
            },
        },{
            mob: "./src/Mobs/Thanatos.png",
            location: '玩具城鐘塔：遺忘的迴廊',
            mapBtn: {
                img: "./src/Map/ForgottenPassage.png",
                title: "玩具城鐘塔：遺忘的迴廊",
            },
        },{
            mob: "./src/Mobs/Flyeye.png",
            location: '水世界：危險的洞穴',
            mapBtn: {
                img: "./src/Map/TheDangerousCave.png",
                title: "水世界：危險的洞穴",
            },
        }]
    },{
        title: "玩具城",
        info: "./src/Quest/Ludibrium1.png",
        rows: [{
            mob: "./src/Mobs/GiganticSpiritViking.png",
            location: '玩具城鐘塔：糾結的時間<br>(從"扭曲的時間之路4"進入)',
            mapBtn: {
                content: "進入位置",
                img: "./src/Map/WarpedPathOfTime4.png",
                title: "玩具城鐘塔：扭曲的時間之路4",
            },
            miniMapBtn: {
                img: "./src/Minimap/TwistedTime.png",
                title: "「玩具城鐘塔：糾結的時間」的入口處",
            },
        },{
            mob: "./src/Mobs/GrimPhantomWatch.png",
            location: '玩具城鐘塔：禁忌的時間<br>(從"遺忘的時間之路4"進入)',
            mapBtn: {
                content: "進入位置",
                img: "./src/Map/ForgottenPathOfTime4.png",
                title: "玩具城鐘塔：遺忘的時間之路4",
            },
            miniMapBtn: {
                img: "./src/Minimap/ForbiddenTime.png",
                title: "「玩具城鐘塔：禁忌的時間」的入口處",
            },
        },{
            mob: "./src/Mobs/Gatekeeper.png",
            location: '玩具城鐘塔：扭曲的迴廊',
            mapBtn: {
                img: "./src/Map/WarpedPassage.png",
                title: "玩具城鐘塔：扭曲的迴廊",
            },
        }]
    },{
        title: "神木村1",
        info: "./src/Quest/Leafre1.png",
        rows: [{
            mob: "./src/Mobs/JrNewtie.png",
            location: '神木村：遭破壞的龍之巢穴',
            mapBtn: {
                img: "./src/Map/DestroyedDragonNest.png",
                title: "神木村：遭破壞的龍之巢穴",
            },
        },{
            mob: "./src/Mobs/Skelegon.png",
            location: '神木村：死龍巢穴',
            mapBtn: {
                img: "./src/Map/NestOfDeadDragon.png",
                title: "神木村：死龍巢穴",
            },
        },{
            mob: "./src/Mobs/Skelosaurus.png",
            location: '神木村：死龍巢穴',
            mapBtn: {
                img: "./src/Map/NestOfDeadDragon.png",
                title: "神木村：死龍巢穴",
            },
        }]
    },{
        title: "神木村2",
        info: "./src/Quest/Leafre2.png",
        rows: [{
            mob: "./src/Mobs/Birk.png",
            location: '神木村：森林岔道',
            mapBtn: {
                img: "./src/Map/ForestCrossroad.png",
                title: "神木村：森林岔道",
            },
        },{
            mob: "./src/Mobs/BlackKentaurus.png",
            location: '神木村：暗黑半人馬領土',
            mapBtn: {
                img: "./src/Map/AreaOfBlackKentaurus.png",
                title: "神木村：暗黑半人馬領土",
            },
        },{
            mob: "./src/Mobs/Brexton.png",
            location: '神木村：龍森林 Ⅲ',
            mapBtn: {
                img: "./src/Map/DragonForestIII.png",
                title: "神木村：龍森林 Ⅲ",
            },
        }]
    },{
        title: "神木村3",
        info: "./src/Quest/Leafre3.png",
        rows: [{
            mob: "./src/Mobs/DrangonTurtles.png",
            width: "300",
            location: '神木村：龍森林路口',
            mapBtn: {
                img: "./src/Map/EntranceToDragonForest.png",
                title: "神木村：龍森林路口",
            },
        },{
            mob: "./src/Mobs/Hobi.png",
            location: '神木村：怪脾氣森林',
            mapBtn: {
                img: "./src/Map/CrankyForest.png",
                title: "神木村：怪脾氣森林",
            },
        },{
            mob: "./src/Mobs/Rash.png",
            location: '神木村：西邊森林',
            mapBtn: {
                img: "./src/Map/WestLeafreForest.png",
                title: "神木村：西邊森林",
            },
        }]
    },{
        title: "新葉城1",
        info: "./src/Quest/NLC1.png",
        rows: [{
            mob: "./src/Mobs/GluttonGhoul.png",
            location: '幻影森林：鬧鬼宅邸大廳<br>(從"新葉城"最左處搭車可抵達"鬧鬼宅邸")',
            miniMapBtn: {
                img: "./src/Minimap/HauntedHouseFoyer.png",
                title: "「幻影森林：鬧鬼宅邸大廳」的入口處",
            },
        },{
            mob: "./src/Mobs/WolfSpider.png",
            location: '新葉城：機械蜘蛛洞穴<br>(從"大笨鐘"進入數張圖後抵達)',
            mapBtn: {
                img: "./src/Map/WolfSpiderCavern.png",
                title: "新葉城：機械蜘蛛洞穴",
            },
            miniMapBtn: {
                img: "./src/Minimap/BiggerBenLobby.png",
                title: "「新葉城：大笨鐘」的入口處",
            },
        },{
            mob: "./src/Mobs/BabyTyphon.png",
            location: '紅杉木堡壘：危險之路<br>(從"較低的攀升"進入)',
            miniMapBtn: {
                img: "./src/Minimap/ThePathOfPeril.png",
                title: "「紅杉木堡壘：危險之路」的入口處",
            },
            howToGoBtnDisabled: {
                img: "",
                title: "",
            },
            spawnPointBtn: {
                img: "./src/Minimap/BabyTyphon.png",
                title: "怪物重生點：黃點處"
            },
        }]
    },{
        title: "新葉城2",
        info: "./src/Quest/NLC2.png",
        rows: [{
            mob: "./src/Mobs/ElderWraith.png",
            location: '幻影森林：邪惡的盡頭<br>(從"幻影森林：被遺忘的小徑"進入)',
            miniMapBtn: {
                img: "./src/Minimap/TheEvilDead.png",
                title: "「幻影森林：邪惡的盡頭」的入口處",
            },
            howToGoBtnDisabled: {
                img: "",
                title: "",
            },
        },{
            mob: "./src/Mobs/NightShadow.png",
            location: '守護者城堡：憤怒夜晚<br>(從"守護者城堡：大師大廳"進入)',
            miniMapBtn: {
                img: "./src/Minimap/TheWrathOfNight.png",
                title: "「守護者城堡：憤怒夜晚」的入口處",
            },
            howToGoBtnDisabled: {
                img: "",
                title: "",
            },
        },{
            mob: "./src/Mobs/CrimsonGuardian.png",
            location: '紅杉木堡壘：守護者城堡',
            mapBtn: {
                img: "./src/Map/CrmisonwoodKeep.png",
                title: "紅杉木堡壘：守護者城堡",
            },
            howToGoBtnDisabled: {
                img: "",
                title: "",
            },
        }]
    },{
        title: "新加坡",
        info: "./src/Quest/CBD1.png",
        rows: [{
            mob: "./src/Mobs/Duku.png",
            location: '新加坡：毀滅公園1',
            mapBtn: {
                img: "./src/Map/DestroyedParkI.png",
                title: "新加坡：毀滅公園1",
            },
        },{
            mob: "./src/Mobs/Petrifighter.png",
            location: '新加坡：烏魯城中心',
            mapBtn: {
                img: "./src/Map/UluCityCenter.png",
                title: "新加坡：烏魯城中心",
            },
        },{
            mob: "./src/Mobs/Slygie.png",
            location: '新加坡：烏魯莊園Ⅱ',
            mapBtn: {
                img: "./src/Map/UluEstateII.png",
                title: "新加坡：烏魯莊園Ⅱ",
            },
        }]
    },{
        title: "世界旅行1",
        info: "./src/Quest/WorldTravel1.png",
        rows: [{
            mob: "./src/Mobs/GiantGoldMonk.png",
            location: '少林寺：藏經閣7樓<br>(需解完"進入少林寺"任務，<br>才可進入大雄寶殿)',
            mapBtn: {
                img: "./src/Map/ShaolinTempleFloor7.png",
                title: "少林寺：藏經閣7樓",
            },
            shortCutBtn: {},
            prequestBtn: {
                img: "./src/Quest/EnteringShaolinTemple.png",
                title: "前置任務：進入少林寺"
            }
        },{
            mob: "./src/Mobs/DreamyGhost.png",
            location: '日本神社：與大佛的邂逅',
            mapBtn: {
                img: "./src/Map/EncounterWithBuddha.png",
                title: "日本神社：與大佛的邂逅",
            },
        },{
            mob: "./src/Mobs/TempleBlockMonster.png",
            location: '少林寺：少林寺廣場',
            mapBtn: {
                img: "./src/Map/TemplePlaza.png",
                title: "少林寺：少林寺廣場",
            },
            shortCutBtn: {},
            spawnPointBtn: {
                img: "./src/Minimap/TempleBlockMonster.png",
                title: "怪物重生點：藍點處"
            }
        }]
    },{
        title: "世界旅行2",
        info: "./src/Quest/WorldTravel2.png",
        rows: [{
            mob: "./src/Mobs/Jonin.png",
            location: '楓葉古城：城堡走廊7 (黃色牆壁第一張圖)',
            howToGoBtn: {
                index: 0,
            },
        },{
            mob: "./src/Mobs/BlackBear.png",
            location: '廬山鎮：山腳',
            mapBtn: {
                img: "./src/Map/FootOfTheMountain.png",
                title: "廬山鎮：山腳",
            },
        },{
            mob: "./src/Mobs/WhiteTiger.png",
            location: '廬山鎮：山腳',
            mapBtn: {
                img: "./src/Map/FootOfTheMountain.png",
                title: "廬山鎮：山腳",
            }
        }]
    }
];
const howToGos = [
    {
        rows: [
            {
                text: "1. 到日本神社找 <strong>Palanquin</strong> 前往楓葉古城",
                img: "./src/NPC/Palanquin.png",
            },{
                text: "2. 楓葉古城：城堡外",
                img: "./src/HowToGo/NinjaCastle/Map1.png",
            },{
                text: "3. 楓葉古城：城門內",
                img: "./src/HowToGo/NinjaCastle/Map2.png",
            },{
                text: "4. 楓葉古城：城堡走廊1",
                img: "./src/HowToGo/NinjaCastle/Map3.png",
            },{
                text: "5. 楓葉古城：城堡走廊2 (一幅畫)",
                img: "./src/HowToGo/NinjaCastle/Map4.png",
            },{
                text: "6. 楓葉古城：城堡走廊3 (兩幅畫之間有洞)",
                img: "./src/HowToGo/NinjaCastle/Map5.png",
            },{
                text: "7. 楓葉古城：城堡走廊4 (三幅畫)",
                img: "./src/HowToGo/NinjaCastle/Map6.png",
            },{
                text: "8. 楓葉古城：城堡走廊5 (中間地上有屏風)",
                img: "./src/HowToGo/NinjaCastle/Map7.png",
            },{
                text: "9. 楓葉古城：城堡走廊6 (右上角有樓梯)",
                img: "./src/HowToGo/NinjaCastle/Map8.png",
            }
        ],
    }
]

// Modal物件
const howToGoModal = new bootstrap.Modal(document.querySelector('#Modal_how_to_go'));
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
            detail: {},
        }
    }
}).mount('#Div_requirement_detail');
const howToGoVm = Vue.createApp({
    data() {
        return {
            content: {},
        }
    }
}).mount('#Modal_how_to_go');

// 切換頁面
function showPage(page) {
    document.querySelector('#Div_quest_info').classList.add('d-none');
    document.querySelector('#Div_requirement_list').classList.add('d-none');
    document.querySelector('#Div_requirement_detail').classList.add('d-none');
    if(page === "info") {
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
function showHowToGo(el) {
    const dataIndex = el.getAttribute('data-index');
    if(dataIndex) {
        howToGoVm.content = howToGos[dataIndex];
        howToGoModal.show();
    }
}
