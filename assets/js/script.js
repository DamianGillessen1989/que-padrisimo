// JS for index.html Quiz game

const questions = [
    {
        question: "Necesito la ____ para cocinar la cena. (Choose the correct word below)",
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
            { text: "frio", correct: false },
            { text: "libre", correct: true }
        ]
    },
    {
        question: "Voy a comprar ____ para hacer una torta. (Choose the correct word below)",
        answers: [
            { text: "harina", correct: true },
            { text: "canela", correct: false },
            { text: "cafe", correct: false },
            { text: "miel", correct: false }
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
            { text: "sucio", correct: false },
            { text: "humedo", correct: false },
            { text: "arrugado", correct: false }
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
        question: "Hoy vamos a el ____ para ver una película. (Choose the correct word below)",
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
            { text: "estilo", correct: false },
            { text: "tamaño", correct: false },
            { text: "forma", correct: false }
        ]
    },
    {
        question: "Voy a comprar un ____ para pintar mi casa. (Choose the correct word below)",
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
        question: "El ____ está en la billetera sobre la mesa. (Choose the correct word below)",
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
const startBtnEL = document.getElementById("start-btn");
const quizContainerEL = document.querySelector(".quiz");

let currentQuestionIndex = 0;
let score = 0;

startBtnEL.addEventListener("click", () => {
    startQuiz();
    quizContainerEL.classList.remove("hidden");
    startBtnEL.style.display = "none";
    document.querySelector('.app').style.height = '97%'; // Adjusting the height of .app class
});

/* The startQuiz Function - The startQuiz function starts the quiz by resetting the current question index
and the score to zero, which then sets up the 'Next' button and shows the first question.
 */
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextBtnEL.innerHTML = "Next";
    showQuestion();
}
quitBtnEL.addEventListener("click", () => {
    quizContainerEL.classList.add("hidden");
    startBtnEL.style.display = "block";
});

/* The showQuestion Function - The showQuestion function displays the current question along with
its possible options. It resets the state of the answer buttons and assigns them event listeners.
*/
function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionEL.innerHTML = `Question ${questionNo} of ${questions.length}: ${currentQuestion.question}`;

    currentQuestion.answers.forEach(answer => {
        let button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtonsEL.appendChild(button);

        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

/* The resetState Function - The resetState function resets the state of the answer buttons by hiding
the 'Next' button and removing all child elements from the answer buttons element.
*/
function resetState() {
    nextBtnEL.style.visibility = "hidden";
    while (answerButtonsEL.firstChild) {
        answerButtonsEL.removeChild(answerButtonsEL.firstChild);
    }
}

/* The selectAnswer Function - The selectAnswer function is called when the user selects an answer.
It checks if the selected answer is correct, updates the score, disables all answer buttons, and shows
the 'Next' button.
*/
function selectAnswer(e) {
    let selectedBtn = e.target;
    let isCorrect = selectedBtn.dataset.correct === "true";
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

/* The showScore Function - The showScore function displays the final score after
the quiz is completed and enables the user to play again.
*/
function showScore() {
    resetState();
    questionEL.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextBtnEL.innerHTML = "Play Again";
    nextBtnEL.style.visibility = "visible";
}

/* The handleNextButton Function - The handleNextBurron function is called when the 'Next'
button is clicked. It checks if there are more questions to display and either shows the 
next question or the final score.
*/
function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

/* Event Listeners - Event listeners are added to the 'Start Quiz', 'Next', and 'Quit' buttons to trigger
the appropriate actions when clicked.
*/
nextBtnEL.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

quitBtnEL.addEventListener("click", () => {
    quizContainerEL.classList.add("hidden");
    startBtnEL.style.display = "block";
    document.querySelector('.app').style.height = '72%'; 
});

startQuiz();