var player;
var botrand = ["✊","✋","✌"];
var scorePlayer = 0;
var scoreBot = 0;
document.querySelectorAll("button")[0].addEventListener("click", function(){
    player = document.querySelectorAll("button")[0].value;
    playGame();
});
document.querySelectorAll("button")[1].addEventListener("click", function(){
    player = document.querySelectorAll("button")[1].value;
    playGame();
});
document.querySelectorAll("button")[2].addEventListener("click", function(){
    player = document.querySelectorAll("button")[2].value;
    playGame();
});

function playGame() {
    var bot = botrand[Math.floor(Math.random() * botrand.length)];

    if (bot === player) {
        document.querySelector("h2").textContent = "DRAW 🤜🤛";
        document.querySelector(".player").innerHTML = player;
        document.querySelector(".bot").innerHTML = bot;
    } else if (
        (bot === "✊" && player === "✌") || 
        (bot === "✋" && player === "✊") || 
        (bot === "✌" && player === "✋")
    ) {
        document.querySelector("h2").textContent = "YOU LOSE 🐸";
        document.querySelector(".player").innerHTML = player;
        document.querySelector(".bot").innerHTML = bot;
        scoreBot++;
        document.querySelector(".bott").innerHTML = scoreBot;
    } else {
        document.querySelector("h2").textContent = "YOU WIN ✨";
        document.querySelector(".player").innerHTML = player;
        document.querySelector(".bot").innerHTML = bot;
        scorePlayer++;
        document.querySelector(".you").innerHTML = scorePlayer;
    }
}

