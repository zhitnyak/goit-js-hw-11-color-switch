const btnStart = document.querySelector('[data-action="start"]');
const btnStop = document.querySelector('[data-action="stop"]');
const body = document.querySelector("body");
const wrapper = document.querySelector(".wrapper");

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
console.dir(btnStart);
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function changeBodyColor() {
  const changeColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
  body.style.backgroundColor = changeColor;
  wrapper.textContent = `${changeColor}`;
}

function onPressStart() {
  btnStart.disabled = true;
  console.dir(btnStart.disabled);

  return (timerId = setInterval(changeBodyColor, TIMEOUT));
}

function onPressStop() {
  clearInterval(timerId);
  timerId = 0;
  btnStart.disabled = false;
}
