const scene = document.createElement('scene');
document.body.appendChild(scene);
const title = document.getElementById('title');
const subtitle = document.getElementById('subtitle');
const startb = document.getElementById('sb');
const reloadb = document.getElementById('reload');
const limit = document.getElementById('limit');
const timertext = document.getElementById('timertext');
const se = new Audio('決定.mp3');
const se1 = new Audio('CD.mp3');
const se2 = new Audio('TitleChange.mp3');
const se3 = new Audio('finish.mp3');

let meirei = document.getElementById('text');
let timer;
let time = 0;
let timer2;
let time2 = 181; 
const oshies = ["私が推している\nテレビ番組","私が推している\n芸人","私が推している\nVTuber","私が推している\n映画","私が推している\n俳優",
"私が推している\nキャンパスの所","私が推している\nそば屋","私が推している\nうどん屋","私が推している\nラーメン屋","私が推している\nマック・マクドのメニュー",
"私が推している\n声優","私が推している\nアイドル","私が推している\nタレント","私が推している\nお茶","私が推している\n歴史上の人物",
"私が推している\nMacBookの所","私が推している\n歌","私が推している\nK-pop","私が推している\n韓国アイドル","私が推している\n韓国ドラマ",
"私が推している\n映画","私が推している\n駅","私が推している\n水","私が推している\nYouTuber","私が推している\nネット配信\nサービス",
"私が推している\n温泉地","私が推している\nゲーム","私が推している\nアイス","私が推している\nバンド","私が推している\n歌手",
"私が推している\nスポーツ","私が推している\nピザ","私が推している\nコンビニ","私が推している\nどんぶり","私が推している\n飲み物"];
const oshi = Math.floor(Math.random() * oshies.length);
const oshi2 = Math.floor(Math.random() * oshies.length);
const oshi3 = Math.floor(Math.random() * oshies.length);
const oshi4 = Math.floor(Math.random() * oshies.length);
const oshi5 = Math.floor(Math.random() * oshies.length);
const oshi6 = Math.floor(Math.random() * oshies.length);

title.innerText = "即興で推しをプレゼンしましょ\nマジでマジで";
subtitle.innerText = "マジでマジでシリーズ3作品目";
limit.innerText = "1/6";
meirei.style.display = 'none';
reloadb.style.display = 'none';
limit.style.display = 'none';
timertext.style.display = 'none';

function start () {
    se.play();
    title.style.display = 'none';
    subtitle.style.display = 'none';
    startb.style.display = 'none';
    title.innerText = "3";
    timer = setInterval(set, 1000);
}
function set () {
    time++;
    if (time === 2) {
        se1.play();
        title.style.display = 'block';
    }
    if (time === 3) {
        title.innerText = "2";
    }
    if (time === 4) {
        title.innerText = "1";
    }
    if (time === 5) {
        title.style.display = 'none';
        clearInterval(timer);
        timer2 = setInterval(game, 1000);
    }
}
function game () {
    time2--;
    timertext.innerText = `残り${time2}秒`;
    timertext.style.display = 'block';
    meirei.style.display = 'block'; 
    switch(time2) {
        case 180:
            se2.play();
            limit.style.display = 'block';
            meirei.innerText = oshies[oshi];
            break;
            case 150:
                se2.play();
                limit.innerText = "2/6";
                meirei.innerText = oshies[oshi2];
                break;
                case 120:
                    se2.play();
                    limit.innerText = "3/6";
                    meirei.innerText = oshies[oshi3]
                    break;
                    case 90:
                        se2.play();
                        limit.innerText = "4/6";
                    meirei.innerText = oshies[oshi4]
                    break;
                    case 60:
                        se2.play();
                        limit.innerText = "5/6";
                    meirei.innerText = oshies[oshi5]
                    break;
                    case 30:
                        se2.play();
                        limit.innerText = "ラスト!";
                    meirei.innerText = oshies[oshi6]
                    break;
                    case 0:
                        se3.play();
                        limit.style.display = 'none';
                    meirei.innerText = "プレゼン終了〜\nお疲れ様でした〜";
                    reloadb.style.display = 'block'
                    break;
            default:
                console.log("B");
    } 
}
function reload () {
    document.location.reload();
}



//const expr = 'Papayas';
//switch (expr) {
  //case 1:
   // console.log('Oranges are $0.59 a pound.');
   // break;

 // case 'Mangoes':
 // case 'Papayas':

   // console.log('Mangoes and papayas are $2.79 a pound.');
    // expected output: "Mangoes and papayas are $2.79 a pound."
   // break;
    
 // default:
   // console.log(`Sorry, we are out of ${expr}.`);
//}


//sasjajhja
