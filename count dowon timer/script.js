let dest = new Date( "oct22 , 2024 10:00:00").getTime();

let a = setInterval(()=>{



let now  = new Date().getTime(); 

let diff = dest - now;
console.log(diff);

let days =  Math.floor(diff / (1000*24*60*60));
console.log(days   );

let hours = Math.floor(diff % (1000*60*60*24)/(1000*60*60));
console.log(hours)

let minutes = Math.floor(diff %(1000*60*60)/(1000*60));
console.log(minutes);
let seconds =  Math.floor((diff % (1000*60)/1000))
console.log(seconds);

let d=document.getElementById('demo').innerHTML = `${days}d.${hours}h : ${minutes}m :${seconds}s`


},1000) 
