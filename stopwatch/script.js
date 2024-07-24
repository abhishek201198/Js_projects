// let timerDisplay = document.querySelector('.timerDisplay');
// let stopBtn = document.getElementById('stopBtn');
// let startBtn = document.getElementById('startBtn ');
// let resetBtn = document.getElementById('resetBtn');


// let msec = 0;
// let secs = 0;
// let minutes = 0;


// let timerId = null;

// startBtn.addEventListener('click', function () {
//     if (timerId !== null) {
//         clearInterval(timerId);
//     }
//     timerId = setInterval(startTimer, 10)
// })

// stopBtn.addEventListener('click', function () {
//     clearInterval(timerId);
// })


// resetBtn.addEventListener('click', function () {
//     clearInterval(timerId);
//     timerDisplay.innerHTML = `00 : 00 : 00`
// })

// function startTimer() {
//     msec += 1;
//     if (msec == 100) {
//         msec = 0;
//         secs++;
//     }

//     if (secs == 60) {
//         secs = 0;
//         minutes++;
//     }

//     let msecString = msec < 10 ? `0 ${msec}` : msec;
//     let secsString = msec < 10 ? `0 ${msec}` : msec;
//     let minsSting = msec < 10 ? `0 ${msec}` : msec;

//     timerDisplay.innerHTML = `${minsSting} : ${secsString} : ${msecString}`;
// }




let msec = 0;
let secs = 0;
 let minutes = 0;


 let timerId = null;


 document.querySelector('.timerDisplay');
 document.getElementById('stopBtn').addEventListener('click', function () {
      clearInterval(timerId);
 })
  
 document.getElementById('startBtn ').addEventListener('click', function () {
          if (timerId!==null) {
                    clearInterval(timerId);
  }
   else{
    timerId = setInterval(startTimer, 10)

   }     });
document.getElementById('resetBtn').addEventListener('click', function () {
clearInterval(timerId);
     timerDisplay.innerHTML = `00 : 00 : 00`
 })
;

function startTimer() {
    msec += 1;
    if (msec == 100) {
        msec = 0;
        secs++;
    }

    if (secs == 60) {
        secs = 0;
        minutes++;
    }

    let msecString = msec < 10 ? `0 ${msec}` : msec;
    let secsString = msec < 10 ? `0 ${msec}` : msec;
    let minsSting = msec < 10 ? `0 ${msec}` : msec;

    timerDisplay.innerHTML = `${minsSting} : ${secsString} : ${msecString}`;
}






// let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
// let timeRef = document.querySelector(".timer-display");
// let int = null;

// document.getElementById("start-timer").addEventListener("click", () => {
//     if(int !== null) {
//         clearInterval(int);
//     }
//     int = setInterval(displayTimer, 10);
// });

// document.getElementById("pause-timer").addEventListener("click", () => {
//     clearInterval(int);
// });

// document.getElementById("reset-timer").addEventListener("click", () => {
//     clearInterval(int);
//     [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
//     timeRef.innerHTML = "00 : 00 : 00 : 000 ";
// }); 

// function displayTimer() {
//     milliseconds += 10;
//     if(milliseconds == 1000) {
//         milliseconds = 0;
//         seconds++;
//         if(seconds == 60) {
//             seconds = 0;
//             minutes++;
//             if(minutes == 60) {
//                 minutes = 0;
//                 hours++;
//             }
//         }
//     }

//     let h = hours < 10 ? "0" + hours : hours;
//     let m = minutes < 10 ? "0" + minutes : minutes;
//     let s = seconds < 10 ? "0" + seconds : seconds;
//     let ms = 
//         milliseconds < 10
//         ? "00" + milliseconds
//         : milliseconds < 100
//         ? "0" + milliseconds
//         : milliseconds;

//     timeRef.innerHTML = `${h} : ${m} : ${s} : ${ms}`;

// }