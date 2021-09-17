const handOption = {
    "rock": "/assets/Rock.png",
    "paper": "/assets/paper.png",
    "scissors":  "/assets/scissors.png"
}

let SCORE = 0;

const pickUserHand = (hand) => {
    // console.log(hand);
    //Hide the current page
    let hands = document.querySelector('.hands');
    hands.style.display = "none";
    
    //Show the next page with what user pick
    let contest = document.querySelector('.contest');
    contest.style.display = "flex";

    //set the uder pick   
    document.getElementById("userPickImage").src = handOption[hand];

    pickComputerHand(hand);
}

const pickComputerHand = (hand) => {
    let hands = ["rock", "paper", "scissors"];
    let cpHand = hands[Math.floor(Math.random() * 3)];

    document.getElementById("computerPickImage").src = handOption[cpHand];

    refree(hand, cpHand);
}

const refree = (userHand, cpHand) => {
    if (userHand == "paper" && cpHand == "scissors") {
        setDecision("YOU LOSE!");
      }
      if (userHand == "paper" && cpHand == "rock") {
        setDecision("YOU WIN!");
        setScore(SCORE + 1);
      }
      if (userHand == "paper" && cpHand == "paper") {
        setDecision("It's a tie!");
      }
      if (userHand == "rock" && cpHand == "scissors") {
        setDecision("YOU WIN!");
        setScore(SCORE + 1);
      }
      if (userHand == "rock" && cpHand == "paper") {
        setDecision("YOU LOSE!");
      }
      if (userHand == "rock" && cpHand == "rock") {
        setDecision("It's a tie!");
      }
      if (userHand == "scissors" && cpHand == "scissors") {
        setDecision("It's a tie!");
      }
      if (userHand == "scissors" && cpHand == "rock") {
        setDecision("YOU LOSE!");
      }
      if (userHand == "scissors" && cpHand == "paper") {
        setDecision("YOU WIN!");
        setScore(SCORE + 1);
      }
};

const setDecision = (decision) => {
    document.querySelector(".decision h1").innerText = decision;
}

const setScore = (score) => {
    SCORE = score;
    document.querySelector(".score h1").innerText = score;
}

const restartGame = () => {
    let hands = document.querySelector('.hands');
    hands.style.display = "flex";
    
    let contest = document.querySelector('.contest');
    contest.style.display = "none";
}