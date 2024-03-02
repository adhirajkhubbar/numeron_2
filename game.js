// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html
let randomNum1 = Math.round(Math.random() * 100);
let randomNum2 = Math.round(Math.random() * 100);
document.getElementById("number1").textContent = randomNum1;
document.getElementById("number2").textContent = randomNum2;
// Iteration 3: Creating variables required to make the game functional
let addition=document.getElementById("plus")
let minus=document.getElementById("minus")
let multiply=document.getElementById("mul")
let divide=document.getElementById("divide")
let modulus=document.getElementById("modulus")
let score=0;

// Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"
let number3;
let number3box=document.getElementById("number3");
console.log(number3box);
// Iteration 5: Creating a randomise function to make the game functional
function randomise(){
    let randomNum1 = Math.round(Math.random() * 100);
    let randomNum2 = Math.round(Math.random() * 100);
    if (randomNum1<randomNum2){
        let temp=randomNum1;
        randomNum1=randomNum2;
        randomNum2=temp;
    }
    document.getElementById("number1").textContent = randomNum1;
    document.getElementById("number2").textContent = randomNum2;
    let OperatorArr=["+","-","*","/","%"];
    let randomIndex=Math.floor(Math.random()*OperatorArr.length);
    switch(OperatorArr[randomIndex]){
        case"+":
            number3=randomNum1+randomNum2;
            break;
        case"-":
            number3=randomNum1-randomNum2;
            break;
        case"*":
            number3=randomNum1*randomNum2;
            break;
        case"/":
            number3=Math.floor(randomNum1/randomNum2);
            break;
        case "%":
            number3=randomNum1%randomNum2;
            break;    
        default:
            randomise();   
    }
    number3box.innerText=number3;
}
randomise()
// Iteration 6: Making the Operators (button) functional
addition.onclick=()=>{
    if(randomNum1+randomNum2===number3){
        score++;
}else{
    alert("game over")
}
}
minus.onclick=()=>{
    if(randomNum1-randomNum2===number3){
        score++;
}else{
    alert("game over")
}
}
multiply.onclick=()=>{
    if(randomNum1*randomNum2===number3){
        score++;
}else{
    alert("game over")
}
}
divide.onclick=()=>{
    if(randomNum1/randomNum2===number3){
        score++;
}else{
    alert("game over")
}
}
modulus.onclick=()=>{
    if(randomNum1%randomNum2===number3){
        score++;
}else{
    alert("game over")
}
}



// Iteration 7: Making Timer functional
let time=20;
let timer=document.getElementById("timer");

function startTimer(){
    time=20;
    timer.innerText=time;
    setInterval(function(){
        time--;
        if(time==0){
            alert("game over ");
        }
        timer.innerText=time;
    },1000);
}
startTimer();