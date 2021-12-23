/*
let swQuote = document.querySelector('.starWars')
let tfQuote = document.querySelector('.transformers')
let bmQuoteOne = document.querySelector('.batmanOne')
let spiderman = document.querySelector('.spiderman')
let bmQuoteTwo = document.querySelector('.batmanTwo')
let stQuote = document.querySelector('.starTrek')
let avQuoteOne = document.querySelector('.avengersOne')
let bmQuoteThree = document.querySelector('.batmanThree')
let avQuoteTwo = document.querySelector('.avengersTwo')
let pokeQuote = document.querySelector('.pokemon')


function movie(answerText, name, hintText){
    event.preventDefault()
    let answer = prompt(answerText)
    
    
    if ( answer && answer.toLowerCase() === name){
        document.querySelector('.correct').innerText = "Correct: " + ++correct
    }
    else if (answer !== name){
        let hint = prompt(hintText)

        if (hint && hint.toLowerCase() === name){
            document.querySelector('.correct').innerText = "Correct: " + ++correct
        }
        else {
            alert("Incorrect!")
            document.querySelector('.incorrect').innerText = "Incorrect: " + ++incorrect
        }
    }
    
}

swQuote.addEventListener('click', movie.bind(null, "Do. Or do Not. There is no try", "yoda", "Hint: Green"))

tfQuote.addEventListener('click', movie.bind(null, "give me the cube boy", "megatron", "Hint: Decepticon"))

bmQuoteOne.addEventListener('click', movie.bind(null, "I was wondering what would break first -- Your spirit, or your Body", "bane", "Hint: Wears a mask"))

spiderman.addEventListener('click', movie.bind(null, "finish it, FINISH IT!", "green goblin", "Hint: Was in the first spiderman movie"))

bmQuoteTwo.addEventListener('click', movie.bind(null, "You either die a hero or you live long enough to see yourself become the villain.", "harvey dent", "Hint: Two Face"))

stQuote.addEventListener('click', movie.bind(null, "KHANNNNN", "james t kirk", "Hint: Commander"))

avQuoteOne.addEventListener('click', movie.bind(null, "You should have gone for the head", "thanos", "Hint: Wears the gauntlet"))

bmQuoteThree.addEventListener('click', movie.bind(null, 'Nobody panics when things go "according to plan". Even if the plan is horrifying', "joker", "Hint: Purple suit"))

avQuoteTwo.addEventListener('click', movie.bind(null, "You people are so petty. And Tiny", "thor", "Hint: Lightening"))

pokeQuote.addEventListener('click', movie.bind(null, "I was made from you. But I am the stronger one... I am the true one.", "mewtwo", "Hint: Descendent of Mew"))*/

let correct = 0
let incorrect = 0
let openBtn = document.getElementsByClassName('movieModal')
let openArray = Array.from(openBtn).entries()
let modals = document.getElementsByClassName('modal')
let close = document.getElementsByClassName('close')
let swEnter = document.getElementById('swEnterButton')
let transformEnter = document.getElementById('transformEnterButton')
let batOneEnter = document.getElementById('batmanOneEnterButton')
let spidermanEnter = document.getElementById('spidermanEnterButton')
let stEnter = document.getElementById('stEnterButton')
let bmTwoEnter = document.getElementById('bmTwoEnterButton')
let avOneEnter = document.getElementById('avengersOneEnterButton')
let avTwoEnter = document.getElementById('avengersTwoEnterButton')
let pokeEnter = document.getElementById('pokemonEnterButton')
let bmThreeEnter = document.getElementById('bmThreeEnterButton')


for(let [index, movieModal] of openArray){
    let toggleModal = () => {
        modals[index].classList.toggle("show-modal")
    }

    movieModal.addEventListener('click', toggleModal)
    close[index].addEventListener('click', toggleModal)
}
/*const openModal = () => {
    modal.style.display = 'block'
    
}*/

function quoteInput(indexOfAnswer, nameInput){
    event.preventDefault()
    console.log(modals)
    let answer = document.getElementsByClassName('answer')[indexOfAnswer].value
    if ( answer && answer.toLowerCase() === nameInput){
        console.log(answer)
        alert("Correct!")
        document.getElementById('correct').innerText = "Correct: " + ++correct
        modals[indexOfAnswer].style.display = 'none'
    }else {
        
        alert("Incorrect!")
        document.querySelector('#incorrect').innerText = "Incorrect: " + ++incorrect
        modals[indexOfAnswer].style.display = 'none'
        }
}


/*const closeModal = () => {
    modal.style.display = 'none'
}

openBtn.addEventListener('click', openModal)
close.addEventListener('click', closeModal)*/
swEnter.addEventListener('click', quoteInput.bind(null, 0, "yoda"))
transformEnter.addEventListener('click', quoteInput.bind(null, 1, "megatron"))
batOneEnter.addEventListener('click', quoteInput.bind(null, 2, "bane"))
spidermanEnter.addEventListener('click', quoteInput.bind(null, 3, "green goblin"))
stEnter.addEventListener('click', quoteInput.bind(null, 4, "james t kirk"))
bmTwoEnter.addEventListener('click', quoteInput.bind(null, 5, "harvey dent"))
avOneEnter.addEventListener('click', quoteInput.bind(null, 6, "thanos"))
avTwoEnter.addEventListener('click', quoteInput.bind(null, 7, "thor"))
pokeEnter.addEventListener('click', quoteInput.bind(null, 8, "mewtwo"))
bmThreeEnter.addEventListener('click', quoteInput.bind(null, 9, "joker"))