// Start Button
var startBtn = document.querySelector('#startBtn');
// Title
var title = document.querySelector('#title');
// Circle
var circle = document.querySelector('.circle');
// Total Result
var totRes = document.querySelector('#totRes');
var totResTtl = document.querySelector('#totResTtl');
// Player 1&2 Areas
var pl1Area = document.querySelector('#pl1Area');
var pl2Area = document.querySelector('#pl2Area');
// Player 1&2 Names
var pl1Name = document.querySelector('#pl1Name');
var pl2Name = document.querySelector('#pl2Name');
// Player 1&2 Number Scores
var scoreNr1 = document.querySelector('#scoreNr1');
var scoreNr2 = document.querySelector('#scoreNr2');
// Player 1&2 Buttons
var pl1Btn = document.querySelector('#pl1Btn');
var pl2Btn = document.querySelector('#pl2Btn');
// Start Again Button
var startAgainBtn = document.querySelector('#startAgainBtn');
// Variables
var round = 0;
var pl1Score = 0;
var pl2Score = 0;

// EventListener
startBtn.addEventListener('click', startGame);
startAgainBtn.addEventListener('click', startGame);

// function
function startGame() {
    round = 0;
    pl1Score = 0;
    pl2Score = 0;
    circle.innerHTML = round;
    pl1Area.removeAttribute('class');
    pl2Area.removeAttribute('class');
    pl1Btn.removeAttribute('disabled');
    pl2Btn.removeAttribute('disabled');
    pl1Btn.setAttribute('class', 'btn btn-success');
    pl2Btn.setAttribute('class', 'btn btn-success');
    startBtn.style.display = 'none';
    title.style.display = 'none';
    circle.style.display = 'block';
    totRes.style.display = 'block';
    pl1Area.style.display = 'block';
    pl2Area.style.display = 'block';
    scoreNr1.innerHTML = pl1Score;
    scoreNr2.innerHTML = pl2Score;
    totResTtl.innerHTML = 'Total Result' + ' ' + ' ' + pl1Score + ' ' + ':' + ' ' + pl2Score;
    start();
}

function start() {
    var name1 = prompt('Enter player 1 name');
    var name2 = prompt('Enter player 2 name');
    pl1Name.innerHTML = name1;
    pl2Name.innerHTML = name2;
    pl1Btn.addEventListener('click', dice1);
    pl2Btn.addEventListener('click', dice2);
}

function dice1() {
    round += 0.5;
    circle.innerHTML = Math.floor(round);
    pl1Btn.setAttribute('disabled', 'disabled');
    pl2Btn.removeAttribute('disabled');
    pl2Btn.setAttribute('class', 'btn btn-success');
    var d1 = Math.ceil(Math.random() * 6);
    pl1Score += d1;
    scoreNr1.innerHTML = d1;
    if (round === 10) {
        winner();
    } else if (pl1Score !== 0) {
        pl1Btn.setAttribute('class', 'btn btn-warning');
        totResTtl.innerHTML = 'Total Result' + ' ' + ' ' + pl1Score + ' ' + ':' + ' ' + pl2Score;
    }
}

function dice2() {
    round += 0.5;
    circle.innerHTML = Math.floor(round);
    pl2Btn.setAttribute('disabled', 'disabled');
    pl1Btn.removeAttribute('disabled');
    pl1Btn.setAttribute('class', 'btn btn-success');
    var d2 = Math.ceil(Math.random() * 6);
    pl2Score += d2;
    scoreNr2.innerHTML = d2;
    if (round === 10) {
        winner();
    } else if (pl2Score !== 0) {
        pl2Btn.setAttribute('class', 'btn btn-warning');
        totResTtl.innerHTML = 'Total Result' + ' ' + ' ' + pl1Score + ' ' + ':' + ' ' + pl2Score;
    }
}

function winner() {
    circle.innerHTML = round;
    pl1Btn.setAttribute('disabled', 'disabled');
    pl2Btn.setAttribute('disabled', 'disabled');
    if (pl1Score > pl2Score) {
        pl1Area.setAttribute('class', 'pl1Area');
        totResTtl.innerHTML = 'Total Result' + ' ' + ' ' + pl1Score + ' ' + ':' + ' ' + pl2Score;
        startAgainBtn.style.display = 'block';
    } else if (pl1Score < pl2Score) {
        pl2Area.setAttribute('class', 'pl2Area');
        totResTtl.innerHTML = 'Total Result' + ' ' + ' ' + pl1Score + ' ' + ':' + ' ' + pl2Score;
        startAgainBtn.style.display = 'block';
    } else {
        totResTtl.innerHTML = 'No Winner!' + ' ' + ' ' + pl1Score + ' ' + ':' + ' ' + pl2Score;
        startAgainBtn.style.display = 'block';
    }
}