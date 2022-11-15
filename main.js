const gameOn = true;
const userCardOne = document.querySelector("#userCardOne")
const userCardTwo = document.querySelector("#userCardTwo")
const dealerCardOne = document.querySelector("#dealerCardOne")
const dealerCardTwo = document.querySelector("#dealerCardTwo")
const hitBtn = document.querySelector("#hit")
const standBtn = document.querySelector('#stand')
const userCardsDiv = document.querySelector('.userCards')



function shuffleCards(){
    const num = Math.floor(Math.random() * (11 - 1) + 1)
    return num 
}

function gamePlay(){
    userCardOne.innerHTML = shuffleCards()
    userCardTwo.innerHTML = shuffleCards()
    dealerCardOne.innerHTML = shuffleCards()
    dealerCardTwo.innerHTML = shuffleCards()
    dealerCardTwo.style.display = "none"
}



function chooseBtns(){
    let sum = 0
    sum = parseInt(userCardOne.innerHTML) + parseInt(userCardTwo.innerHTML) 
    if(sum < 21){

    }
    
}
function selectHitBtn(){
    const newCard = document.createElement("p")
    userCardsDiv.appendChild(newCard)
    newCard.innerHTML = shuffleCards()
    console.log(newCard.innerHTML)

}

gamePlay()
chooseBtns()

hitBtn.addEventListener("click", selectHitBtn())