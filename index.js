const btnStart = document.querySelector('[data-action="start"]');
const btnStop = document.querySelector('[data-action="stop"]');
const body = document.querySelector("body");

const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const TIMEOUT = 1000;
let timerId = null;

btnStart.addEventListener("click", onPressStart);
btnStop.addEventListener("click", onPressStop);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function onPressStart() {
  timerId = setInterval(() => {
    const changeColor = randomIntegerFromInterval(0, colors.length - 1);
    body.style.backgroundColor = colors[changeColor];
    btnStart.disabled = true;
  }, TIMEOUT);
}
function onPressStop() {
  clearInterval(timerId);
  btnStart.disabled = false;
}

// function changeColorBody() {
//   body.style.backgroundColor = randomIntegerFromInterval;
// }
