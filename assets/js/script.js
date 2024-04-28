// JS for index.html Quiz game

const questions = [
    {
        question: "Necesito el ____ para cocinar la cena. (Choose the correct word below)",
        answers: [
            { text: "sombrero", correct: false },
            { text: "mochilla", correct: false },
            { text: "olla", correct: true },
            { text: "llave", correct: false }
        ]
    },
    {
        question: "La profesora nos explicó la lección ____. (Choose the correct word below)",
        answers: [
            { text: "azul", correct: false },
            { text: "importante", correct: true },
            { text: "dulce", correct: false },
            { text: "padre", correct: false }
        ]
    },
    {
        question: "El perro corre ____ en el parque. (Choose the correct word below)",
        answers: [
            { text: "lento", correct: false },
            { text: "triste", correct: false },
            { text: "feliz", correct: false },
            { text: "libre", correct: true }
        ]
    },
    {
        question: "Voy a comprar ____ para hacer una torta. (Choose the correct word below)",
        answers: [
            { text: "harina", correct: true },
            { text: "azúcar", correct: false },
            { text: "huevos", correct: false },
            { text: "leche", correct: false }
        ]
    },
    {
        question: "¿Puedes abrir la ____ por favor? (Choose the correct word below)",
        answers: [
            { text: "puerta", correct: true },
            { text: "muro", correct: false },
            { text: "burro", correct: false },
            { text: "almohada", correct: false }
        ]
    },
    {
        question: "Mi hermana necesita un ____ para leer. (Choose the correct word below)",
        answers: [
            { text: "libro", correct: true },
            { text: "lápiz", correct: false },
            { text: "cuaderno", correct: false },
            { text: "computadora", correct: false }
        ]
    },
    {
        question: "Quiero comprar una camisa ____ para la fiesta. (Choose the correct word below)",
        answers: [
            { text: "formal", correct: true },
            { text: "cómoda", correct: false },
            { text: "colorida", correct: false },
            { text: "deportiva", correct: false }
        ]
    },
    {
        question: "Mi abuela hace el mejor ____ del mundo. (Choose the correct word below)",
        answers: [
            { text: "refresco", correct: false },
            { text: "pastel", correct: true },
            { text: "mescal", correct: false },
            { text: "michelada", correct: false }
        ]
    },
    {
        question: "Hoy vamos a la ____ para ver una película. (Choose the correct word below)",
        answers: [
            { text: "cine", correct: true },
            { text: "teatro", correct: false },
            { text: "biblioteca", correct: false },
            { text: "parque", correct: false }
        ]
    },
    {
        question: "Me encanta el ____ de las flores en primavera. (Choose the correct word below)",
        answers: [
            { text: "olor", correct: true },
            { text: "color", correct: false },
            { text: "tamaño", correct: false },
            { text: "forma", correct: false }
        ]
    },
    {
        question: "Voy a comprar ____ para pintar mi casa. (Choose the correct word below)",
        answers: [
            { text: "papel", correct: false },
            { text: "pincel", correct: true },
            { text: "piedra", correct: false },
            { text: "piso", correct: false }
        ]
    },
    {
        question: "Mi hermano es muy ____ y siempre ayuda a los demás. (Choose the correct word below)",
        answers: [
            { text: "gracioso", correct: false },
            { text: "amable", correct: true },
            { text: "inteligente", correct: false },
            { text: "trabajador", correct: false }
        ]
    },
    {
        question: "Quiero comprar un regalo ____ para mi mamá. (Choose the correct word below)",
        answers: [
            { text: "especial", correct: true },
            { text: "barato", correct: false },
            { text: "maloliente", correct: false },
            { text: "antigua", correct: false }
        ]
    },
    {
        question: "El ____ está en la mesa junto a las llaves. (Choose the correct word below)",
        answers: [
            { text: "periódico", correct: false },
            { text: "teléfono", correct: false },
            { text: "dinero", correct: true },
            { text: "libro", correct: false }
        ]
    },
    {
        question: "Mi abuela cocina la mejor ____ de pollo del mundo. (Choose the correct word below)",
        answers: [
            { text: "ensalada", correct: false },
            { text: "sopa", correct: true },
            { text: "carne", correct: false },
            { text: "congelado", correct: false }
        ]
    },
    {
        question: "Mi hermana mayor va a ____ el colegio este año. (Choose the correct word below)",
        answers: [
            { text: "empezar", correct: true },
            { text: "terminar", correct: false },
            { text: "estudiar", correct: false },
            { text: "visitar", correct: false }
        ]
    },
    {
        question: "Vamos a ____ en el parque este fin de semana. (Choose the correct word below)",
        answers: [
            { text: "jugar", correct: false },
            { text: "picnic", correct: true },
            { text: "correr", correct: false },
            { text: "nadar", correct: false }
        ]
    },
    {
        question: "¿Dónde está el ____ de mi bicicleta? (Choose the correct word below)",
        answers: [
            { text: "llave", correct: false },
            { text: "rueda", correct: true },
            { text: "manillar", correct: false },
            { text: "asiento", correct: false }
        ]
    },
    {
        question: "Mi hermano tiene un ____ nuevo para hacer llamadas. (Choose the correct word below)",
        answers: [
            { text: "jugador", correct: false },
            { text: "teléfono", correct: true },
            { text: "computadora", correct: false },
            { text: "libro", correct: false }
        ]
    },
    {
        question: "Voy a la tienda a comprar ____ para hacer una ensalada. (Choose the correct word below)",
        answers: [
            { text: "lechuga", correct: true },
            { text: "carne", correct: false },
            { text: "pan", correct: false },
            { text: "helado", correct: false }
        ]
    }
];

const questionEL = document.getElementById("question");
const answerButtonsEL = document.getElementById("answer-buttons");
const nextBtnEL = document.getElementById("next-btn");
const quitBtnEL = document.getElementById("quit-btn");

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

quitBtnEL.addEventListener("click", () => { 
    startQuiz(); 
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