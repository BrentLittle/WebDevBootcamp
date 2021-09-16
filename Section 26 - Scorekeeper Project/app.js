const p1ScoreDisplay = document.querySelector("#p1ScoreDisplay")
const p2ScoreDisplay = document.querySelector("#p2ScoreDisplay")
const p1Btn = document.querySelector("#p1Btn")
const p2Btn = document.querySelector("#p2Btn")
const resetBtn = document.querySelector("#reset")
const winningScoreSelector = document.querySelector("#playto")

let p1Score = 0
let p2Score = 0
let winningScore = parseInt(winningScoreSelector.value)
let gameOver = false


p1Btn.addEventListener('click', ()=>{
    if(!gameOver){
        p1Score += 1
        if(p1Score === winningScore){
            gameOver = true
            p1ScoreDisplay.classList.add("winner")
            p2ScoreDisplay.classList.add("loser")
            p1Btn.disabled = true
            p2Btn.disabled = true
        }
        p1ScoreDisplay.innerText = p1Score
    }
})

p2Btn.addEventListener('click', ()=>{
    if(!gameOver){
        p2Score += 1
        if(p2Score === winningScore){
            gameOver = true
            p1ScoreDisplay.classList.add("loser")
            p2ScoreDisplay.classList.add("winner")
            p1Btn.disabled = true
            p2Btn.disabled = true
        }
        p2ScoreDisplay.innerText = p2Score
    }
})

const reset = () => {
    gameOver = false;
    p1Score = 0
    p2Score = 0
    p1ScoreDisplay.innerText = p1Score
    p2ScoreDisplay.innerText = p2Score
    
    p1ScoreDisplay.classList.remove("winner", "loser")
    p2ScoreDisplay.classList.remove("winner", "loser")

    p1Btn.disabled = false
    p2Btn.disabled = false
}

resetBtn.addEventListener('click', reset)

winningScoreSelector.addEventListener('change', () => {
    winningScore = parseInt(winningScoreSelector.value)
    reset()
})

