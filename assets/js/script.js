// JS for vocab.html Flashcard game

// Variables
let currentCard = 1;
let totalCards = 50;

// Flashcards Array
let flashcards = [
    { question: 'Hello', answer: 'Hola' },
    { question: 'Goodbye', answer: 'Adiós' },
    { question: 'Yes', answer: 'Sí' },
    { question: 'No', answer: 'No' },
    { question: 'Please', answer: 'Por favor' },
    { question: 'Thank you', answer: 'Gracias' },
    { question: 'Sorry', answer: 'Lo siento' },
    { question: 'Excuse me', answer: 'Perdón' },
    { question: 'Help', answer: 'Ayuda' },
    { question: 'Friend', answer: 'Amigo/a' },
    { question: 'Family', answer: 'Familia' },
    { question: 'Love', answer: 'Amor' },
    { question: 'Home', answer: 'Hogar' },
    { question: 'Water', answer: 'Agua' },
    { question: 'Food', answer: 'Comida' },
    { question: 'Drink', answer: 'Bebida' },
    { question: 'Eat', answer: 'Comer' },
    { question: 'Sleep', answer: 'Dormir' },
    { question: 'Wake up', answer: 'Despertar' },
    { question: 'Go', answer: 'Ir' },
    { question: 'Come', answer: 'Venir' },
    { question: 'Stop', answer: 'Detener' },
    { question: 'Start', answer: 'Empezar' },
    { question: 'Finish', answer: 'Terminar' },
    { question: 'Big', answer: 'Grande' },
    { question: 'Small', answer: 'Pequeño/a' },
    { question: 'Hot', answer: 'Caliente' },
    { question: 'Cold', answer: 'Frío' },
    { question: 'Good', answer: 'Bueno/a' },
    { question: 'Bad', answer: 'Malo/a' },
    { question: 'Right', answer: 'Derecho' },
    { question: 'Left', answer: 'Izquierda' },
    { question: 'Up', answer: 'Arriba' },
    { question: 'Down', answer: 'Abajo' },
    { question: 'Happy', answer: 'Feliz' },
    { question: 'Sad', answer: 'Triste' },
    { question: 'Angry', answer: 'Enojado/a' },
    { question: 'Beautiful', answer: 'Hermoso/a' },
    { question: 'Ugly', answer: 'Feo/a' },
    { question: 'Funny', answer: 'Divertido/a' },
    { question: 'Serious', answer: 'Serio/a' },
    { question: 'Easy', answer: 'Fácil' },
    { question: 'Difficult', answer: 'Difícil' },
    { question: 'Open', answer: 'Abierto/a' },
    { question: 'Closed', answer: 'Cerrado/a' },
    { question: 'Day', answer: 'Día' },
    { question: 'Night', answer: 'Noche' },
    { question: 'Sun', answer: 'Sol' },
    { question: 'Moon', answer: 'Luna' },
    { question: 'Sky', answer: 'Cielo' }
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