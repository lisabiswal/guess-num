// geneerating random number from 1 to 100
let randomNum=Math.floor(Math.random()*100+1)
// selecting all the elements from the html
let input=document.querySelector("#inp-ele")
let submit=document.querySelector("#submit-ele")
let prevGuess=document.querySelector("#prev-guess")
let remGuess=document.querySelector("#rem-guess")
let lowOrHigh=document.querySelector("#low-or-high")
let resDiv=document.querySelector(".result")

let alreadyGuessed=[]
let numGuess=1
let playGame=true

const p=document.createElement("p")

if(playGame){
  submit.addEventListener("click",(e)=>{
    e.preventDefault();
    let guess=parseInt(input.value)
    console.log(guess)
    validateNum(guess)
  })
}

function validateNum(guess){
  if(isNaN(guess)){
    alert("enter valid number")
  }else if(guess<=0){
    alert("please enter a number which is greater than zero")
  }else if(guess>100){
    alert("please enter a number which is greater than 100")
  }else{
    alreadyGuessed.push(guess)
    if(numGuess===11){
      displayGuess(guess)
      displayMes(`The correct number was ${randomNum}`)
      endGame()
    }else{
      displayGuess(guess)
      check(guess)
    }
  }
}

function check(guess){
  if(guess>randomNum){
    displayMes(`your guessed number is greater than the correct number`)
  }else if(guess<randomNum){
    displayMes(`your guessed number is lesser than the correct number`)
  }else{
    displayMes(`YAY!!! YOU GUESSED IT CORRECT`)
    endGame()
  }
}

function displayGuess(guess){
  input.value=" "
  prevGuess.innerHTML+=` ${guess} `
  numGuess++
  remGuess.innerHTML=` ${11-numGuess} `
}
function displayMes(mes){
  lowOrHigh.innerHTML=`<h2>${mes}</h2>`
}

function endGame(){
  input.value=" "
  input.setAttribute("disabled"," ")
  p.classList.add('button')
  p.innerHTML=`<button id="btn-ele">Start new game</button>`
  resDiv.appendChild(p)
  playGame=false
  newgame()
}

function newgame(){
  let startGame=document.querySelector("#btn-ele")
  startGame.addEventListener("click",()=>{
    displayMes(' ')
    randomNum=Math.floor(Math.random()*100+1)
    prevGuess.innerHTML=" "
    numGuess=1
    alreadyGuessed.innerHTML=[]
    remGuess.innerHTML=` ${11-numGuess} `
    playGame=true
    input.removeAttribute('disabled')
    resDiv.removeChild(p)
  })
}