/**
 * Data Format
 * <skill_name>: {
 *      name: <skill_name>,
 *      img: <path/to/img.png>,
 *      job: {
 *          class: <job_class>,
 *          name: <job_name>,
 *      },
 *      mastery: [
 *          {
 *              isAvailable: <true|false>,
 *              obtain: <quest|monster>
 *              from: <quest_name|monster_array>,
 *          }, {
 *              ...
 *          }, {
 *              ...
 *          }
 *      ]
 * }
 */
const OBTAIN_FROM = {
    job: 'job',
    quest: 'quest',
    monster: 'monster',
};
const JOB_TEXT = '四轉直接取得';
const SKILL_BASE_PATH = 'src/Skill';
const SKILL_DATA = [
    {
        name: '楓葉祝福',
        img: SKILL_BASE_PATH+'/MapleWarrior.png',
        job: {
            class: 'all',
            name: '全職業',
        },
        mastery: [
            {
                isAvailable: true,
                obtain: OBTAIN_FROM.job,
                from: JOB_TEXT,
            }, {
                isAvailable: true,
                obtain: OBTAIN_FROM.monster,
                from: ['闇黑龍王'],
            }, {
                isAvailable: false,
            }
        ]
    }, {
        name: '楓葉淨化',
        img: SKILL_BASE_PATH+'/HerosWill.png',
        job: {
            class: 'all',
            name: '全職業',
        },
        mastery: [
            {
                isAvailable: true,
                obtain: OBTAIN_FROM.quest,
                from: '堅固的意志',
            }, {
                isAvailable: false,
            }, {
                isAvailable: false,
            }
        ]
    }, {
        name: '武神防禦',
        img: SKILL_BASE_PATH+'/Achilles.png',
        job: {
            class: 'warrior',
            name: '劍士',
        },
        mastery: [
            {
                isAvailable: true,
                obtain: OBTAIN_FROM.job,
                from: JOB_TEXT,
            }, {
                isAvailable: true,
                obtain: OBTAIN_FROM.monster,
                from: ['娃娃獅王', '泰勒熊', '化石龍長老', '小銅人', '銅人', '銀人', '巨化銀人', '小金人', '巨化金人'],
            }, {
                isAvailable: true,
                obtain: OBTAIN_FROM.monster,
                from: ['噴火龍', '利里諾斯', '無名魔獸', '猿人肥肥'],
            }
        ]
    }, {
        name: '絕對引力',
        img: SKILL_BASE_PATH+'/MonsterMagnet.png',
        job: {
            class: 'warrior',
            name: '劍士',
        },
        mastery: [
            {
                isAvailable: true,
                obtain: OBTAIN_FROM.job,
                from: JOB_TEXT,
            }, {
                isAvailable: true,
                obtain: OBTAIN_FROM.monster,
                from: ['幼龍保護者', '石化戰士', '幽魂女巫', '赤血雷印迪奧', '海怒斯(左)', '克雷賽爾'],
            }, {
                isAvailable: true,
                obtain: OBTAIN_FROM.monster,
                from: ['海怒斯(右)', '克雷賽爾'],
            }
        ]
    }, {
        name: '究極突刺',
        img: SKILL_BASE_PATH+'/Rush.png',
        job: {
            class: 'warrior',
            name: '劍士',
        },
        mastery: [
            {
                isAvailable: true,
                obtain: OBTAIN_FROM.quest,
                from: '麥吉的修煉',
            }, {
                isAvailable: true,
                obtain: OBTAIN_FROM.monster,
                from: ['海怒斯(左)', '雙刀龍戰士', '木魚怪'],
            }, {
                isAvailable: true,
                obtain: OBTAIN_FROM.monster,
                from: ['海怒斯(右)', '杜納斯v2'],
            }
        ]
    }, {
        name: '格擋',
        img: SKILL_BASE_PATH+'/PowerStance.png',
        job: {
            class: 'warrior',
            name: '劍士',
        },
        mastery: [
            {
                isAvailable: true,
                obtain: OBTAIN_FROM.quest,
                from: '泰勒斯綁架陰謀',
            }, {
                isAvailable: true,
                obtain: OBTAIN_FROM.monster,
                from: ['拉圖斯', '寒霜冰龍', '雙刀龍戰士', '悔恨的守護隊長', '木魚怪'],
            }, {
                isAvailable: true,
                obtain: OBTAIN_FROM.monster,
                from: ['殘暴炎魔', '悔恨的守護兵'],
            }
        ]
    }, {
        name: '究極神盾',
        img: SKILL_BASE_PATH+'/Guardian.png',
        job: {
            class: 'warrior',
            name: '英雄、聖騎士',
        },
        mastery: [
            {
                isAvailable: true,
                obtain: OBTAIN_FROM.quest,
                from: '盾牌的力量',
            }, {
                isAvailable: true,
                obtain: OBTAIN_FROM.monster,
                from: ['化石龍長老', '銀人', '巨化銀人', '小金人', '巨化金人'],
            }, {
                isAvailable: true,
                obtain: OBTAIN_FROM.monster,
                from: ['噴火龍', '娃娃獅王', '泰勒熊'],
            }
        ]
    }, {
        name: '進階鬥氣',
        img: SKILL_BASE_PATH+'/AdvancedComboAttack.png',
        job: {
            class: 'warrior',
            name: '英雄',
        },
        mastery: [
            {
                isAvailable: true,
                obtain: OBTAIN_FROM.job,
                from: JOB_TEXT,
            }, {
                isAvailable: true,
                obtain: OBTAIN_FROM.monster,
                from: ['幼龍保護者', '石化戰士', '黃金武士'],
            }, {
                isAvailable: true,
                obtain: OBTAIN_FROM.monster,
                from: ['化石龍長老', '小銅人', '銅人', '銀人', '巨化銀人', '小金人', '巨化金人'],
            }
        ]
    }, {
        name: '無雙劍舞',
        img: SKILL_BASE_PATH+'/Brandish.png',
        job: {
            class: 'warrior',
            name: '英雄',
        },
        mastery: [
            {
                isAvailable: true,
                obtain: OBTAIN_FROM.job,
                from: JOB_TEXT,
            }, {
                isAvailable: true,
                obtain: OBTAIN_FROM.monster,
                from: ['黑翼龍', '黃金武士', '石蟲'],
            }, {
                isAvailable: true,
                obtain: OBTAIN_FROM.monster,
                from: ['拉圖斯', '克雷賽爾'],
            }
        ]
    }, {
        name: '鬥氣爆發',
        img: SKILL_BASE_PATH+'/Enrage.png',
        job: {
            class: 'warrior',
            name: '英雄',
        },
        mastery: [
            {
                isAvailable: true,
                obtain: OBTAIN_FROM.quest,
                from: '被遺忘的劍士之歌',
            }, {
                isAvailable: true,
                obtain: OBTAIN_FROM.monster,
                from: ['殘暴炎魔'],
            }, {
                isAvailable: true,
                obtain: OBTAIN_FROM.monster,
                from: ['闇黑龍王'],
            }
        ]
    }, {
        name: '暗之靈魂',
        img: SKILL_BASE_PATH+'/Beholder.png',
        job: {
            class: 'warrior',
            name: '黑騎士',
        },
        mastery: [
            {
                isAvailable: true,
                obtain: OBTAIN_FROM.job,
                from: JOB_TEXT,
            }, {
                isAvailable: false,
            }, {
                isAvailable: false,
            }
        ]
    }, {
        name: '黑暗力量',
        img: SKILL_BASE_PATH+'/Berserk.png',
        job: {
            class: 'warrior',
            name: '黑騎士',
        },
        mastery: [
            {
                isAvailable: true,
                obtain: OBTAIN_FROM.quest,
                from: '被遺忘的劍士之歌',
            }, {
                isAvailable: true,
                obtain: OBTAIN_FROM.monster,
                from: ['娃娃獅王', '泰勒熊', '殘暴炎魔'],
            }, {
                isAvailable: true,
                obtain: OBTAIN_FROM.monster,
                from: ['闇黑龍王'],
            }
        ]
    }, {
        name: '黑暗守護',
        img: SKILL_BASE_PATH+'/HexOfTheBeholder.png',
        job: {
            class: 'warrior',
            name: '黑騎士',
        },
        mastery: [
            {
                isAvailable: true,
                obtain: OBTAIN_FROM.quest,
                from: '靈魂祝福',
            }, {
                isAvailable: false,
            }, {
                isAvailable: false,
            }
        ]
    }, {
        name: '闇靈治癒',
        img: SKILL_BASE_PATH+'/AuraOfTheBeholder.png',
        job: {
            class: 'warrior',
            name: '黑騎士',
        },
        mastery: [
            {
                isAvailable: true,
                obtain: OBTAIN_FROM.quest,
                from: '治療靈魂',
            }, {
                isAvailable: false,
            }, {
                isAvailable: false,
            }
        ]
    }, {
        name: '屬性強化',
        img: SKILL_BASE_PATH+'/AdvancedCharge.png',
        job: {
            class: 'warrior',
            name: '聖騎士',
        },
        mastery: [
            {
                isAvailable: true,
                obtain: OBTAIN_FROM.monster,
                from: ['殘暴炎魔'],
            }, {
                isAvailable: false,
            }, {
                isAvailable: false,
            }
        ]
    }, {
        name: '騎士衝擊波',
        img: SKILL_BASE_PATH+'/Blast.png',
        job: {
            class: 'warrior',
            name: '聖騎士',
        },
        mastery: [
            {
                isAvailable: true,
                obtain: OBTAIN_FROM.job,
                from: JOB_TEXT,
            }, {
                isAvailable: true,
                obtain: OBTAIN_FROM.monster,
                from: ['洞穴化石龍', '銀人', '巨化銀人', '小金人', '巨化金人', '猿人肥肥'],
            }, {
                isAvailable: true,
                obtain: OBTAIN_FROM.monster,
                from: ['拉圖斯', '萊伊卡'],
            }
        ]
    }, {
        name: '聖靈之棍',
        img: SKILL_BASE_PATH+'/DivineCharge.png',
        job: {
            class: 'warrior',
            name: '聖騎士',
        },
        mastery: [
            {
                isAvailable: true,
                obtain: OBTAIN_FROM.quest,
                from: '神聖的騎士之劍',
            }, {
                isAvailable: true,
                obtain: OBTAIN_FROM.monster,
                from: ['格瑞芬多', '多多', '武林妖僧', '妖僧分身', '黑翼龍'],
            }, {
                isAvailable: false,
            }
        ]
    }, {
        name: '聖靈之劍',
        img: SKILL_BASE_PATH+'/HolyCharge.png',
        job: {
            class: 'warrior',
            name: '聖騎士',
        },
        mastery: [
            {
                isAvailable: true,
                obtain: OBTAIN_FROM.quest,
                from: '神聖的騎士之劍',
            }, {
                isAvailable: true,
                obtain: OBTAIN_FROM.monster,
                from: ['多多', '格瑞芬多', '武林妖僧', '妖僧分身', '幼龍保護者', '石化戰士'],
            }, {
                isAvailable: false,
            }
        ]
    }, {
        name: '鬼神之擊',
        img: SKILL_BASE_PATH+'/HeavensHammer.png',
        job: {
            class: 'warrior',
            name: '聖騎士',
        },
        mastery: [
            {
                isAvailable: true,
                obtain: OBTAIN_FROM.quest,
                from: '被遺忘的劍士之歌',
            }, {
                isAvailable: true,
                obtain: OBTAIN_FROM.monster,
                from: ['殘暴炎魔'],
            }, {
                isAvailable: true,
                obtain: OBTAIN_FROM.monster,
                from: ['闇黑龍王'],
            }
        ]
    }, {
        name: '核爆術',
        img: SKILL_BASE_PATH+'/BigBang.png',
        job: {
            class: 'mage',
            name: '法師',
        },
        mastery: [
            {
                isAvailable: true,
                obtain: OBTAIN_FROM.job,
                from: JOB_TEXT,
            }, {
                isAvailable: true,
                obtain: OBTAIN_FROM.monster,
                from: ['海怒斯(左)', '黑翼龍'],
            }, {
                isAvailable: true,
                obtain: OBTAIN_FROM.monster,
                from: ['CWKPQ', '海怒斯(右)', '娃娃獅王', '泰勒熊', '貝魯加墨特'],
            }
        ]
    }, {
        name: '魔力無限',
        img: SKILL_BASE_PATH+'/Infinity.png',
        job: {
            class: 'mage',
            name: '法師',
        },
        mastery: [
            {
                isAvailable: true,
                obtain: OBTAIN_FROM.quest,
                from: '泰勒斯綁架陰謀',
            }, {
                isAvailable: true,
                obtain: OBTAIN_FROM.monster,
                from: ['拉圖斯'],
            }, {
                isAvailable: true,
                obtain: OBTAIN_FROM.monster,
                from: ['殘暴炎魔'],
            }
        ]
    }, {
        name: '魔法反射',
        img: SKILL_BASE_PATH+'/ManaReflection.png',
        job: {
            class: 'mage',
            name: '法師',
        },
        mastery: [
            {
                isAvailable: true,
                obtain: OBTAIN_FROM.job,
                from: JOB_TEXT,
            }, {
                isAvailable: true,
                obtain: OBTAIN_FROM.monster,
                from: ['海怒斯(左)', '雙刀龍戰士', '長老幽靈', '木魚怪'],
            }, {
                isAvailable: true,
                obtain: OBTAIN_FROM.monster,
                from: ['海怒斯(右)', '多多', '克雷賽爾'],
            }
        ]
    }, {
        name: '天怒',
        img: SKILL_BASE_PATH+'/Genesis.png',
        job: {
            class: 'mage',
            name: '主教',
        },
        mastery: [
            {
                isAvailable: true,
                obtain: OBTAIN_FROM.quest,
                from: '邪摩斯的過去',
            }, {
                isAvailable: true,
                obtain: OBTAIN_FROM.monster,
                from: ['殘暴炎魔'],
            }, {
                isAvailable: true,
                obtain: OBTAIN_FROM.monster,
                from: ['闇黑龍王'],
            }
        ]
    }, {
        name: '天使之箭',
        img: SKILL_BASE_PATH+'/AngelRay.png',
        job: {
            class: 'mage',
            name: '主教',
        },
        mastery: [
            {
                isAvailable: true,
                obtain: OBTAIN_FROM.monster,
                from: ['殘暴炎魔'],
            }, {
                isAvailable: true,
                obtain: OBTAIN_FROM.monster,
                from: ['洞穴化石龍', '回憶的祭司', '銀人', '巨化銀人', '小金人', '巨化金人'],
            }, {
                isAvailable: true,
                obtain: OBTAIN_FROM.monster,
                from: ['拉圖斯'],
            }
        ]
    }, {
        name: '召喚神龍',
        img: SKILL_BASE_PATH+'/Bahamut.png',
        job: {
            class: 'mage',
            name: '主教',
        },
        mastery: [
            {
                isAvailable: true,
                obtain: OBTAIN_FROM.quest,
                from: '龍之心',
            }, {
                isAvailable: false,
            }, {
                isAvailable: false,
            }
        ]
    }, {
        name: '聖盾護鎧',
        img: SKILL_BASE_PATH+'/HolyShield.png',
        job: {
            class: 'mage',
            name: '主教',
        },
        mastery: [
            {
                isAvailable: true,
                obtain: OBTAIN_FROM.job,
                from: JOB_TEXT,
            }, {
                isAvailable: true,
                obtain: OBTAIN_FROM.monster,
                from: ['娃娃獅王', '泰勒熊', '化石龍長老', '小銅人', '銅人', '銀人', '巨化銀人', '小金人', '巨化金人', '遠古木妖'],
            }, {
                isAvailable: true,
                obtain: OBTAIN_FROM.monster,
                from: ['克雷賽爾', '噴火龍'],
            }
        ]
    }, {
        name: '復甦之光',
        img: SKILL_BASE_PATH+'/Resurrection.png',
        job: {
            class: 'mage',
            name: '主教',
        },
        mastery: [
            {
                isAvailable: true,
                obtain: OBTAIN_FROM.quest,
                from: '卡倫的記事本',
            }, {
                isAvailable: false,
            }, {
                isAvailable: false,
            }
        ]
    }, {
        name: '暴風雪',
        img: SKILL_BASE_PATH+'/Blizzard.png',
        job: {
            class: 'mage',
            name: '冰雷大魔導',
        },
        mastery: [
            {
                isAvailable: true,
                obtain: OBTAIN_FROM.quest,
                from: '邪摩斯的過去',
            }, {
                isAvailable: true,
                obtain: OBTAIN_FROM.monster,
                from: ['殘暴炎魔'],
            }, {
                isAvailable: true,
                obtain: OBTAIN_FROM.monster,
                from: ['CWKPQ', '闇黑龍王'],
            }
        ]
    }, {
        name: '閃電連擊',
        img: SKILL_BASE_PATH+'/ChainLightning.png',
        job: {
            class: 'mage',
            name: '冰雷大魔導',
        },
        mastery: [
            {
                isAvailable: true,
                obtain: OBTAIN_FROM.job,
                from: JOB_TEXT,
            }, {
                isAvailable: true,
                obtain: OBTAIN_FROM.monster,
                from: ['格瑞芬多', '武林妖僧', '妖僧分身', '致命烏賊怪'],
            }, {
                isAvailable: true,
                obtain: OBTAIN_FROM.monster,
                from: ['GPQ', '寒霜冰龍', '無名魔獸'],
            }
        ]
    }, {
        name: '寒冰地獄',
        img: SKILL_BASE_PATH+'/IceDemon.png',
        job: {
            class: 'mage',
            name: '冰雷大魔導',
        },
        mastery: [
            {
                isAvailable: true,
                obtain: OBTAIN_FROM.quest,
                from: '古代冰石',
            }, {
                isAvailable: true,
                obtain: OBTAIN_FROM.monster,
                from: ['格瑞芬多', '武林妖僧', '妖僧分身', '尖鼻鯊魚'],
            }, {
                isAvailable: true,
                obtain: OBTAIN_FROM.monster,
                from: ['拉圖斯', '克雷賽爾'],
            }
        ]
    }, {
        name: '召喚火炎神',
        img: SKILL_BASE_PATH+'/Ifrit.png',
        job: {
            class: 'mage',
            name: '冰雷大魔導',
        },
        mastery: [
            {
                isAvailable: true,
                obtain: OBTAIN_FROM.quest,
                from: '逆屬性',
            }, {
                isAvailable: true,
                obtain: OBTAIN_FROM.monster,
                from: ['黃金武士', '石化戰士', '洞穴幼年龍', '木魚怪'],
            }, {
                isAvailable: true,
                obtain: OBTAIN_FROM.monster,
                from: ['GPQ', '尼貝龍根'],
            }
        ]
    }, {
        name: '火流星',
        img: SKILL_BASE_PATH+'/MeteorShower.png',
        job: {
            class: 'mage',
            name: '火毒大魔導',
        },
        mastery: [
            {
                isAvailable: true,
                obtain: OBTAIN_FROM.quest,
                from: '邪摩斯的過去',
            }, {
                isAvailable: true,
                obtain: OBTAIN_FROM.monster,
                from: ['殘暴炎魔'],
            }, {
                isAvailable: true,
                obtain: OBTAIN_FROM.monster,
                from: ['闇黑龍王'],
            }
        ]
    }, {
        name: '炎靈地獄',
        img: SKILL_BASE_PATH+'/FireDemon.png',
        job: {
            class: 'mage',
            name: '火毒大魔導',
        },
        mastery: [
            {
                isAvailable: true,
                obtain: OBTAIN_FROM.quest,
                from: '熔岩精隨',
            }, {
                isAvailable: true,
                obtain: OBTAIN_FROM.monster,
                from: ['噴火龍', '雙刀龍戰士', '光明妖精', '木魚怪'],
            }, {
                isAvailable: true,
                obtain: OBTAIN_FROM.monster,
                from: ['拉圖斯', '利里諾斯'],
            }
        ]
    }, {
        name: '召喚冰魔',
        img: SKILL_BASE_PATH+'/Elquines.png',
        job: {
            class: 'mage',
            name: '火毒大魔導',
        },
        mastery: [
            {
                isAvailable: true,
                obtain: OBTAIN_FROM.quest,
                from: '逆屬性',
            }, {
                isAvailable: true,
                obtain: OBTAIN_FROM.monster,
                from: ['幼龍保護者', '幽魂女巫', '格雷伯徹'],
            }, {
                isAvailable: true,
                obtain: OBTAIN_FROM.monster,
                from: ['GPQ', '忘卻的祭司'],
            }
        ]
    }, {
        name: '劇毒麻痺',
        img: SKILL_BASE_PATH+'/Paralyze.png',
        job: {
            class: 'mage',
            name: '火毒大魔導',
        },
        mastery: [
            {
                isAvailable: true,
                obtain: OBTAIN_FROM.job,
                from: JOB_TEXT,
            }, {
                isAvailable: true,
                obtain: OBTAIN_FROM.monster,
                from: ['噴火龍', '洞穴幼年龍', '木魚怪'],
            }, {
                isAvailable: true,
                obtain: OBTAIN_FROM.monster,
                from: ['GPQ', '寒霜冰龍'],
            }
        ]
    }, {
        name: '龍魂之箭',
        img: SKILL_BASE_PATH+'/DragonsBreath.png',
        job: {
            class: 'archer',
            name: '弓手',
        },
        mastery: [
            {
                isAvailable: true,
                obtain: OBTAIN_FROM.quest,
                from: '泰勒斯綁架陰謀',
            }, {
                isAvailable: true,
                obtain: OBTAIN_FROM.monster,
                from: ['海怒斯(左)', '娃娃獅王', '泰勒熊', '洞穴幼年龍', '木魚怪'],
            }, {
                isAvailable: true,
                obtain: OBTAIN_FROM.monster,
                from: ['海怒斯', '利里諾斯', '艾畢奈亞', '貝魯加墨特'],
            }
        ]
    }, {
        name: '會心之眼',
        img: SKILL_BASE_PATH+'/SharpEyes.png',
        job: {
            class: 'archer',
            name: '弓手',
        },
        mastery: [
            {
                isAvailable: true,
                obtain: OBTAIN_FROM.job,
                from: JOB_TEXT,
            }, {
                isAvailable: true,
                obtain: OBTAIN_FROM.monster,
                from: ['海怒斯(左)', '娃娃獅王', '泰勒熊', '尖鼻鯊魚'],
            }, {
                isAvailable: true,
                obtain: OBTAIN_FROM.monster,
                from: ['CWKPQ', '海怒斯', '化石龍長老'],
            }
        ]
    }, {
        name: '弓術精通',
        img: SKILL_BASE_PATH+'/BowExpert.png',
        job: {
            class: 'archer',
            name: '箭神',
        },
        mastery: [
            {
                isAvailable: true,
                obtain: OBTAIN_FROM.job,
                from: JOB_TEXT,
            }, {
                isAvailable: true,
                obtain: OBTAIN_FROM.monster,
                from: ['拉圖斯', '雙刀龍戰士', '回憶的守護兵', '木魚怪'],
            }, {
                isAvailable: true,
                obtain: OBTAIN_FROM.monster,
                from: ['殘暴炎魔'],
            }
        ]
    }, {
        name: '念力集中',
        img: SKILL_BASE_PATH+'/Concentrate.png',
        job: {
            class: 'archer',
            name: '箭神',
        },
        mastery: [
            {
                isAvailable: true,
                obtain: OBTAIN_FROM.quest,
                from: '極致的試煉',
            }, {
                isAvailable: true,
                obtain: OBTAIN_FROM.monster,
                from: ['殘暴炎魔'],
            }, {
                isAvailable: true,
                obtain: OBTAIN_FROM.monster,
                from: ['闇黑龍王'],
            }
        ]
    }, {
        name: '牽制射擊',
        img: SKILL_BASE_PATH+'/HamstringShot.png',
        job: {
            class: 'archer',
            name: '箭神',
        },
        mastery: [
            {
                isAvailable: true,
                obtain: OBTAIN_FROM.job,
                from: JOB_TEXT,
            }, {
                isAvailable: true,
                obtain: OBTAIN_FROM.monster,
                from: ['化石龍長老', '小銅人', '銅人', '銀人', '巨化銀人', '小金人', '巨化金人'],
            }, {
                isAvailable: true,
                obtain: OBTAIN_FROM.monster,
                from: ['多多', '格瑞芬多', '杜納斯', '武林妖僧', '妖僧分身', '要塞巨人'],
            }
        ]
    }, {
        name: '召喚鳳凰',
        img: SKILL_BASE_PATH+'/Phoenix.png',
        job: {
            class: 'archer',
            name: '箭神',
        },
        mastery: [
            {
                isAvailable: true,
                obtain: OBTAIN_FROM.quest,
                from: '傳說中的火鳥',
            }, {
                isAvailable: true,
                obtain: OBTAIN_FROM.monster,
                from: ['化石龍長老', '銀人', '巨化銀人', '小金人', '巨化金人', '要塞巨人'],
            }, {
                isAvailable: true,
                obtain: OBTAIN_FROM.monster,
                from: ['噴火龍', '杜納斯'],
            }
        ]
    }, {
        name: '暴風神射',
        img: SKILL_BASE_PATH+'/Hurricane.png',
        job: {
            class: 'archer',
            name: '箭神',
        },
        mastery: [
            {
                isAvailable: true,
                obtain: OBTAIN_FROM.quest,
                from: '發射眼睛看不見的箭矢',
            }, {
                isAvailable: true,
                obtain: OBTAIN_FROM.monster,
                from: ['GPQ', '幼龍保護者', '幽魂女巫', '雷印迪奧'],
            }, {
                isAvailable: true,
                obtain: OBTAIN_FROM.monster,
                from: ['CWKPQ', '拉圖斯', '寒霜冰龍', '萊伊卡'],
            }
        ]
    }, {
        name: '黑暗狙擊',
        img: SKILL_BASE_PATH+'/Blind.png',
        job: {
            class: 'archer',
            name: '神射手',
        },
        mastery: [
            {
                isAvailable: true,
                obtain: OBTAIN_FROM.job,
                from: JOB_TEXT,
            }, {
                isAvailable: true,
                obtain: OBTAIN_FROM.monster,
                from: ['洞穴化石龍', '小銅人', '銅人', '銀人', '巨化銀人', '小金人', '巨化金人'],
            }, {
                isAvailable: true,
                obtain: OBTAIN_FROM.monster,
                from: ['格瑞芬多', '杜納斯v2', '要塞巨人'],
            }
        ]
    }, {
        name: '召喚銀隼',
        img: SKILL_BASE_PATH+'/Frostprey.png',
        job: {
            class: 'archer',
            name: '神射手',
        },
        mastery: [
            {
                isAvailable: true,
                obtain: OBTAIN_FROM.quest,
                from: '傳說中的銀隼',
            }, {
                isAvailable: true,
                obtain: OBTAIN_FROM.monster,
                from: ['格瑞芬多', '武林妖僧', '妖僧分身', '木魚怪', '雙刀龍戰士'],
            }, {
                isAvailable: true,
                obtain: OBTAIN_FROM.monster,
                from: ['回憶的守護隊長'],
            }
        ]
    }, {
        name: '弩術精通',
        img: SKILL_BASE_PATH+'/MarksmanBoost.png',
        job: {
            class: 'archer',
            name: '神射手',
        },
        mastery: [
            {
                isAvailable: true,
                obtain: OBTAIN_FROM.job,
                from: JOB_TEXT,
            }, {
                isAvailable: true,
                obtain: OBTAIN_FROM.monster,
                from: ['拉圖斯', '洞穴幼年龍', '回憶的神官', '木魚怪', '熊狼'],
            }, {
                isAvailable: true,
                obtain: OBTAIN_FROM.monster,
                from: ['殘暴炎魔'],
            }
        ]
    }, {
        name: '光速神弩',
        img: SKILL_BASE_PATH+'/PiercingArrow.png',
        job: {
            class: 'archer',
            name: '神射手',
        },
        mastery: [
            {
                isAvailable: true,
                obtain: OBTAIN_FROM.quest,
                from: '發射眼睛看不見的箭矢',
            }, {
                isAvailable: true,
                obtain: OBTAIN_FROM.monster,
                from: ['洞穴化石龍', '銀人', '巨化銀人', '小金人', '巨化金人', '猿人肥肥', '熊狼'],
            }, {
                isAvailable: true,
                obtain: OBTAIN_FROM.monster,
                from: ['CWKPQ', '拉圖斯'],
            }
        ]
    }, {
        name: '必殺狙擊',
        img: SKILL_BASE_PATH+'/Snipe.png',
        job: {
            class: 'archer',
            name: '神射手',
        },
        mastery: [
            {
                isAvailable: true,
                obtain: OBTAIN_FROM.job,
                from: JOB_TEXT,
            }, {
                isAvailable: true,
                obtain: OBTAIN_FROM.monster,
                from: ['殘暴炎魔'],
            }, {
                isAvailable: true,
                obtain: OBTAIN_FROM.monster,
                from: ['闇黑龍王'],
            }
        ]
    }, {
        name: '瞬身迴避',
        img: SKILL_BASE_PATH+'/ShadowShifter.png',
        job: {
            class: 'thief',
            name: '盜賊',
        },
        mastery: [
            {
                isAvailable: true,
                obtain: OBTAIN_FROM.job,
                from: JOB_TEXT,
            }, {
                isAvailable: true,
                obtain: OBTAIN_FROM.monster,
                from: ['海怒斯(左)', '黑翼龍'],
            }, {
                isAvailable: true,
                obtain: OBTAIN_FROM.monster,
                from: ['海怒斯', '多多', '寒霜冰龍', '悔恨的神官'],
            }
        ]
    }, {
        name: '忍影瞬殺',
        img: SKILL_BASE_PATH+'/NinjaAmbush.png',
        job: {
            class: 'thief',
            name: '盜賊',
        },
        mastery: [
            {
                isAvailable: true,
                obtain: OBTAIN_FROM.quest,
                from: '藏在暗影中的存在',
            }, {
                isAvailable: true,
                obtain: OBTAIN_FROM.monster,
                from: ['海怒斯', '克雷賽爾', '維京'],
            }, {
                isAvailable: true,
                obtain: OBTAIN_FROM.monster,
                from: ['GPQ', '海怒斯', '克雷賽爾'],
            }
        ]
    }, {
        name: '挑釁',
        img: SKILL_BASE_PATH+'/Taunt.png',
        job: {
            class: 'thief',
            name: '盜賊',
        },
        mastery: [
            {
                isAvailable: true,
                obtain: OBTAIN_FROM.quest,
                from: '泰勒斯綁架陰謀',
            }, {
                isAvailable: true,
                obtain: OBTAIN_FROM.monster,
                from: ['利里諾斯', '噴火龍', '幼龍保護者', '雷印迪奧'],
            }, {
                isAvailable: true,
                obtain: OBTAIN_FROM.monster,
                from: ['GPQ'],
            }
        ]
    }, {
        name: '飛毒殺',
        img: SKILL_BASE_PATH+'/VenomousStar.png',
        job: {
            class: 'thief',
            name: '盜賊',
        },
        mastery: [
            {
                isAvailable: true,
                obtain: OBTAIN_FROM.job,
                from: JOB_TEXT,
            }, {
                isAvailable: true,
                obtain: OBTAIN_FROM.monster,
                from: ['拉圖斯', '雙刀龍戰士', '木魚怪'],
            }, {
                isAvailable: true,
                obtain: OBTAIN_FROM.monster,
                from: ['殘暴炎魔', '悔恨的祭司'],
            }
        ]
    }, {
        name: '致命暗殺',
        img: SKILL_BASE_PATH+'/Assassinate.png',
        job: {
            class: 'thief',
            name: '暗影神偷',
        },
        mastery: [
            {
                isAvailable: true,
                obtain: OBTAIN_FROM.quest,
                from: '黑暗的匕首',
            }, {
                isAvailable: true,
                obtain: OBTAIN_FROM.monster,
                from: ['格瑞芬多', '武林妖僧', '妖僧分身', '洞穴幼年龍', '木魚怪'],
            }, {
                isAvailable: true,
                obtain: OBTAIN_FROM.monster,
                from: ['GPQ'],
            }
        ]
    }, {
        name: '順步連擊',
        img: SKILL_BASE_PATH+'/BoomerangStep.png',
        job: {
            class: 'thief',
            name: '暗影神偷',
        },
        mastery: [
            {
                isAvailable: true,
                obtain: OBTAIN_FROM.job,
                from: JOB_TEXT,
            }, {
                isAvailable: true,
                obtain: OBTAIN_FROM.monster,
                from: ['萊伊卡', '化石龍長老', '小銅人', '銅人', '銀人', '巨化銀人', '小金人', '巨化金人', '猿人肥肥', '熊狼'],
            }, {
                isAvailable: true,
                obtain: OBTAIN_FROM.monster,
                from: ['CWKPQ', '拉圖斯', '克雷賽爾'],
            }
        ]
    }, {
        name: '煙霧彈',
        img: SKILL_BASE_PATH+'/Smokescreen.png',
        job: {
            class: 'thief',
            name: '暗影神偷',
        },
        mastery: [
            {
                isAvailable: true,
                obtain: OBTAIN_FROM.quest,
                from: '黑色雲霧',
            }, {
                isAvailable: true,
                obtain: OBTAIN_FROM.monster,
                from: ['娃娃獅王', '泰勒熊', '殘暴炎魔'],
            }, {
                isAvailable: true,
                obtain: OBTAIN_FROM.monster,
                from: ['闇黑龍王'],
            }
        ]
    }, {
        name: '忍術風影',
        img: SKILL_BASE_PATH+'/NinjaStorm.png',
        job: {
            class: 'thief',
            name: '夜使者',
        },
        mastery: [
            {
                isAvailable: true,
                obtain: OBTAIN_FROM.quest,
                from: '黑暗的追蹤者',
            }, {
                isAvailable: true,
                obtain: OBTAIN_FROM.monster,
                from: ['洞穴化石龍', '銀人', '巨化銀人', '小金人', '巨化金人'],
            }, {
                isAvailable: true,
                obtain: OBTAIN_FROM.monster,
                from: ['GPQ'],
            }
        ]
    }, {
        name: '無形鏢',
        img: SKILL_BASE_PATH+'/ShadowClaw.png',
        job: {
            class: 'thief',
            name: '夜使者',
        },
        mastery: [
            {
                isAvailable: true,
                obtain: OBTAIN_FROM.job,
                from: JOB_TEXT,
            }, {
                isAvailable: true,
                obtain: OBTAIN_FROM.monster,
                from: ['進化迅猛龍'],
            }, {
                isAvailable: true,
                obtain: OBTAIN_FROM.monster,
                from: ['拉圖斯', '娃娃獅王', '泰勒熊', '忘卻的神官', '守門人克羅奇'],
            }
        ]
    }, {
        name: '三飛閃',
        img: SKILL_BASE_PATH+'/TripleThrow.png',
        job: {
            class: 'thief',
            name: '夜使者',
        },
        mastery: [
            {
                isAvailable: true,
                obtain: OBTAIN_FROM.monster,
                from: ['殘暴炎魔'],
            }, {
                isAvailable: true,
                obtain: OBTAIN_FROM.monster,
                from: ['殘暴炎魔'],
            }, {
                isAvailable: true,
                obtain: OBTAIN_FROM.monster,
                from: ['闇黑龍王'],
            }
        ]
    }, {
        name: '魔龍降臨',
        img: SKILL_BASE_PATH+'/DragonStrike.png',
        job: {
            class: 'pirate',
            name: '拳霸',
        },
        mastery: [
            {
                isAvailable: true,
                obtain: OBTAIN_FROM.job,
                from: JOB_TEXT,
            }, {
                isAvailable: true,
                obtain: OBTAIN_FROM.monster,
                from: ['海怒斯', '維京', '木魚怪'],
            }, {
                isAvailable: true,
                obtain: OBTAIN_FROM.monster,
                from: ['噴火龍', '娃娃獅王', '泰勒熊', '烏賊怪'],
            }
        ]
    }, {
        name: '閃．連殺',
        img: SKILL_BASE_PATH+'/Barrage.png',
        job: {
            class: 'pirate',
            name: '拳霸',
        },
        mastery: [
            {
                isAvailable: true,
                obtain: OBTAIN_FROM.job,
                from: JOB_TEXT,
            }, {
                isAvailable: true,
                obtain: OBTAIN_FROM.monster,
                from: ['多多', '海怒斯(右)', '藍色雙角龍'],
            }, {
                isAvailable: true,
                obtain: OBTAIN_FROM.monster,
                from: ['拉圖斯'],
            }
        ]
    }, {
        name: '元氣彈',
        img: SKILL_BASE_PATH+'/EnergyOrb.png',
        job: {
            class: 'pirate',
            name: '拳霸',
        },
        mastery: [
            {
                isAvailable: true,
                obtain: OBTAIN_FROM.job,
                from: JOB_TEXT,
            }, {
                isAvailable: true,
                obtain: OBTAIN_FROM.monster,
                from: ['利里諾斯', '海怒斯(左)', '艾畢奈亞', '進化迅猛龍', '小銅人'],
            }, {
                isAvailable: true,
                obtain: OBTAIN_FROM.monster,
                from: ['拉塔尼卡船長', '格瑞芬多', '短刃龍戰士'],
            }
        ]
    }, {
        name: '最終極速',
        img: SKILL_BASE_PATH+'/SpeedInfusion.png',
        job: {
            class: 'pirate',
            name: '拳霸',
        },
        mastery: [
            {
                isAvailable: true,
                obtain: OBTAIN_FROM.job,
                from: JOB_TEXT,
            }, {
                isAvailable: true,
                obtain: OBTAIN_FROM.monster,
                from: ['洞穴化石龍', '熊狼', '海怒斯(左)'],
            }, {
                isAvailable: false,
            }
        ]
    }, {
        name: '鬥神降世',
        img: SKILL_BASE_PATH+'/SuperTransformation.png',
        job: {
            class: 'pirate',
            name: '拳霸',
        },
        mastery: [
            {
                isAvailable: true,
                obtain: OBTAIN_FROM.quest,
                from: '變強的方法',
            }, {
                isAvailable: true,
                obtain: OBTAIN_FROM.monster,
                from: ['噴火龍', '藍翼龍'],
            }, {
                isAvailable: false,
            }
        ]
    }, {
        name: '閃．爆破',
        img: SKILL_BASE_PATH+'/Demolition.png',
        job: {
            class: 'pirate',
            name: '拳霸',
        },
        mastery: [
            {
                isAvailable: true,
                obtain: OBTAIN_FROM.quest,
                from: '鋼鐵般強壯的體魄',
            }, {
                isAvailable: true,
                obtain: OBTAIN_FROM.monster,
                from: ['格瑞芬多', '尖鼻鯊魚', '石化戰士', '巨化金人'],
            }, {
                isAvailable: true,
                obtain: OBTAIN_FROM.monster,
                from: ['CWKPQ', '洞穴幼年龍', '赤血雷印迪奧'],
            }
        ]
    }, {
        name: '閃．索命',
        img: SKILL_BASE_PATH+'/Snatch.png',
        job: {
            class: 'pirate',
            name: '拳霸',
        },
        mastery: [
            {
                isAvailable: true,
                obtain: OBTAIN_FROM.quest,
                from: '沉著的心',
            }, {
                isAvailable: true,
                obtain: OBTAIN_FROM.monster,
                from: ['拉圖斯', '武林妖僧', '妖僧分身'],
            }, {
                isAvailable: true,
                obtain: OBTAIN_FROM.monster,
                from: ['寒霜冰龍', '娃娃獅王', '泰勒熊', '尼貝龍根'],
            }
        ]
    }, {
        name: '時間置換',
        img: SKILL_BASE_PATH+'/TimeLeap.png',
        job: {
            class: 'pirate',
            name: '拳霸',
        },
        mastery: [
            {
                isAvailable: true,
                obtain: OBTAIN_FROM.quest,
                from: '時空扭曲的秘密',
            }, {
                isAvailable: true,
                obtain: OBTAIN_FROM.monster,
                from: ['殘暴炎魔', '娃娃獅王', '泰勒熊'],
            }, {
                isAvailable: true,
                obtain: OBTAIN_FROM.monster,
                from: ['CWKPQ', '闇黑龍王'],
            }
        ]
    }, {
        name: '瞬．冰火連擊',
        img: SKILL_BASE_PATH+'/ElementalBoost.png',
        job: {
            class: 'pirate',
            name: '槍神',
        },
        mastery: [
            {
                isAvailable: true,
                obtain: OBTAIN_FROM.job,
                from: JOB_TEXT,
            }, {
                isAvailable: true,
                obtain: OBTAIN_FROM.monster,
                from: ['海怒斯(左)', '獨角迅猛龍', '銅人', '光明妖精'],
            }, {
                isAvailable: true,
                obtain: OBTAIN_FROM.monster,
                from: ['雷印迪奧'],
            }
        ]
    }, {
        name: '砲台章魚王',
        img: SKILL_BASE_PATH+'/WrathOfTheOctopi.png',
        job: {
            class: 'pirate',
            name: '槍神',
        },
        mastery: [
            {
                isAvailable: true,
                obtain: OBTAIN_FROM.job,
                from: JOB_TEXT,
            }, {
                isAvailable: true,
                obtain: OBTAIN_FROM.monster,
                from: ['海怒斯(左)', '致命烏賊怪'],
            }, {
                isAvailable: false,
            }
        ]
    }, {
        name: '瞬．迅雷',
        img: SKILL_BASE_PATH+'/RapidFire.png',
        job: {
            class: 'pirate',
            name: '槍神',
        },
        mastery: [
            {
                isAvailable: true,
                obtain: OBTAIN_FROM.job,
                from: JOB_TEXT,
            }, {
                isAvailable: true,
                obtain: OBTAIN_FROM.monster,
                from: ['噴火龍', '雙刀龍戰士'],
            }, {
                isAvailable: true,
                obtain: OBTAIN_FROM.monster,
                from: ['拉塔尼卡船長', '寒霜冰龍', '鯊魚'],
            }
        ]
    }, {
        name: '精準砲擊',
        img: SKILL_BASE_PATH+'/Bullseye.png',
        job: {
            class: 'pirate',
            name: '槍神',
        },
        mastery: [
            {
                isAvailable: true,
                obtain: OBTAIN_FROM.job,
                from: JOB_TEXT,
            }, {
                isAvailable: true,
                obtain: OBTAIN_FROM.monster,
                from: ['海怒斯', '幼龍保護者', '格雷伯徹'],
            }, {
                isAvailable: false,
            }
        ]
    }, {
        name: '海盜船',
        img: SKILL_BASE_PATH+'/Battleship.png',
        job: {
            class: 'pirate',
            name: '槍神',
        },
        mastery: [
            {
                isAvailable: true,
                obtain: OBTAIN_FROM.quest,
                from: '變強的方法',
            }, {
                isAvailable: false,
            }, {
                isAvailable: false,
            }
        ]
    }, {
        name: '海盜加農炮',
        img: SKILL_BASE_PATH+'/BattleshipCannon.png',
        job: {
            class: 'pirate',
            name: '槍神',
        },
        mastery: [
            {
                isAvailable: true,
                obtain: OBTAIN_FROM.quest,
                from: '觀察維京',
            }, {
                isAvailable: true,
                obtain: OBTAIN_FROM.monster,
                from: ['格瑞芬多', '娃娃獅王', '泰勒熊', '黑翼龍', '木魚怪'],
            }, {
                isAvailable: true,
                obtain: OBTAIN_FROM.monster,
                from: ['萊伊卡', '赤翼龍', '騎士熊'],
            }
        ]
    }, {
        name: '海盜魚雷',
        img: SKILL_BASE_PATH+'/BattleshipTorpedo.png',
        job: {
            class: 'pirate',
            name: '槍神',
        },
        mastery: [
            {
                isAvailable: true,
                obtain: OBTAIN_FROM.quest,
                from: '觀察巨人維京',
            }, {
                isAvailable: true,
                obtain: OBTAIN_FROM.monster,
                from: ['海怒斯(左)', '化石龍長老', '小銅人'],
            }, {
                isAvailable: true,
                obtain: OBTAIN_FROM.monster,
                from: ['海怒斯(左)', '暗黑三角龍'],
            }
        ]
    }, {
        name: '心靈控制',
        img: SKILL_BASE_PATH+'/Hypnotize.png',
        job: {
            class: 'pirate',
            name: '槍神',
        },
        mastery: [
            {
                isAvailable: true,
                obtain: OBTAIN_FROM.quest,
                from: '怪物解放戰',
            }, {
                isAvailable: true,
                obtain: OBTAIN_FROM.monster,
                from: ['拉圖斯', '石蟲', '守門人克羅奇'],
            }, {
                isAvailable: false,
            }
        ]
    }, {
        name: '海鷗特戰隊',
        img: SKILL_BASE_PATH+'/AirStrike.png',
        job: {
            class: 'pirate',
            name: '槍神',
        },
        mastery: [
            {
                isAvailable: true,
                obtain: OBTAIN_FROM.quest,
                from: '拜見喬納森',
            }, {
                isAvailable: true,
                obtain: OBTAIN_FROM.monster,
                from: ['殘暴炎魔', '武林妖僧', '妖僧分身'],
            }, {
                isAvailable: true,
                obtain: OBTAIN_FROM.monster,
                from: ['闇黑龍王'],
            }
        ]
    },
];
