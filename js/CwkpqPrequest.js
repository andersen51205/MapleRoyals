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
    Lukan: {
        img: "Lukan.png",
        route: {
        }
    },
};
const MOB_DETAIL = {
    KillaBee: {
        img: 'KillaBee.png',
        map: {
            img: 'MesoGears-DeityRoom.png',
            title: '大笨鐘：女神室',
        }
    },
    FireTusk: {
        img: 'FireTusk.png',
        map: {
            img: 'MesoGears-FireChamber.png',
            title: '大笨鐘：火之密室',
        }
    },
    MightyMapleEaters: {
        img: 'MightyMapleEaters.png',
        map: {
            img: 'Masteria-KrakianJungleBasin.png',
            title: '新葉城：克蘭卡叢林盆地',
        }
    },
    Electrophant: {
        img: 'Electrophant.png',
        map: {
            img: 'Masteria-KrakianJungleBasin.png',
            title: '新葉城：克蘭卡叢林盆地'
        }
    },
    IAmRobot: {
        img: 'IAmRobot.png',
        map: {
            img: 'Masteria-MountainSlopes.png',
            title: '新葉城：高山坡地'
        }
    },
    BarnardGray: {
        img: 'BarnardGray.png',
        map: {
            img: 'KulanFieldI.png',
            title: '地球防衛總部：克嵐草原I'
        }
    },
    TickTock: {
        img: 'TickTock.png',
        map: {
            img: 'Ludibrium-WhirlpoolOfTime.png',
            title: '玩具城：時間漩渦'
        }
    },
    Stormbreaker: {
        img: 'Stormbreaker.png',
    },
    Windraider: {
        img: 'Windraider.png',
    },
    Firebrand: {
        img: 'Firebrand.png',
    },
    NightShadow: {
        img: 'NightShadow.png',
    },
    Typhon: {
        img: 'Typhon.png',
        map: {
            img: 'ThePathOfPeril.png',
            title: '紅杉木堡壘：危險之路'
        }
    }
}
const prequestList = [
    {
        name: "1. 蘇白尼的遺物",
        npc: NPC_DETAIL['JohnBarricade'],
        levelRestrictions: "36等",
        prerequisite: "無",
        questFlow: 'subanisLegacy',
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
        questFlow: 'findingJack',
    }, {
        name: "5. 迷失在翻譯裡",
        npc: NPC_DETAIL['Jack'],
        levelRestrictions: "70等",
        prerequisite: "完成任務「<strong>尋找傑克</strong>」",
        questFlow: 'lostInTranslation',
    }, {
        name: "6. 力挽狂瀾",
        npc: NPC_DETAIL['Jack'],
        levelRestrictions: "70等",
        prerequisite: "完成任務「<strong>迷失在翻譯裡</strong>」",
        reward: {
            icon: 'CrimsonwoodKeystone.png',
            name: '守護者的鑰匙石',
        },
        questFlow: 'stemmingTheTide',
    }, {
        name: "其他：英勇印記",
        npc: NPC_DETAIL['JohnBarricade'],
        levelRestrictions: "70等",
        prerequisite: "完成任務「<strong>力挽狂瀾</strong>」",
        reward: {
            icon: 'MarkerOfHeroism.png',
            name: '英雄標誌',
        },
        questFlow: 'theMarkOfHeroism',
    }
];
const questFlowLists = {
    subanisLegacy: [
        {
            info: "SubanisLegacy1.png",
            npcs: [
                NPC_DETAIL['JohnBarricade'],
            ],
            steps: [
                {
                    text: "殺人虎頭蜂50隻、打倒火焰象40隻、巨靈食人花30隻。",
                    mobs: [
                        MOB_DETAIL['KillaBee'],
                        MOB_DETAIL['FireTusk'],
                        MOB_DETAIL['MightyMapleEaters'],
                    ]
                }
            ]
        }, {
            info: "SubanisLegacy2.png",
            npcs: [
                NPC_DETAIL['JohnBarricade'],
            ],
            steps: [
                {
                    text: '打倒電擊象蒐集50個 <img class="my-1" src="./src/Item/HyperGlyph.png" height="32"> 翻譯水晶。',
                    mobs: [
                        MOB_DETAIL['Electrophant'],
                    ]
                }
            ]
        }, {
            info: "SubanisLegacy3.png",
            npcs: [
                NPC_DETAIL['JohnBarricade'],
            ],
            steps: [
                {
                    text: '打倒電子機器人蒐集50個 <img class="my-1" src="./src/Item/MesoGearMapPiece.png" height="32"> 地圖碎片。',
                    mobs: [
                        MOB_DETAIL['IAmRobot'],
                    ]
                }
            ]
        }
    ],
    lost: [
        {
            info: "Lost.png",
            npcs: [
                NPC_DETAIL['ElpamGorlab'],
            ],
            steps: [
                {
                    text: '打倒葛雷族人蒐集50個 <img class="my-1" src="./src/Item/ElpamMagnet.png" height="32"> 艾爾潘磁石。',
                    mobs: [
                        MOB_DETAIL['BarnardGray'],
                    ]
                }
            ]
        }
    ],
    reversal: [
        {
            info: "Reversal.png",
            npcs: [
                NPC_DETAIL['ElpamGorlab'],
            ],
            steps: [
                {
                    text: '與 <strong>新葉城</strong> 的 <strong>ElpamGorlab</strong> 對話',
                }, {
                    text: '選 <strong>(1)Sure, as long as you give it back.</strong><br>接受任務',
                }, {
                    text: '打倒鼬鼠鬧鐘蒐集60個 <img class="my-1" src="./src/Item/TemporalFragment.png" height="32"> 時光手錶。',
                    mobs: [
                        MOB_DETAIL['TickTock'],
                    ]
                }
            ]
        }
    ],
    findingJack: [
        {
            info: "FindingJack.png",
            npcs: [
                NPC_DETAIL['JohnBarricade'],
                NPC_DETAIL['Jack'],
            ],
            steps: [
                {
                    text: '與 <strong>大笨鐘：大廳</strong> 的 <strong>JohnBarricade</strong> 對話',
                }, {
                    text: "選 <strong>(1)Your brother? What's the news?</strong><br>接受任務",
                }, {
                    text: "與 <strong>紅杉木堡壘：疼痛洞穴</strong> 的 <strong>Jack</strong> 對話",
                }, {
                    text: '取得 <img class="my-1" src="./src/Item/MapOfPhantomForest.png" height="32"> <strong>幻影森林地圖</strong>後，<br>就能使用幻影森林的密道了。',
                }
            ]
        }
    ],
    lostInTranslation: [
        {
            info: "LostInTranslation1.png",
            npcs: [
                NPC_DETAIL['Jack'],
                NPC_DETAIL['JohnBarricade'],
            ],
            steps: [
                {
                    text: '與 <strong>紅杉木堡壘：疼痛洞穴</strong> 的 <strong>Jack</strong> 對話',
                }, {
                    text: '與 <strong>大笨鐘：大廳</strong> 的 <strong>JohnBarricade</strong> 對話',
                }
            ]
        }, {
            info: "LostInTranslation2.png",
            npcs: [
                NPC_DETAIL['JohnBarricade'],
                NPC_DETAIL['ElpamGorlab'],
            ],
            steps: [
                {
                    text: '與 <strong>大笨鐘：大廳</strong> 的 <strong>JohnBarricade</strong> 對話',
                }, {
                    text: '與 <strong>新葉城：市區中心</strong> 的 <strong>ElpamGorlab</strong> 對話',
                }
            ]
        }, {
            info: "LostInTranslation3.png",
            npcs: [
                NPC_DETAIL['JohnBarricade'],
                NPC_DETAIL['Jack'],
            ],
            steps: [
                {
                    text: '與 <strong>大笨鐘：大廳</strong> 的 <strong>JohnBarricade</strong> 對話',
                }, {
                    text: '與 <strong>紅杉木堡壘：疼痛洞穴</strong> 的 <strong>Jack</strong> 對話',
                }
            ]
        }
    ],
    stemmingTheTide: [
        {
            info: "StemmingTheTide.png",
            npcs: [
                NPC_DETAIL['Jack'],
            ],
            steps: [
                {
                    text: '與 <strong>紅杉木堡壘：疼痛洞穴</strong> 的 <strong>Jack</strong> 對話',
                }
            ]
        }, {
            info: "TheBrewingStorm.png",
            npcs: [
                NPC_DETAIL['Lukan'],
            ],
            steps: [
                {
                    text: '與 <strong>幻影森林：幻影之路</strong> 的 <strong>Lukan</strong> 對話',
                }, {
                    text: '打倒破風衛士蒐集10個 <img class="my-1" src="./src/Item/StormbreakerBadge.png" height="32"> 破風衛士的徽章。',
                    mobs: [
                        MOB_DETAIL['Stormbreaker'],
                    ]
                }
            ]
        }, {
            info: "StormingTheCastle.png",
            npcs: [
                NPC_DETAIL['Lukan'],
            ],
            steps: [
                {
                    text: '與 <strong>幻影森林：幻影之路</strong> 的 <strong>Lukan</strong> 對話',
                }, {
                    text: '打倒<strong>疾風刺客</strong>75隻、<strong>火印行者</strong>75隻、<strong>暗影武士</strong>75隻。',
                    mobs: [
                        MOB_DETAIL['Windraider'],
                        MOB_DETAIL['Firebrand'],
                        MOB_DETAIL['NightShadow'],
                    ]
                }, {
                    text: '與 <strong>幻影森林：幻影之路</strong> 的 <strong>Lukan</strong> 對話，<br>'+
                        '取得 <img class="my-1" src="./src/Item/CrimsonwoodKeystone.png" height="32"> 守護者的鑰匙石。',
                }
            ]
        }, {
            info: "StemmingTheTide.png",
            npcs: [
                NPC_DETAIL['Jack'],
            ],
            steps: [
                {
                    text: '拿 <img class="my-1" src="./src/Item/CrimsonwoodKeystone.png" height="32"> 守護者的鑰匙石<br>'+
                        '與 <strong>紅杉木堡壘：疼痛洞穴</strong> 的 <strong>Jack</strong> 對話，完成任務後，就能參加CWKPQ了。',
                }
            ]
        }
    ],
    theMarkOfHeroism: [
        {
            info: "TheMarkOfHeroism.png",
            npcs: [
                NPC_DETAIL['JohnBarricade'],
            ],
            steps: [
                {
                    text: '與 <strong>大笨鐘：大廳</strong> 的 <strong>JohnBarricade</strong> 對話',
                }, {
                    text: '準備 10個 <img class="my-1" src="./src/Item/GoldOre.png" height="32"> 黃金母礦，'+
                        '1個 <img class="my-1" src="./src/Item/PowerCrystalOre.png" height="32"> 力量母礦，'+
                        '打倒 提豐 蒐集4個 <img class="my-1" src="./src/Item/TyphonFeather.png" height="32"> 提豐羽毛。',
                    mobs: [
                        MOB_DETAIL['Typhon'],
                    ]
                }, {
                    text: '將材料拿給 <strong>大笨鐘：大廳</strong> 的 <strong>JohnBarricade</strong>',
                }, {
                    text: '取得 <img class="my-1" src="./src/Item/MarkerOfHeroism.png" height="32"> <strong>英雄標誌</strong> 後，<br>'+
                        '就能在英雄峽谷使用密道快速通關。',
                }
            ]
        }
    ]
};

// Vue實體
const mainVm = Vue.createApp({
    data() {
        return {
            prequestList,
            questFlowDetails: [],
        }
    }
}).mount('#Main_content');

// 切換頁面
function showPage(page) {
    document.querySelector('.main-page').classList.add('d-none');
    document.querySelector('.flow-page').classList.add('d-none');
    if(page === 'info') {
        mainVm.$data.questFlowDetails = [];
        document.querySelector('.main-page').classList.remove('d-none');
    }
    else {
        mainVm.$data.questFlowDetails = questFlowLists[page];
        document.querySelector('.flow-page').classList.remove('d-none');
    }
}
