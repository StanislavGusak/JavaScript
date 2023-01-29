// Нумерований список пісень
let playList = [
    {
        author: 'LED ZEPPELIN',
        song: 'STAIRWAY TO HEAVEN'
    },
    {
        author: 'QUEEN',
        song: 'BOHEMIAN RHAPSODY'
    },
    {
        author: 'LYNYRD SKYNYRD',
        song: 'FREE BIRD'
    },
    {
        author: 'DEEP PURPLE',
        song: 'SMOKE ON THE WATER'
    },
    {
        author: 'JIMI HENDRIX',
        song: 'ALL ALONG THE WATCHTOWER'
    },
    {
        author: 'AC/DC',
        song: 'BACK IN BLACK'
    },
    {
        author: 'QUEEN',
        song: 'WE WILL ROCK YOU'
    },
    {
        author: 'METALLICA',
        song: 'ENTER SANDMAN'
    }
];
const ol = document.createElement('ol');
const mainDiv = document.getElementById('content');
mainDiv.append(ol);
for (let i in playList) {
    const li = document.createElement('li');
    const list = document.createElement('p');
    list.append(playList[i].author);
    list.append(' --- ');
    list.append(playList[i].song);
    li.append(list);
    ol.append(li);
};
console.log(playList);
// ============================================================================================

// Модальне вікно з кнопкою 'Закрити'
const modal = document.getElementById('modal');
const btn = document.createElement('button');
const p = document.createElement('p');
p.textContent = 'OPEN';
btn.append(p);
modal.append(btn);
btn.addEventListener('click', () => {
    const div = document.createElement('div');
    div.setAttribute('id', 'modal_div');
    const p = document.createElement('p');
    p.textContent = 'Hello, I am JavaScript!';
    div.append(p);
    const innerBtn = document.createElement('button');
    const innerBtnText = document.createElement('p');
    innerBtnText.textContent = 'CLOSE';
    innerBtn.append(innerBtnText);
    div.append(innerBtn);
    modal.append(div);
    btn.disabled = true;
    innerBtn.addEventListener('click', () => {
        div.remove();
        btn.disabled = false;
    });
});
// ============================================================================================

// Світлофор з кнопкою перемикання кольорів
const trafficLights = document.querySelector("div.traffic__light");
const redlight = document.getElementById("red");
const yellowlight = document.getElementById("yellow");
const greenlight = document.getElementById("green");
const button = document.getElementById("btn");
button.addEventListener("click", function () {
    if (redlight.classList.contains("red")) {
        redlight.classList.remove("red");
        yellowlight.classList.add("yellow");
    } else if (yellowlight.classList.contains("yellow")) {
        yellowlight.classList.remove("yellow");
        greenlight.classList.add("green");
    } else if (greenlight.classList.contains("green")) {
        greenlight.classList.remove("green");
        redlight.classList.add("red");
    }
});