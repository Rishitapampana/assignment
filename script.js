let currentUser  = null;
let quizQuestions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Lisbon"],
        correct: 1
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        correct: 1
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic", "Indian", "Arctic", "Pacific"],
        correct: 1
    },
    {
        question: "Which of these is the largest mammal?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Shark"],
        correct: 1
    },
    {
        question: "What is the fastest land animal?",
        options: ["Cheetah", "Lion", "Elephant", "Horse"],
        correct: 1
    }
];

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    // Allow any non-empty input for username and password
    if (username.trim() !== "" && password.trim() !== "") {
        currentUser  = username;
        showQuizContainer();
    } else {
        alert("Please enter both username and password");
    }
});

function showQuizContainer() {
    document.getElementById('auth').classList.add('hidden');
    document.getElementById('quizContainer').classList.remove('hidden');
    renderQuizQuestions();
}

function renderQuizQuestions() {
    const quizContainer = document.getElementById('quizQuestions');
    quizContainer.innerHTML = ''; // Clear previous questions

    quizQuestions.forEach((question, index) => {
        const questionHTML = `
            <div class="question">
                <p>${question.question}</p>
                ${question.options.map((option, i) => `
                    <label>
                        <input type="radio" name="question-${index}" value="${i}">
                        ${option}
                    </label>
                `).join('')}
            </div>
        `;
        quizContainer.innerHTML += questionHTML;
    });

    document.getElementById('submitQuiz').classList.remove('hidden');
}

document.getElementById('submitQuiz').addEventListener('click', function() {
    let currentScore = 0;

    quizQuestions.forEach((question, index) => {
        const selectedOption = document.querySelector(`input[name="question-${index}"]:checked`);
        if (selectedOption && parseInt(selectedOption.value) === question.correct) {
            currentScore++;
        }
    });

    alert(`Your score is: ${currentScore} out of ${quizQuestions.length}`);
});