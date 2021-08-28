// DOM
let clock = document.querySelector(".clock");
const [start, pause, restart] = [
    document.querySelector(".button__begin"),
    document.querySelector(".button__pause"),
    document.querySelector(".button__restart"),
];

// Adicionar 0 a esqueda de números < 10
const zeroAEsquerda = (x) => x >= 10 ? x : `0${x}`;

// Variáveis de tempo
let [hour, minute, second] = [0, 0, 0];
let cron;

// Lógica do timer
function timer() {
    second++;
    if (second === 60) {
        second = 0;
        minute++;
    }
    if (minute === 60) {
        minute = 0;
        hour++;
    }
    clock.innerHTML = `<p>${zeroAEsquerda(hour)}:${zeroAEsquerda(minute)}:${zeroAEsquerda(second)}</p>`
}

// Funções do timer
const pressStart= () => {
    cron = setInterval(timer, 1000);
};
const pressPause= () => {
    clearInterval(cron), 1000
};
const pressRestart= () => {
    hour,minute,second = 0, 0, 0;
    clock.innerText = '00:00:00';
    pressPause();
}

// Interação dos botões
start.addEventListener('click', pressStart)
pause.addEventListener('click', pressPause)
restart.addEventListener('click', pressRestart)
