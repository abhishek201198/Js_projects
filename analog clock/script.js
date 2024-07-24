let hrs = document.getElementById('hrs')
let min = document.getElementById('min')
let sec = document.getElementById('sec')


function displayTime(){
    let date = new Date();
    //  getting hours , minutes , second from Date() function

    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

 
    let hRotations = 30*hh + mm/2;
    let mRotations =  6 * mm;
    let sRotattions  = 6 * ss;

    hrs.style.transform = `rotate(${hRotations}deg)`;
    min.style.transform =   `rotate(${mRotations}deg)`;
    sec.style.transform =       `rotate(${sRotattions}deg)`;
}

setInterval(displayTime,1000)