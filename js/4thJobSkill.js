const JOB_DATA = [
    {
        class: 'warrior',
        text: '劍士',
        master: [
            {
                name: 'hero',
                text: '英雄',
            }, {
                name: 'paladin',
                text: '聖騎士',
            }, {
                name: 'darkKnight',
                text: '黑騎士',
            }
        ],
    }, {
        class: 'mage',
        text: '法師',
        master: [
            {
                name: 'bishop',
                text: '主教',
            }, {
                name: 'firePoisonArchMage',
                text: '火毒大魔導',
            }, {
                name: 'iceLightingArchmage',
                text: '冰雷大魔導',
            }
        ],
    }, {
        class: 'archer',
        text: '弓手',
        master: [
            {
                name: 'bowmaster',
                text: '箭神',
            }, {
                name: 'marksman',
                text: '神射手',
            }
        ],
    }, {
        class: 'thief',
        text: '盜賊',
        master: [
            {
                name: 'shadower',
                text: '暗影神偷',
            }, {
                name: 'nightLord',
                text: '夜使者',
            }
        ],
    }, {
        class: 'pirate',
        text: '海盜',
        master: [
            {
                name: 'buccaneer',
                text: '拳霸',
            }, {
                name: 'corsair',
                text: '槍神',
            }
        ],
    }
];
const BOSS_DATA = {
    horntail: '闇黑龍王',
    zakum: '殘暴炎魔',
    papulatus: '拉圖斯',
    pianus: '海怒斯',
    krexel: '克雷賽爾',
    scarlion: '娃娃獅王',
    targa: '泰勒熊',
    manon:'噴火龍',
    griffey: '格瑞芬多',
    leviathan: '寒霜冰龍',
    dodo: '多多',
    lilynouch: '利里諾斯',
    lyka: '萊伊卡',
    wulinYaoseng: '武林妖僧',
};
const MOB_DATA = {
    skelegon: '洞穴化石龍',
    skelosaurus: '化石龍長老',
    jrNewtie: '洞穴幼年龍',
    nestGolem: '幼龍保護者',
    darkCornian: '雙刀龍戰士',
    petrifighter: '石化戰士',
    templeBlockMonster: '木魚怪',
};

// Vue Instance
const mainVm = Vue.createApp({
    data() {
        return {
            jobs: JOB_DATA,
            bosses: BOSS_DATA,
            mobs: MOB_DATA,
            skills: SKILL_DATA,
            // 篩選項目
            selectedJobs: [],
            selectedMonsters: [],
        }
    },
    computed: {
        filteredSkills() {
            let filteredClasses = [];
            for (let i=0; i<this.jobs.length; i++) {
                let masters = this.jobs[i].master;
                for (let j=0; j<masters.length; j++) {
                    let masterJob = masters[j];
                    if (this.selectedJobs.includes(masterJob.text)) {
                        filteredClasses.push(this.jobs[i].text);
                        break;
                    }
                }
            }

            return this.skills.filter((skill) => {
                if (this.selectedJobs.length === 0 && this.selectedMonsters.length === 0) {
                    return true;
                }
                let isMatchJob = false;
                let isMatchMonster = false;

                // 職業篩選
                if (this.selectedJobs.length > 0) {
                    isMatchJob = (
                        skill.job.class === 'all'
                        || filteredClasses.includes(skill.job.name)
                        || this.selectedJobs.includes(skill.job.name)
                    );
                    if (skill.name === '究極神盾' && !isMatchJob) {
                        let jobNames = skill.job.name.split('、');
                        for (let i=0; i<jobNames.length; i++) {
                            if (this.selectedJobs.includes(jobNames[i])) {
                                isMatchJob = true;
                                break;
                            }
                        }
                    }
                }

                // 掉落來源篩選
                if (this.selectedMonsters.length > 0) {
                    let monsterList = [];
                    for (let i=0; i<skill.mastery.length; i++) {
                        if (skill.mastery[i].isAvailable && skill.mastery[i].obtain === OBTAIN_FROM.monster) {
                            monsterList = monsterList.concat(skill.mastery[i].from);
                        }
                    }
                    for (let i=0; i<this.selectedMonsters.length; i++) {
                        for (let j=0; j<monsterList.length; j++) {
                            if (monsterList[j].includes(this.selectedMonsters[i])) {
                                isMatchMonster = true;
                                break;
                            }
                        }
                        if (isMatchMonster) {
                            break;
                        }
                    }
                }

                return isMatchJob || isMatchMonster;
            });
        }
    },
    methods: {
        clearFilters() {
            this.selectedJobs = [];
            this.selectedMonsters = [];
        },
        isFilteredMonster(monster) {
            for (let i=0; i<this.selectedMonsters.length; i++) {
                if (monster.includes(this.selectedMonsters[i])) {
                    return true;
                }
            }
            return false;
        }
    }
}).mount('#Main_content');
