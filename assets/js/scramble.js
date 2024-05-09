// JS for scramble.html Word Scramble game

const task = document.querySelector('#task');
const msg = document.querySelector('#msg');
const input = document.querySelector('#input');
const nxtBtn = document.querySelector('#nxtBtn');
const checkBtn = document.querySelector('#checkBtn');
const score = document.querySelector('#score');
const attempted = document.querySelector('#attempted');
const corrects = document.querySelector('#corrects');
const hint = document.querySelector('#hint');
const quitBtn = document.querySelector('#quitBtnTwo');

const wordBank = [
    {
        word: "casa",
        hint: "A place where you live"
    },
    {
        word: "perro",
        hint: "A furry animal that barks"
    },
    {
        word: "sol",
        hint: "A bright celestial body in the sky"
    },
    {
        word: "comida",
        hint: "Something you eat"
    },
    {
        word: "agua",
        hint: "A transparent liquid that you drink"
    },
    {
        word: "libro",
        hint: "Contains stories or information"
    },
    {
        word: "amigo",
        hint: "A person you enjoy spending time with"
    },
    {
        word: "tiempo",
        hint: "What you measure with a clock"
    },
    {
        word: "juego",
        hint: "Activity for entertainment or fun"
    },
    {
        word: "mesa",
        hint: "Furniture for placing things on"
    },
    {
        word: "gato",
        hint: "A small, domesticated feline animal"
    },
    {
        word: "musica",
        hint: "Sounds that you enjoy listening to"
    },
    {
        word: "ropa",
        hint: "Clothes that you wear"
    },
    {
        word: "trabajo",
        hint: "Activity done to earn money"
    },
    {
        word: "cama",
        hint: "Furniture for sleeping on"
    },
    {
        word: "pelota",
        hint: "Round object used in games"
    },
    {
        word: "escuela",
        hint: "Place where you learn"
    },
    {
        word: "verde",
        hint: "Color of grass"
    },
    {
        word: "jardin",
        hint: "Area with plants and flowers"
    },
    {
        word: "manzana",
        hint: "A fruit that is often red or green"
    },
    {
        word: "bueno",
        hint: "Opposite of bad"
    },
    {
        word: "feliz",
        hint: "Feeling joyful and content"
    },
    {
        word: "viaje",
        hint: "Journey from one place to another"
    },
    {
        word: "papel",
        hint: "Material you write on"
    }
]

let nWord;
let att = 0
let scr = 0

const createWords = () => {
    if (wordBank.length === 0) {
        return null;
    }
    let randomIndex = Math.floor(Math.random() * wordBank.length);
    let selectedWord = wordBank[randomIndex];
    wordBank.splice(randomIndex, 1);
    return selectedWord;
}

const scramble = (word) => {
    let sWordArr = word.split('').sort()
    return sWordArr.join('')
}

nxtBtn.addEventListener('click', () => {
    msg.classList.add('hidden');
    nxtBtn.classList.add('hidden');
    nxtBtn.innerHTML = 'Next word';
    quitBtn.classList.remove('hiddenTwo');
    checkBtn.classList.remove('hidden');
    task.classList.remove('hidden');
    input.value = '';
    input.classList.remove('hidden');
    hint.classList.remove('hidden');
    const { word, hint: wordHint } = createWords();
    nWord = word;
    let sWord = scramble(word);
    console.log(nWord, sWord);
    task.innerHTML = sWord;
    hint.innerHTML = wordHint;
    input.focus();

    const content = document.querySelector('.content');
    content.style.height = '93%';
    content.style.marginTop = '6rem';

    const con = document.querySelector('.con');
    con.style.height = '25.5rem';

    nxtBtn.style.borderRadius = '5px';
    nxtBtn.style.cursor = 'pointer';
    nxtBtn.style.padding = '0.5rem 0.6rem';
    nxtBtn.style.border = '1px solid #f0f0f0';
    nxtBtn.style.opacity = '0.8';
    nxtBtn.style.backgroundColor = '#f0f0f0';
    nxtBtn.style.color = '#1e3050';
    nxtBtn.style.position = 'relative';
    nxtBtn.style.left = '3rem';
    nxtBtn.style.bottom = '-5rem';

    const scrambleHeader = document.querySelector('.scramble-header');
    scrambleHeader.style.display = 'none';

    const scoreElement = document.querySelector('#score');
    scoreElement.style.display = 'flex';

    if (nxtBtn.classList.contains('bordered')) {
        nxtBtn.classList.remove('bordered');
    } else {
        nxtBtn.classList.add('bordered');
    }
});

let enterPressed = false;

checkBtn.addEventListener('click', () => {
    if (enterPressed) {
        return;
    }

    checkAnswer();
});

const handleEnterKeyPress = (event) => {
    if (event.key === 'Enter' && !enterPressed) {
        checkAnswer();
        enterPressed = true;
    } else if (event.key === 'Enter' && enterPressed) {
        event.preventDefault();
    }
};

document.addEventListener('keypress', handleEnterKeyPress);

const checkAnswer = () => {
    att += 1;
    msg.classList.remove('hidden');
    if (input.value.toLowerCase() === nWord.toLowerCase()) {
        scr += 1;
        msg.innerHTML = 'Correct answer 😁';
        msg.style.color = 'rgb(194, 238, 0)';
    } else if (input.value === '') {
        msg.innerHTML = `Answer is <span>${nWord}</span>`;
        msg.style.color = 'red';
    } else {
        msg.innerHTML = `Wrong answer 😑<br>correct answer is <span>${nWord}</span>`;
        msg.style.color = 'red';
    }
    checkBtn.classList.add('hidden');
    nxtBtn.classList.remove('hidden');
    attempted.innerHTML = att;
    corrects.innerHTML = scr;
};

nxtBtn.addEventListener('click', () => {
    enterPressed = false;
});

quitBtn.addEventListener('click', () => {
    location.reload();
});