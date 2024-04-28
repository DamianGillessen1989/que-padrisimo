// JS for index.html Quiz game
const questions = [
    {
        question: "What is the Spanish word for 'tree'?",
        answers: [
            { text: "árbol", correct: true },
            { text: "planta", correct: false },
            { text: "hierba", correct: false },
            { text: "flor", correct: false }
        ]
    },
    {
        question: "How do you say 'hello' in Spanish?",
        answers: [
            { text: "hola", correct: true },
            { text: "adiós", correct: false },
            { text: "gracias", correct: false },
            { text: "por favor", correct: false }
        ]
    },
    {
        question: "What is the Spanish word for 'water'?",
        answers: [
            { text: "fuego", correct: false },
            { text: "aire", correct: false },
            { text: "tierra", correct: false },
            { text: "agua", correct: true }
        ]
    },
    {
        question: "What does 'gracias' mean in English?",
        answers: [
            { text: "please", correct: false },
            { text: "thank you", correct: true },
            { text: "sorry", correct: false },
            { text: "hello", correct: false }
        ]
    },
    {
        question: "How do you say 'goodbye' in Spanish?",
        answers: [
            { text: "hola", correct: false },
            { text: "adiós", correct: true },
            { text: "gracias", correct: false },
            { text: "por favor", correct: false }
        ]
    },
    {
        question: "What is the Spanish word for 'book'?",
        answers: [
            { text: "periódico", correct: false },
            { text: "revista", correct: false },
            { text: "libro", correct: true },
            { text: "cuaderno", correct: false }
        ]
    },
    {
        question: "What is the Spanish word for 'sun'?",
        answers: [
            { text: "luna", correct: false },
            { text: "estrella", correct: false },
            { text: "sol", correct: true },
            { text: "nube", correct: false }
        ]
    },
    {
        question: "What does 'hambre' mean in English?",
        answers: [
            { text: "thirsty", correct: false },
            { text: "hungry", correct: true },
            { text: "tired", correct: false },
            { text: "happy", correct: false }
        ]
    },
    {
        question: "How do you say 'cat' in Spanish?",
        answers: [
            { text: "perro", correct: false },
            { text: "gato", correct: true },
            { text: "caballo", correct: false },
            { text: "pájaro", correct: false }
        ]
    },
    {
        question: "What is the Spanish word for 'house'?",
        answers: [
            { text: "edificio", correct: false },
            { text: "apartamento", correct: false },
            { text: "casa", correct: true },
            { text: "mansión", correct: false }
        ]
    },
    {
        question: "How do you say 'red' in Spanish?",
        answers: [
            { text: "azul", correct: false },
            { text: "verde", correct: false },
            { text: "rojo", correct: true },
            { text: "amarillo", correct: false }
        ]
    },
    {
        question: "What does 'comida' mean in English?",
        answers: [
            { text: "food", correct: true },
            { text: "drink", correct: false },
            { text: "dessert", correct: false },
            { text: "fruit", correct: false }
        ]
    },
    {
        question: "What is the Spanish word for 'mountain'?",
        answers: [
            { text: "playa", correct: false },
            { text: "valle", correct: false },
            { text: "montaña", correct: true },
            { text: "colina", correct: false }
        ]
    },
    {
        question: "How do you say 'chair' in Spanish?",
        answers: [
            { text: "mesa", correct: false },
            { text: "silla", correct: true },
            { text: "sofá", correct: false },
            { text: "cama", correct: false }
        ]
    },
    {
        question: "What is the Spanish word for 'father'?",
        answers: [
            { text: "abuelo", correct: false },
            { text: "hermano", correct: false },
            { text: "padre", correct: true },
            { text: "tío", correct: false }
        ]
    },
    {
        question: "What does 'escuela' mean in English?",
        answers: [
            { text: "school", correct: true },
            { text: "park", correct: false },
            { text: "library", correct: false },
            { text: "museum", correct: false }
        ]
    },
    {
        question: "How do you say 'summer' in Spanish?",
        answers: [
            { text: "invierno", correct: false },
            { text: "primavera", correct: false },
            { text: "verano", correct: true },
            { text: "otoño", correct: false }
        ]
    },
    {
        question: "What is the Spanish word for 'doctor'?",
        answers: [
            { text: "ingeniero", correct: false },
            { text: "arquitecto", correct: false },
            { text: "médico", correct: true },
            { text: "abogado", correct: false }
        ]
    },
    {
        question: "What does 'casa' mean in English?",
        answers: [
            { text: "house", correct: true },
            { text: "apartment", correct: false },
            { text: "mansion", correct: false },
            { text: "condo", correct: false }
        ]
    },
    {
        question: "How do you say 'bathroom' in Spanish?",
        answers: [
            { text: "dormitorio", correct: false },
            { text: "cocina", correct: false },
            { text: "baño", correct: true },
            { text: "sala", correct: false }
        ]
    }
];
const questionEL = document.getElementById("question");
const answerButtonsEL = document.getElementById("answer-buttons");
const nextBtnEL = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextBtnEL.innerHTML = "Next";
    showQuestion();
}
function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionEL.innerHTML = `Question ${questionNo} of ${questions.length}: ${currentQuestion.question}`;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtonsEL.appendChild(button);

        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextBtnEL.style.visibility = "hidden";
    while (answerButtonsEL.firstChild) {
        answerButtonsEL.removeChild(answerButtonsEL.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtonsEL.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextBtnEL.style.visibility = "visible";
}

function showScore() {
    resetState();
    questionEL.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextBtnEL.innerHTML = "Play Again";
    nextBtnEL.style.visibility = "visible";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextBtnEL.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();

// JS for vocab.html Flashcard game

// Variables
let currentCard = 1;
let totalCards = 50;

// Flashcards Array
let flashcards = [
    { question: 'Hello', answer: 'Hola (OH-lah)' },
    { question: 'Goodbye', answer: 'Adiós (ah-DYOHSS)' },
    { question: 'Yes', answer: 'Sí (see)' },
    { question: 'No', answer: 'No (noh)' },
    { question: 'Please', answer: 'Por favor (por fah-VOR)' },
    { question: 'Thank you', answer: 'Gracias (GRAH-syahs)' },
    { question: 'Sorry', answer: 'Lo siento (loh SYEHN-toh)' },
    { question: 'Excuse me', answer: 'Perdón (pehr-DOHN)' },
    { question: 'Help', answer: 'Ayuda (ah-YOO-dah)' },
    { question: 'Friend', answer: 'Amigo/a (ah-MEE-goh/ah)' },
    { question: 'Family', answer: 'Familia (fah-MEE-lyah)' },
    { question: 'Love', answer: 'Amor (ah-MOHR)' },
    { question: 'Home', answer: 'Hogar (oh-GAHR)' },
    { question: 'Water', answer: 'Agua (AH-gwah)' },
    { question: 'Food', answer: 'Comida (koh-MEE-dah)' },
    { question: 'Drink', answer: 'Bebida (beh-BEE-dah)' },
    { question: 'Eat', answer: 'Comer (koh-MEHR)' },
    { question: 'Sleep', answer: 'Dormir (dohr-MEER)' },
    { question: 'Wake up', answer: 'Despertar (dehs-pehr-TAHR)' },
    { question: 'Go', answer: 'Ir (eer)' },
    { question: 'Come', answer: 'Venir (veh-NEER)' },
    { question: 'Stop', answer: 'Detener (deh-teh-NEHR)' },
    { question: 'Start', answer: 'Empezar (em-peh-SAR)' },
    { question: 'Finish', answer: 'Terminar (tehr-mee-NAHR)' },
    { question: 'Big', answer: 'Grande (GRAHN-deh)' },
    { question: 'Small', answer: 'Pequeño/a (peh-KEH-nyoh/nyah)' },
    { question: 'Hot', answer: 'Caliente (kah-LYEHN-teh)' },
    { question: 'Cold', answer: 'Frío (FREE-oh)' },
    { question: 'Good', answer: 'Bueno/a (BWEH-noh/nah)' },
    { question: 'Bad', answer: 'Malo/a (MAH-loh/lah)' },
    { question: 'Right', answer: 'Derecho (deh-REH-choh)' },
    { question: 'Left', answer: 'Izquierda (ees-KYER-dah)' },
    { question: 'Up', answer: 'Arriba (ah-REE-bah)' },
    { question: 'Down', answer: 'Abajo (ah-BAH-hoh)' },
    { question: 'Happy', answer: 'Feliz (feh-LEES)' },
    { question: 'Sad', answer: 'Triste (TREE-steh)' },
    { question: 'Angry', answer: 'Enojado/a (eh-noh-HAH-doh/dah)' },
    { question: 'Beautiful', answer: 'Hermoso/a (ehr-MOH-soh/sah)' },
    { question: 'Ugly', answer: 'Feo/a (FEH-oh/ah)' },
    { question: 'Funny', answer: 'Divertido/a (dee-vehr-TEE-doh/dah)' },
    { question: 'Serious', answer: 'Serio/a (SEH-ryo/ah)' },
    { question: 'Easy', answer: 'Fácil (FAH-seel)' },
    { question: 'Difficult', answer: 'Difícil (dee-FEE-seel)' },
    { question: 'Open', answer: 'Abierto/a (ah-BYEHR-toh/ah)' },
    { question: 'Closed', answer: 'Cerrado/a (sehr-RAH-doh/dah)' },
    { question: 'Day', answer: 'Día (DEE-ah)' },
    { question: 'Night', answer: 'Noche (NOH-cheh)' },
    { question: 'Sun', answer: 'Sol (sohl)' },
    { question: 'Moon', answer: 'Luna (LOO-nah)' },
    { question: 'Sky', answer: 'Cielo (syeh-loh)' }
];

// The flipCard function
function flipCard() {
    document.querySelector('.card').classList.toggle('flipped');
}

/*
The showNextCard Function - the showNextCard function increments the currentCard variable by 1 
if it is less than totalCards. Then it calls the updateFlashcard function which updates the
displayed flashcard and also removes the 'flipped' class from the flashcard element.
*/
function showNextCard() {
    if (currentCard < totalCards) {
        currentCard++;
        updateFlashcard();
        document.querySelector('.card').classList.remove('flipped');
    }
}

/*
The showPreviousCard Function - the showPreviousCard Function is similar to the showNextCardFunction. It 
decrements the currentCard variable by 1 if it is greater than 1. Then it calls the updateFlashcard function
which updates the displayed flashcard and then removes the 'flipped' class from the flashcard element.
*/
function showPreviousCard() {
    if (currentCard > 1) {
        currentCard--;
        updateFlashcard();
        document.querySelector('.card').classList.remove('flipped');
    }
}

/*
The updateFlashcard Function - the updateFlashcard Function is a function that updates the displayed
flashcard using the currentCard variable. It retrieves the card number element, question element, and
answer element from the HTML using IDs. Then it updates the text content of the elements with the
corresponding values from the flashcards array.
*/
function updateFlashcard() {
    let cardNumberElement = document.getElementById('cardNumber');

    // Update the card number and text based on the current flashcard
    cardNumberElement.innerText = `${currentCard}/${totalCards}`;
    document.getElementById('questionText').innerText = flashcards[currentCard - 1].question;
    document.getElementById('answerText').innerText = flashcards[currentCard - 1].answer;
}

/*
The showRandomCard Function - the showRandomCard function is a function that generates a random
number between 1 and 'totalCards' using Math.random() and Math.floor(). It then assigns the
generated random number to the 'currentCard' variable. Finally, it then calls the 'updateFlashcard'
function which updates the displayed flashcard and removes the 'flipped' class from the flashcard element.
*/
function showRandomCard() {
    let randomCard = Math.floor(Math.random() * totalCards) + 1;
    currentCard = randomCard;
    updateFlashcard();
    document.querySelector('.card').classList.remove('flipped');
}