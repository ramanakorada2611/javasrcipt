let button=document.getElementById("check")
let para=document.getElementById('guess')
let number=[Math.floor(Math.random()*20)]

function game() {
    let input=document.getElementById('data').value
    let score=document.getElementById('score')
    let highscore=document.getElementById('highscore')
    if(input==number){
        para.innerHTML="You guess right"
        para.style.color="green"
        score.innerText=`Score💯 ${number}`
        highscore.innerText=`HighScore🎖️ ${number*2}`
    }
    else if(input < number){
        para.innerHTML="you guessed too low!"
        para.style.color="yellow"
    }
    else if (input > number){
        para.innerHTML="you guessed too high!"
        para.style.color="red"
    }
}