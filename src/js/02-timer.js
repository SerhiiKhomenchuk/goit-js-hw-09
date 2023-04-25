
import flatpickr from "flatpickr";

import "flatpickr/dist/flatpickr.min.css";
import "flatpickr/dist/themes/material_green.css";

const input = document.querySelector("#datetime-picker");
const btn = document.querySelector("button[data-start]");
const days = document.querySelector("span[data-days]");
const hours = document.querySelector("span[data-hours]");
const minutes = document.querySelector("span[data-minutes]");
const seconds = document.querySelector("span[data-seconds]");
const timer = document.querySelector(".timer");
// const value = document.querySelectorAll(".value");
// const label = document.querySelectorAll(".label");
let timerId = null
timer.style = "gap:10px; padding: 5px; border: 2px black; margin-top: 40px;  border-radius: 4px;  background-color: aqua; display: flex; width: 400px;  text-align: center; font-size:25px; text-transform: uppercase;";
let targetDate;
btn.setAttribute("disabled", "");
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    
  onClose(selectedDates, dateStr, instance) {
        targetDate = new Date(dateStr);
       
      if (targetDate.getTime()>options.defaultDate.getTime()) {
          btn.removeAttribute("disabled");
         
      } else {
          alert("Please choose a date in the future"); 
        }
    },
};
 btn.addEventListener("click", onStart);
          
function onStart() {
  btn.disabled = true;
  
              let timerId = setInterval(() => {
                                        
        days.textContent = convertMs(targetDate.getTime()-Date.now()).days.toString().padStart(2,"0");
                  hours.textContent = convertMs(targetDate.getTime()-Date.now()).hours.toString().padStart(2,"0");
                  minutes.textContent = convertMs(targetDate.getTime()-Date.now()).minutes.toString().padStart(2,"0");
                  seconds.textContent = convertMs(targetDate.getTime()-Date.now()).seconds.toString().padStart(2,"0");
                  if (seconds.textContent==="00"&& minutes.textContent==="00"&& hours.textContent==="00"&& days.textContent==="00") {
              clearInterval(timerId)
            }
              }, 1000);
                       
}

flatpickr(input, options);


function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
