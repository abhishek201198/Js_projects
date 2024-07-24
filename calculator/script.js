let input = document.querySelector('.input');
let buttons = document.querySelectorAll("button");
let str = "";
let arr = Array.from(buttons);
// console.log(arr);
arr.forEach(button => {
    button.addEventListener("click", (e) => {
        if (e.target.innerHTML == "=") {
            str = eval(str);
            input.value = str;
        }
        else if (e.target.innerHTML == 'AC') {
            str = "";
            input.value = str;
        }
        else if(e.target.innerHTML == 'DE'){
            //  str = str.substring   (0, str.length-1) ;
            str = str.substring(0, str.length-1);
             input.value = str
            }
        else {
            str += e.target.innerHTML;
            input.value = str;
        }
    })
})

// let string = "";
// let buttons = document.querySelectorAll('.button');
// Array.from(buttons).forEach((button)=>{
//   button.addEventListener('click', (e)=>{
//     if(e.target.innerHTML == '='){
//       string = eval(string);
//       document.querySelector('input').value = string;
//     }
//     else if(e.target.innerHTML == 'C'){
//       string = ""
//       document.querySelector('input').value = string;
//     }
//     else{
//     console.log(e.target)
//     string = string + e.target.innerHTML;
//     document.querySelector('input').value = string;
//       }
//   })
// })

