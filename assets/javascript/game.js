// Create all variables to track:
    // Wins counter
    wins = 0; 
    // Losses counter
    losses = 0;
    // Score counter
    score = 0;
    // Target score for the round (random number 19-120)
    var targetScore;
    // Values of each crystal (each random numbers 1-12)
    var crystalVal;
    // Values of each crystal (each random numbers 1-12)
    var crystal1;
    var crystal2;
    var crystal3;
    var crystal4;


// Create a function to assign a random number between 19 and 120 to targetScore
function getTargetScore() {
    min = Math.ceil(19);
    max = Math.floor(120);
    targetScore = Math.floor(Math.random() * (max - min + 1)) + min;
    return targetScore;
}

// Create a function to assign a random number between 1 and 12 to crystalVal
function getCrystalVal() {
    min = Math.ceil(1);
    max = Math.floor(12);
    crystalVal = Math.floor(Math.random() * (max - min + 1)) + min;
    return crystalVal;
}

// Create a function to start/reset the game
function resetGame() {
    // 	Update win and loss text
    $("#wins-text").html("<h3> WINS: " + wins + "</h3>");
    $("#losses-text").html("<h3> LOSSES: " + losses + "</h3>");
    // 	Reset score back down to 0
    score = 0;
    // 	Update the score text on the page
    $("#my-score").text("0");
    // 	Pick a new goal (new random number) between 19-120
    getTargetScore();
    // 	Update this on the page
    $("#target-score").html("<h1>" + targetScore +"</h1>");
    // 	Create 4 new values for the 4 crystals between 1 and 12. Assign 4 new values for the 4 crystals
    crystal1 = getCrystalVal();
        console.log(crystal1);
    crystal2 = getCrystalVal();
        console.log(crystal2);
    crystal3 = getCrystalVal();
        console.log(crystal3);
    crystal4 = getCrystalVal();
        console.log(crystal4);


    // $("#crystal-1").data("crystalVal", getCrystalVal());
    //     console.log($("#crystal-1").data()['crystalVal']);
    // $("#crystal-2").data("crystalVal", getCrystalVal());
    //     console.log($("#crystal-2").data()['crystalVal']);
    // $("#crystal-3").data("crystalVal", getCrystalVal());
    //     console.log($("#crystal-3").data()['crystalVal']);
    // $("#crystal-4").data("crystalVal", getCrystalVal());
    //     console.log($("#crystal-4").data()['crystalVal']);
}

// Create a function to test win/lose
function winLossCheck () {
// 	If the player’s score === the goal increase wins by 1 and resent the game
    if (score === targetScore) {
        wins++;
        resetGame();
    // 	If the player’s score is > the goal
    } else if (score > targetScore) {
        losses++;
        resetGame();
    }
}

// 	Grab the value of the crystal that was clicked on. Add that value to the player’s score. Call the win/loss function
function crystal1Function () {
    score = crystal1 + score;
    $("#my-score").html("<h2>" + score + "</h2>");
    winLossCheck();
}

function crystal2Function () {
    score = crystal2 + score;
    $("#my-score").html("<h2>" + score + "</h2>");
    winLossCheck();
}

function crystal3Function () {
    score = crystal3 + score;
    $("#my-score").html("<h2>" + score + "</h2>");
    winLossCheck();
}

function crystal4Function () {
    score = crystal4 + score;
    $("#my-score").html("<h2>" + score + "</h2>");
    winLossCheck();
}

// When the window loads, calculate and show the target score
window.onload = function() {
    resetGame();
    // Create crystal click events
    $("#crystal-1").on("click", crystal1Function);
    $("#crystal-2").on("click", crystal2Function);
    $("#crystal-3").on("click", crystal3Function);
    $("#crystal-4").on("click", crystal4Function);

}


