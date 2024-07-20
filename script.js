function handleRule() {
  var rulesList = document.getElementById("rulesList");
  if (rulesList.style.display === "none" || rulesList.style.display === "") {
    rulesList.style.display = "block";
  } else {
    rulesList.style.display = "none";
  }
}

if (!localStorage.getItem("myScore")) localStorage.setItem("myScore", 0);
if (!localStorage.getItem("compScore")) localStorage.setItem("compScore", 0);

const myScore = localStorage.getItem("myScore");
const compScore = localStorage.getItem("compScore");

const compScoreP = document.getElementById("comp_score");
compScoreP.textContent = compScore;

const myScoreP = document.getElementById("my_score");
myScoreP.textContent = myScore;

const circleDivs = document.querySelectorAll(".circle");
var myMove, result;

circleDivs.forEach((div) => {
  div.addEventListener("click", function (event) {
    myMove = event.target.id;

    var moves = ["rock", "scissor", "paper"];
    const compMove = moves[Math.floor(Math.random() * moves.length)];

    let ans;
    if (myMove === compMove) {
      ans = "TIE UP";
    } else if (
      (myMove === "rock" && compMove === "scissor") ||
      (myMove === "scissor" && compMove === "paper") ||
      (myMove === "paper" && compMove === "rock")
    ) {
      ans = "YOU WON";
      localStorage.setItem(
        "myScore",
        parseInt(localStorage.getItem("myScore")) + 1
      );
    } else {
      ans = "YOU LOST";
      localStorage.setItem(
        "compScore",
        parseInt(localStorage.getItem("compScore")) + 1
      );
    }

    myScoreP.textContent = localStorage.getItem("myScore");
    compScoreP.textContent = localStorage.getItem("compScore");

    const page1 = document.getElementById("page1");
    page1.style.display = "none";
    const originalDiv = document.getElementById(myMove);
    const container = document.getElementById("page2_content");

    container.innerHTML = "";

    const yourDiv = originalDiv.cloneNode(true);
    yourDiv.className = "circle top-left result";
    yourDiv.style.backgroundImage = "url('images/" + myMove + ".png')";
    yourDiv.style.border = "16px solid " + getBorderColor(myMove);
    container.appendChild(yourDiv);

    const compDiv = originalDiv.cloneNode(true);
    compDiv.className = "circle top-right result";
    compDiv.style.backgroundImage = "url('images/" + compMove + ".png')";
    compDiv.style.border = "16px solid " + getBorderColor(compMove);
    container.appendChild(compDiv);

    const resultText = document.createElement("p");
    resultText.className = "result-text";
    resultText.textContent = ans;
    container.appendChild(resultText);

    const againstPC = document.createElement("p");
    againstPC.className = "against-pc";
    againstPC.textContent = 'AGAINST PC';
    container.appendChild(againstPC);

    const youPicked = document.createElement("p");
    youPicked.className = "you-picked";
    youPicked.textContent = 'YOU PICKED';
    container.appendChild(youPicked);

    const pcPicked = document.createElement("p");
    pcPicked.className = "pc-picked";
    pcPicked.textContent = 'PC PICKED';
    container.appendChild(pcPicked);

    const playAgainBtn = document.createElement("button");
    playAgainBtn.className = "play-again";
    playAgainBtn.type = "button";
    ans == "TIE UP"
      ? (playAgainBtn.textContent = "REPLAY")
      : (playAgainBtn.textContent = "PLAY AGAIN");
    playAgainBtn.onclick = playAgn;
    container.appendChild(playAgainBtn);

    if (ans == "YOU WON") {
      const rules_btn = document.getElementById("rules_btn");
      const next_btn = rules_btn.cloneNode(true);
      next_btn.className = "next_btn";
      next_btn.id = "next_btn";
      next_btn.textContent = "NEXT";
      next_btn.onclick = winScreen;
      const rulesDIv = document.getElementById("rules");
      rulesDIv.appendChild(next_btn);
    }
  });
});

function getBorderColor(move) {
  if (move === "rock") return "#0074b6";
  if (move === "scissor") return "#bd00ff";
  return "#ffa943";
}

function playAgn() {
  const page1 = document.getElementById("page1");
  const page2_content = document.getElementById("page2_content");
  page1.style.display = "block";
  page2_content.innerHTML = "";
}

const playAgnScreen = () => { window.location.href = 'index.html' };

function winScreen() {
  const header = document.getElementById("header");
  const page2 = document.getElementById("page2");
  const content2 = document.getElementById("content2");
  const stars = document.getElementById("stars");
  const wonText = document.getElementById("won_text");

  header.style.display = "none";
  page2.style.display = "none";
  content2.style.display = "flex";
  stars.style.display = "flex";

  wonText.innerHTML = "";

  const hurray = document.createElement("p");
  hurray.className = "hurray";
  hurray.textContent = "HURRAY!!";
  wonText.appendChild(hurray);

  const youWonTheGame = document.createElement("p");
  youWonTheGame.className = "you_won_the_game";
  youWonTheGame.textContent = "YOU WON THE GAME";
  wonText.appendChild(youWonTheGame);

  if (content2) {
    const next_btn = document.getElementById("next_btn");
    next_btn.style.display = 'none';
  }

  const playAgainBtn = document.createElement("button");
  playAgainBtn.className = "play-again-final-page";
  playAgainBtn.textContent = 'PLAY AGAIN';
  playAgainBtn.type = "button";
  playAgainBtn.onclick = playAgnScreen;
  wonText.appendChild(playAgainBtn);
}

circleDivs.forEach((div) => {
  div.addEventListener("click", function (event) {
    myMove = event.target.id;

    var moves = ["rock", "scissor", "paper"];
    const compMove = moves[Math.floor(Math.random() * moves.length)];

    let ans;
    if (myMove === compMove) {
      ans = "TIE UP";
    } else if (
      (myMove === "rock" && compMove === "scissor") ||
      (myMove === "scissor" && compMove === "paper") ||
      (myMove === "paper" && compMove === "rock")
    ) {
      ans = "YOU WON";
      localStorage.setItem(
        "myScore",
        parseInt(localStorage.getItem("myScore")) + 1
      );
    } else {
      ans = "YOU LOST";
      localStorage.setItem(
        "compScore",
        parseInt(localStorage.getItem("compScore")) + 1
      );
    }

    myScoreP.textContent = localStorage.getItem("myScore");
    compScoreP.textContent = localStorage.getItem("compScore");

    const page1 = document.getElementById("page1");
    page1.style.display = "none";
    const originalDiv = document.getElementById(myMove);
    const container = document.getElementById("page2_content");

    container.innerHTML = "";

    const yourDiv = originalDiv.cloneNode(true);
    yourDiv.className = "circle top-left result";
    yourDiv.style.backgroundImage = "url('images/" + myMove + ".png')";
    yourDiv.style.border = "16px solid " + getBorderColor(myMove);
    container.appendChild(yourDiv);

    const compDiv = originalDiv.cloneNode(true);
    compDiv.className = "circle top-right result";
    compDiv.style.backgroundImage = "url('images/" + compMove + ".png')";
    compDiv.style.border = "16px solid " + getBorderColor(compMove);
    container.appendChild(compDiv);

    if (ans === "YOU WON") {
      yourDiv.classList.add("w");
      compDiv.classList.remove("w");
    } else if (ans === "YOU LOST") {
      yourDiv.classList.remove("w");
      compDiv.classList.add("w");
    }

    const resultText = document.createElement("p");
    resultText.className = "result-text";
    resultText.textContent = ans;
    container.appendChild(resultText);

    const againstPC = document.createElement("p");
    againstPC.className = "against-pc";
    againstPC.textContent = 'AGAINST PC';
    container.appendChild(againstPC);

    const youPicked = document.createElement("p");
    youPicked.className = "you-picked";
    youPicked.textContent = 'YOU PICKED';
    container.appendChild(youPicked);

    const pcPicked = document.createElement("p");
    pcPicked.className = "pc-picked";
    pcPicked.textContent = 'PC PICKED';
    container.appendChild(pcPicked);

    const playAgainBtn = document.createElement("button");
    playAgainBtn.className = "play-again";
    playAgainBtn.type = "button";
    ans === "TIE UP"
      ? (playAgainBtn.textContent = "REPLAY")
      : (playAgainBtn.textContent = "PLAY AGAIN");
    playAgainBtn.onclick = playAgnScreen;
    container.appendChild(playAgainBtn);

    if (ans === "YOU WON") {
      const rules_btn = document.getElementById("rules_btn");
      const next_btn = rules_btn.cloneNode(true);
      next_btn.className = "next_btn";
      next_btn.id = "next_btn";
      next_btn.textContent = "NEXT";
      next_btn.onclick = winScreen;
      const rulesDIv = document.getElementById("rules");
      rulesDIv.appendChild(next_btn);
    }
  });
});