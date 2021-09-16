const player1 = { 
    id: "player1", 
    button: document.querySelector("#p1Btn"), 
    display: document.querySelector("#p1ScoreDisplay"), 
    score: 0
}
const player2 = { 
    id: "player2", 
    button: document.querySelector("#p2Btn"), 
    display: document.querySelector("#p2ScoreDisplay"), 
    score: 0
}

const resetBtn = document.querySelector("#reset")
const winningScoreSelector = document.querySelector("#playto")
let winningScore = parseInt(winningScoreSelector.value)
let gameOver = false

const updateScore = (player) => {
    if(!gameOver){
        player.score += 1
        player.display.innerText = player.score
        if(player.score === winningScore){
            if(player.id === "player1"){ 
                gameWon(player1, player2) 
            } 
            else { 
                gameWon(player2, player1) 
            }
        }
    }
}

const gameWon = (winner, loser) => {
    gameOver = true
    
    winner.display.classList.add("winner")
    loser.display.classList.add("loser")
    
    winner.button.disabled = true
    loser.button.disabled = true
}

const resetPlayer = (player) => {
    player.score = 0
    player.display.innerText = player1.score
    player.display.classList.remove("winner", "loser")
    player.button.disabled = false
}

const resetScore = () => {
    gameOver = false;
    resetPlayer(player1)
    resetPlayer(player2)
}

p1Btn.addEventListener('click', () => {
    updateScore(player1)
})

p2Btn.addEventListener('click', () => {
    updateScore(player2)
})

resetBtn.addEventListener('click', resetScore)

winningScoreSelector.addEventListener('change', () => {
    winningScore = parseInt(winningScoreSelector.value)
    resetScore()
})