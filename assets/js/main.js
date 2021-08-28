// DOM
let clock = document.querySelector(".clock");

// Adicionar 0 a esqueda de números < 10
const zeroAEsquerda = (x) => (x >= 10 ? x : `0${x}`);

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
    clock.innerHTML = `<p>${zeroAEsquerda(hour)}:${zeroAEsquerda(
        minute
    )}:${zeroAEsquerda(second)}</p>`;
}

// Funções do timer
const pressStart = () => {
    clearInterval(cron);
    cron = setInterval(timer, 1000);
    clock.style.color = "black";
};
const pressPause = () => {
    clearInterval(cron);
    clock.style.color = "red";
};
const pressRestart = () => {
    hour, minute, (second = 0), 0, 0;
    clock.innerText = "00:00:00";
    pressPause();
    clock.style.color = "black";
};

// Interação dos botões
document.addEventListener("click", function (e) {
    const element = e.target;

    if (element.classList.contains("button__begin")) {
        pressStart();
    }
    if (element.classList.contains("button__pause")) {
        pressPause();
    }
    if (element.classList.contains("button__restart")) {
        pressRestart();
    }
});