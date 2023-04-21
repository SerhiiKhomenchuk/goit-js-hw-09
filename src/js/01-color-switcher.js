

const body = document.querySelector("body");
const startBtn = document.querySelector("button[data-start]");
const stopBtn = document.querySelector("button[data-stop]");


startBtn.addEventListener("click", onStart);
stopBtn.addEventListener("click", onStop)

let timerId;
function onStart(evt) {
     timerId = setInterval(() => {
        body.style = `background-color: ${getRandomHexColor()}`
    }, 1000);
    startBtn.setAttribute("disabled", "");
    stopBtn.removeAttribute("disabled");
    
}

function onStop() {
    clearInterval(timerId);
    startBtn.removeAttribute("disabled");
    stopBtn.setAttribute("disabled","");
}








function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}