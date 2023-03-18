function UI() {
    this.quizStartBtn = document.querySelector(".btn-start"),
    this.quizBox = document.querySelector(".quiz-box"),
    this.questionText = document.querySelector(".question-text"),
    this.optionList = document.querySelector(".option-list"),
    this.nextQuestion = document.querySelector(".next-question"),
    this.questionIndex = document.querySelector(".question-index"),
    this.quizFinished = document.querySelector(".score-box");
    this.scoreText = document.querySelector(".score-text");
    this.quizReplay = document.querySelector(".btn-again");
    this.quizQuit = document.querySelector(".btn-quit");
    this.timeSecond = document.querySelector(".time-second");
    this.timeText = document.querySelector(".time-text");
    this.timeLine = document.querySelector(".time-line");
    this.correctIcon = '<div class="icon"><i class="fas fa-check"></i></div>',
    this.incorrectIcon = '<div class="icon"><i class="fas fa-times"></i></div>'
}

UI.prototype.soruGoster = function(soru) {
    let question = `<span>${soru.soruMetni}</span>`;
    let options = '';

    for(let cevap in soru.cevapSecenek) {
        options += 
        `
        <div class="option">
                <span><b>${cevap}</b>: ${soru.cevapSecenek[cevap]}</span>
        </div>
        `;
    }
    this.questionText.innerHTML = question;
    this.optionList.innerHTML = options;

    this.soruSirasiGoster(quiz.soruIndex+1,quiz.sorular.length)

    const allOption = this.optionList.querySelectorAll(".option");
    for(let opt of allOption){
        opt.setAttribute("onclick", "optionSelected(this)")
    }
}

UI.prototype.soruSirasiGoster = function(soruIndex, toplamSoru) {
    let content = `<span class="badge bg-warning">${soruIndex} / ${toplamSoru}</span>`
    this.questionIndex.innerHTML = content;
}

UI.prototype.skoruGoster = function(dogruSoruSayisi, toplamSoruSayisi) {
    let content = `<div class="score-text">Toplam ${toplamSoruSayisi} sorundan ${dogruSoruSayisi} tanesini bildiniz.</div>`
    this.scoreText.innerHTML = content;
}