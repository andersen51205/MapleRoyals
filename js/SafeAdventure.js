// 頁面資料
const QA2 = [{
        question : "A friend or family member has said that you can use their<br>\
                    account(s). Are you allowed to do so?",
        answer : "No, using their account(s) gives me an unfair.<br>\
                    advantage, and I should never do it. I am only allowed to<br>\
                    play on my own accounts."
    },{
        question : "Are you allowed to launch multiple clients on your<br>\
                    computer to access more than one account at once?",
        answer : "Yes, I am allowed to launch multiple clients."
    },{
        question : "Can you watch a TV show or video while playing<br>\
                    MapleRoyals?",
        answer : "Yes, as long as I am still attentive and reply to<br>\
                    messages directed at me, or if I'm AFK-ing."
    },{
        question : "How often are you allowed to vote for NX each day on<br>\
                    Gtop100.com?",
        answer : "Only one time."
    },{
        question : "If another player is harassing you with explicit, vulgar, or<br>\
                    offensive language or content, what should you do?",
        answer : "I will capture a video, or screenshot and report it on the<br>\
                    Forum under 'Report Abuse'"
    },{
        question : "When is it permitted to put a weight on your keyboard to<br>\
                    perform actions while not at your computer?",
        answer : "It is never okay, I should always be playing my<br>\
                    character myself."
}];
const QA3 = [{
    question : "Are you allowed to search for a player's personal<br>\
                information on the internet without their consent, and post<br>\
                the information either in game or on the forum?",
    answer : "No, that would be considered doxing and is an invasion<br>\
                of their privacy."
},{
    question : "If there's more than one person in your household playing<br>\
                MapleRoyals, what must you all do in order to all vote each<br>\
                day?",
    answer : "Apply for the whitelist on the forum and until it is<br>\
                approved, only one player will vote each day."
},{
    question : "If you come across a bug, or a glitch that gives you an<br>\
                unfair advantage while playing MapleRoyals, what should<br>\
                you do?",
    answer : "I will visit the 'Bug Report' section on the forum, and<br>\
                report it there."
},{
    question : "Players collect fame for multiple reasons. Assume you<br>\
                encounter someone whom you dislike because of<br>\
                something they did. Is it appropriate for you to defame them?",
    answer : "Yes, so long as I do not mass defame andlor engage<br>\
                other players to mass defame the player on my behalf."
}];
const QA4 = [{
    question : "Are you allowed to make any remark that could be<br>\
                perceived as derogatory or otherwise prejudiced towards<br>\
                any group of people based on their race, sex, gender, life<br>\
                choices, or any other division?",
    answer : "No, that would be considered vulgar/hate speech."
},{
    question : "Certain actions may get repetitive; such as when you are<br>\
                selling leech. Are you allowed to program a script, or<br>\
                download an existing one off the internet to automatically<br>\
                control your character?",
    answer : "No, that falls under Macrobotting, a more serious form<br>\
                of botting that is equivalent to hacking."
},{
    question : "Given a scenario where you are unfortunately permanently<br>\
                banned from MapleRoyals for a valid reason, and your ban<br>\
                appeal has been denied. Are you allowed to create a new<br>\
                account and continue playing?",
    answer : "No, that falls under Ban Evasion and my account(s)<br>\
                would eventually be banned."
},{
    question : "You see a player acting suspiciously, such as looting<br>\
                items from afar or attacking out-of-reach monsters around<br>\
                the map, are you allowed to loot the items dropped by<br>\
                those monsters?",
    answer : "No, because reaping benefits from a hacker is not<br>\
                allowed."
}];
const QA5 = [{
    question : "MapleRoyals is constantly updated and the new patches<br>\
                can be downloaded from the website in order to enjoy<br>\
                non-disrupted gameplay. Are you allowed to play on<br>\
                outdated, or modified, or any other game files than those<br>\
                provided on the Download Page directly by MapleRoyals?",
    answer : "No, as playing the game using improper files may<br>\
                cause disrupted gameplay for myself and other players."
},{
    question : "Whether you have encountered an item you wish to<br>\
                purchase, but do not have enough mesos for, or are<br>\
                quitting MapleRoyals and want to earn some money by<br>\
                selling your equipment. Are you allowed to buy andfor sell<br>\
                the item(s) using real money?",
    answer : "No. Real World Trading is unfair, detrimental to the<br>\
                market, and is not allowed."
}];
// Vue實例
const mainContent = Vue.createApp({
    data() {
        return {
            lists : [{
                title: "題目兩行",
                id: "Div_content_2",
                target: "#Div_content_2",
                content: QA2,
            },{
                title: "題目三行",
                id: "Div_content_3",
                target: "#Div_content_3",
                content: QA3,
            },{
                title: "題目四行",
                id: "Div_content_4",
                target: "#Div_content_4",
                content: QA4,
            },{
                title: "題目五行",
                id: "Div_content_5",
                target: "#Div_content_5",
                content: QA5,
            }]
        }
    }
}).mount('#Main_content');
