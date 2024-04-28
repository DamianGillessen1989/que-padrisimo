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