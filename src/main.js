const tickRate = 1000 / 30; // 30 FPS
let clickStrength = 1;
let score = 0;

let juicer = new Building('HalfNote', 0.1, 15);
let sugar = new Building('quarterNote', 1, 100);

let WholeNote1 = new WholeNote('WholeNote1', 100, HalfNote);

function scorePlusPlus() {
    score += clickStrength;
}

function incScore() {
    score += HalfNote.cps;
    score += quarterNote.cps;
}

function updateButtons() {
    HalfNote.buttonState();
    quarterNote.buttonState();
    WholeNote1.buttonState();
}

function updatePage() {
    incScore();
    updateButtons();
    document.getElementById('score').innerHTML =
        '$' + Math.floor(score).toLocaleString();
}

setInterval(updatePage, tickRate);