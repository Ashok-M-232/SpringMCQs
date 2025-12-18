let currentQuiz = [];
let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];
let timerInterval;
let currentSubject = null;

// START QUIZ
function startQuiz(subject) {
    currentSubject = subject; // store current subject
    document.getElementById('cards').classList.add('hide');
    document.getElementById('setup').classList.remove('hide');

    if (subject === 'java') currentQuiz = javaQuiz;
    else if (subject === 'Core_spring') currentQuiz = springBootQuiz;
    else if (subject === 'springBootDataRestQuiz') currentQuiz = springBootDataRestQuiz;
    else if (subject === 'springBootErrorHandlingQuiz') currentQuiz = springBootErrorHandlingQuiz;
    else if (subject === 'springBootMicroservicesQuiz') currentQuiz = springBootMicroservicesQuiz;
    else if (subject === 'springBootSecurityQuiz') currentQuiz = springBootSecurityQuiz;
    else if (subject === 'springBootMemoryPerformanceQuiz') currentQuiz = springBootMemoryPerformanceQuiz;
}

// BEGIN QUIZ
function beginQuiz() {
    const questionCount = parseInt(document.getElementById('questionSelect').value);
    currentQuiz = shuffleArray(currentQuiz).slice(0, questionCount); // randomize questions
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];

    document.getElementById('setup').classList.add('hide');
    document.getElementById('question-box').classList.remove('hide');

    showQuestion();
    startTimer();
}

// SHUFFLE QUESTIONS
function shuffleArray(array) {
    let copy = array.slice();
    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
}

// SHOW QUESTION
function showQuestion() {
    const q = currentQuiz[currentQuestionIndex];
    document.getElementById('question').innerText = q.question;

    const optionsContainer = document.querySelector('.options');
    optionsContainer.classList.remove('dimmed'); // reset dimming

    for (let i = 0; i < 4; i++) {
        const btn = document.getElementById(`opt${i}`);
        btn.innerText = q.options[i];
        btn.classList.remove('selected-option');
        btn.onclick = () => checkAnswer(i);
    }

    document.getElementById('counter').innerText = `Question ${currentQuestionIndex + 1} / ${currentQuiz.length}`;
}

// CHECK ANSWER
function checkAnswer(selected) {
    const q = currentQuiz[currentQuestionIndex];
    userAnswers[currentQuestionIndex] = selected;

    const optionsContainer = document.querySelector('.options');

    for (let i = 0; i < 4; i++) {
        document.getElementById(`opt${i}`).classList.remove('selected-option');
    }

    document.getElementById(`opt${selected}`).classList.add('selected-option');
    optionsContainer.classList.add('dimmed');

    const optionButtons = optionsContainer.querySelectorAll('.option');
    optionButtons.forEach((btn) => btn.onclick = () => {});
}

// NEXT QUESTION
function nextQuestion() {
    const currentAnswer = currentQuiz[currentQuestionIndex].answer;
    if (userAnswers[currentQuestionIndex] === currentAnswer) score++;

    if (currentQuestionIndex < currentQuiz.length - 1) {
        currentQuestionIndex++;
        showQuestion();
    } else {
        showResult();
    }
}

// SHOW RESULT
function showResult() {
    document.getElementById('question-box').classList.add('hide');
    document.getElementById('resultScreen').classList.remove('hide');

    clearInterval(timerInterval);

    const percent = Math.round((score / currentQuiz.length) * 100);
    document.getElementById('percentText').innerText = `${percent}%`;
    document.getElementById('totalScore').innerText = `Score: ${score} / ${currentQuiz.length}`;

    const tbody = document.getElementById('answerTable');
    tbody.innerHTML = '';

    currentQuiz.forEach((q, index) => {
        const userAnsIndex = userAnswers[index];
        const isCorrect = userAnsIndex === q.answer;
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td class="q-col">${q.question}</td>
            <td class="correct-col">${q.options[q.answer]}</td>
            <td class="${isCorrect ? 'correct-col' : 'wrong-col'}">${userAnsIndex !== undefined ? q.options[userAnsIndex] : 'Not Answered'}</td>
            <td class="q-col">${q.explanation}</td>
        `;
        tbody.appendChild(tr);
    });
}

// TIMER
function startTimer() {
    let time = parseInt(document.getElementById('timeSelect').value) * 60;
    clearInterval(timerInterval);

    timerInterval = setInterval(() => {
        const minutes = String(Math.floor(time / 60)).padStart(2, '0');
        const seconds = String(time % 60).padStart(2, '0');
        document.getElementById('timer').innerText = `${minutes}:${seconds}`;
        if (time-- <= 0) {
            clearInterval(timerInterval);
            showResult();
        }
    }, 1000);
}

// RESTART SAME QUIZ
function restartQuiz() {
    document.getElementById('resultScreen').classList.add('hide');
    document.getElementById('setup').classList.remove('hide');
    currentQuiz = [];
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];
    clearInterval(timerInterval);
    document.getElementById('timeSelect').value = "1";
    document.getElementById('questionSelect').value = "10";

    // start the same subject directly
    startQuiz(currentSubject);
}

// GO TO SUBJECT SELECTION
function goToSubjectSelection() {
    document.getElementById('resultScreen').classList.add('hide');
    document.getElementById('cards').classList.remove('hide');
    currentQuiz = [];
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];
    clearInterval(timerInterval);
}
