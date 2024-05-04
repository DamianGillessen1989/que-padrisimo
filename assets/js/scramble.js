// GETTING DOM ELEMENTS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const task = document.querySelector('#task')
const msg = document.querySelector('#msg')
const input = document.querySelector('#input')
const Nxtbtn = document.querySelector('#nxtBtn')
const Checkbtn = document.querySelector('#checkBtn')
const score = document.querySelector('#score')
const attempted = document.querySelector('#attempted')
const corrects = document.querySelector('#corrects')
const hint = document.querySelector('#hint'); // Added this line to get the hint element
const quitBtn = document.querySelector('#quitBtnTwo');

// GLOBAL VARIABLES >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
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

// CREATEWORDS FUNCTION (this will take a random word from wordBank)>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const createWords = () => {
    let random = Math.floor(Math.random() * wordBank.length)
    return wordBank[random]
}

// SCRAMBLE FUNCTION (this will scramble the word obtained in parameter and return the scrambled word)>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const scramble = (word) => {
    let sWordArr = word.split('').sort()
    return sWordArr.join('')
}

// ADDING EVENT HANDLER TO BUTTON >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
Nxtbtn.addEventListener('click', () => {
    msg.classList.add('hidden');
    Nxtbtn.classList.add('hidden');
    Nxtbtn.innerHTML = 'Next word';
    quitBtn.classList.remove('hiddenTwo');
    Checkbtn.classList.remove('hidden');
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

    const content = document.querySelector('.content');
    content.style.height = '93%';

    const con = document.querySelector('.con');
    con.style.height = '25.5rem';

    // Change style of the Nxtbtn
    Nxtbtn.style.borderRadius = '5px';
    Nxtbtn.style.cursor = 'pointer';
    Nxtbtn.style.padding = '0.5rem 0.6rem';
    Nxtbtn.style.border = '1px solid #f0f0f0';
    Nxtbtn.style.opacity = '0.8';
    Nxtbtn.style.backgroundColor = '#f0f0f0';
    Nxtbtn.style.color = '#1e3050';
    Nxtbtn.style.position = 'relative';
    Nxtbtn.style.left = '-3rem';
    Nxtbtn.style.bottom = '-5rem';

    // Toggle border-bottom style
    if (Nxtbtn.classList.contains('bordered')) {
        Nxtbtn.classList.remove('bordered');
    } else {
        Nxtbtn.classList.add('bordered');
    }
});


Checkbtn.addEventListener('click', () => {
    att += 1
    msg.classList.remove('hidden')
    if (input.value === nWord) {
        scr += 1
        msg.innerHTML = 'Correct answer 😁'
        msg.style.color = 'rgb(194, 238, 0)'
    } else if (input.value === '') {
        msg.innerHTML = `Answer is <span>${nWord}</span>`
        msg.style.color = 'red'
    } else {
        msg.innerHTML = `Wrong answer 😑<br>correct answer is <span>${nWord}</span>`
        msg.style.color = 'red'
    }
    Checkbtn.classList.add('hidden')
    Nxtbtn.classList.remove('hidden')
    attempted.innerHTML = att
    corrects.innerHTML = scr
})

quitBtn.addEventListener('click', () => {
    location.reload(); // Refresh the page
});

input.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        // Trigger click event on the Check button
        Checkbtn.click();
    }
});