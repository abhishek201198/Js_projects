let inputSlider = document.getElementById('inputSlider')
let sliderValue =  document.getElementById('sliderValue')
let passBox =  document.getElementById('genBtn')
let lowercase = document.getElementById('lowercase');
let UpperCase = document.getElementById('UpperCase');
let Numbers = document.getElementById('Numbers');
let Symbols = document.getElementById('Symbols');
let genBtn = document.getElementById('genBtn')



sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener('input',()=>{
    sliderValue.textContent = inputSlider.value;

});
if(genBtn){
    genBtn.addEventListener('click',function () {
    passBox.value = generatePassword();
})}


//  function to generate password

function generatePassword(){
    let genpassword ="";
    genpassword = Math.floor(Math.random() * 10);
    // console.log(genpassword);
    return genpassword;
}

generatePassword();


// SliderValue.textContent = inputSlider.value;
// inputSlider.addEventListener('input', () => {
//     SliderValue.textContent = inputSlider.value;
// });

//  genBtn.addEventListener('click', ()=> {
//     passBox.value = generatePassword();
// })

// // function to generate Password

// function generatePassword() {
//     let genpassword = "";

//     genpassword = Math.random();
//     return genpassword;
// }

// generatePassword();


