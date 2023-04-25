import Notiflix from 'notiflix';


const form = document.querySelector(".form");
form.addEventListener("submit", oncreatePromisesBtn);

function oncreatePromisesBtn(evt) {
  evt.preventDefault()
  let delay = Number(form.delay.value);
  let step = Number(form.step.value);
  let amount = Number(form.amount.value);
    

  for (let i = 1; i <= amount; i += 1) {
    const promise = createPromise(i, delay)
    promise
      .then((value) => {
        console.log(value);
        Notiflix.Notify.success(value);
      
      
      })
      .catch((value) => {
        console.log(value);
        Notiflix.Notify.failure(value);
      
      });
    delay += step;
    evt.target.reset()
  }
}

function createPromise(position, delay) {
   return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
       if (shouldResolve) {
    resolve(`✅ Fulfilled promise ${position} in ${delay}ms`)
    } else {
    reject(`❌ Rejected promise ${position} in ${delay}ms`)
    }
    }, delay);
  })
  
}


