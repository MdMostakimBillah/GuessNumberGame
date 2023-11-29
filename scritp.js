//variable diclaration
let number1 = document.querySelector('.number1');
let numbre2 = document.querySelector('.number2');
let number3 = document.querySelector('.number3');
let number4 = document.querySelector('.number4');
let number5 = document.querySelector('.number5');
let number6 = document.querySelector('.number6');
let number7 = document.querySelector('.number7');
let number8 = document.querySelector('.number8');
let number9 = document.querySelector('.number9');

let visibleNumber = document.querySelector(".visible-div");
let inputValue = document.querySelector("#inputValue");
let ResultOutput = document.querySelector(".ResultOutput");

let findNumber = document.querySelector(".find-number");

let successSound = new Audio('success.mp3');
let wrongSound = new Audio('wrong.mp3');



let setValue = function(){

    let inputValueStore = inputValue.value;
    // sent this value in another function 
    RandomNumberGenarator(inputValueStore);
    
};


let InstractedValue;
let topVisibleNumber = function(event){
    InstractedValue = event;
    return InstractedValue;
}

let checkNumber = function(event){
   let clickedValue = event.target.innerText;
   let visibleNum = InstractedValue.toString();
   let targetedElement = event.target;


   if(clickedValue == visibleNum){
        targetedElement.classList.add('clickedEle');
        ResultOutput.innerText = "Congrats!😊";
        successSound.play();
        setTimeout(function(){
            setValue();
            targetedElement.classList.remove('clickedEle');
        },1000);

   }else{
        targetedElement.classList.add('clickedEle');
        ResultOutput.innerText = "Opps!😔";
        wrongSound.play();
        setTimeout(function(){
            setValue();
            targetedElement.classList.remove('clickedEle');
        },1000);
   }

}
findNumber.addEventListener('click', checkNumber);


let RandomNumberGenarator = function(inputVal){
    // all random number genaret here 
    let RandomNumber1 = Math.floor(Math.random()* inputVal);
    let RandomNumber2 = Math.floor(Math.random()* inputVal);
    let RandomNumber3 = Math.floor(Math.random()* inputVal);
    let RandomNumber4 = Math.floor(Math.random()* inputVal);
    let RandomNumber5 = Math.floor(Math.random()* inputVal);
    let RandomNumber6 = Math.floor(Math.random()* inputVal);
    let RandomNumber7 = Math.floor(Math.random()* inputVal);
    let RandomNumber8 = Math.floor(Math.random()* inputVal);
    let RandomNumber9 = Math.floor(Math.random()* inputVal);

    // displya all random number 
    number1.innerText = RandomNumber1;
    numbre2.innerText = RandomNumber2;
    number3.innerText = RandomNumber3;
    number4.innerText = RandomNumber4;
    number5.innerText = RandomNumber5;
    number6.innerText = RandomNumber6;
    number7.innerText = RandomNumber7;
    number8.innerText = RandomNumber8;
    number9.innerText = RandomNumber9;

    // store all number in an array 
    let sotreAllRandomNumber = [RandomNumber1, RandomNumber2, RandomNumber3, RandomNumber4, RandomNumber5, RandomNumber6, RandomNumber7, RandomNumber8, RandomNumber9];

    let ShowOneRandomNumber = Math.floor(Math.random() * 8);

    let showNumber;
    for(let i = 0; i < sotreAllRandomNumber.length; i++){
        if(i === ShowOneRandomNumber){
            showNumber = sotreAllRandomNumber[i];
            visibleNumber.innerText = showNumber;
            break;
        }
    }
    topVisibleNumber(showNumber);
    
}
RandomNumberGenarator(10);


inputValue.addEventListener('focusout', setValue);
