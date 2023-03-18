// obje içindeki değişkenlere property denir

const ui = new UI();
const quiz = new Quiz(sorular);
let counterInterval;
let counterLineInterval;


ui.quizStartBtn.addEventListener("click", function () {
    ui.soruGoster(quiz.soruGetir())
    ui.quizBox.classList.add("active")
    ui.nextQuestion.classList.remove("show");
    startTimer(5);
    startTimerLine();
});

ui.nextQuestion.addEventListener("click", function() {
    if (quiz.sorular.length != quiz.soruIndex + 1) {
        quiz.soruIndex += 1;
        clearInterval(counterInterval);
        startTimer(5);
        clearInterval(counterLineInterval);
        startTimerLine();
        ui.soruGoster(quiz.soruGetir())
        ui.nextQuestion.classList.remove("show");
        ui.timeText.textContent = "Kalan Süre"
    }else{
        console.log("quiz bitti");
        clearInterval(counterInterval);
        ui.quizBox.classList.remove("active");
        ui.quizFinished.classList.add("active")
        ui.skoruGoster(quiz.correctAnswerCount,quiz.sorular.length)
    }
    
})

ui.quizReplay.addEventListener("click", function () {
    quiz.soruIndex = 0;
    quiz.correctAnswerCount = 0;

    ui.quizStartBtn.click();
    ui.quizFinished.remove("active");
});

ui.quizQuit.addEventListener("click", function () {
    window.location.reload();
})

function optionSelected(option) {
    clearInterval(counterInterval);
    clearInterval(counterLineInterval);
    let cevap = option.querySelector("span b").textContent;
    let soru = quiz.soruGetir();

    if (soru.cevabiKontrolEt(cevap)) {
        option.classList.add("correct");
        // istenilen yere insert ediyor
        option.insertAdjacentHTML("beforeend", ui.correctIcon);
        quiz.correctAnswerCount += 1;
    }else{
        option.classList.add("incorrect");
        option.insertAdjacentHTML("beforeend", ui.incorrectIcon);
    }

    for (let i = 0; i < ui.optionList.children.length; i++) {
        ui.optionList.children[i].classList.add("disabled");
    }
    
    ui.nextQuestion.classList.add("show");
}

function startTimer(times) {
    counterInterval = setInterval(timer, 1000);

    function timer() {
        ui.timeSecond.textContent = times;
        times--;

        if (times < 0) {
            clearInterval(counterInterval);
            ui.timeText.textContent = "Süre Bitti"

            let cevap = quiz.soruGetir().dogruCevap;
            for(let option of ui.optionList.children){
                if (option.querySelector("span b").textContent == cevap) {
                    option.classList.add("correct");
                    option.insertAdjacentHTML("beforeend", ui.correctIcon);
                }
                option.classList.add("disabled");
            }
            ui.nextQuestion.classList.add("show");
        }
    }
}

function startTimerLine() {
    let timeWidth = 0;

    counterLineInterval = setInterval(timer, 11);

    function timer() {
        timeWidth += 1;
        ui.timeLine.style.width = timeWidth + "px";

        if (timeWidth > 549) {
            clearInterval(counterLineInterval);
        }
    }
}