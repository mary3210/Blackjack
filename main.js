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



function checkingValues(){
    let sum = 0
    
    for( i = 0; i < cardList.length; i++){
        sum+= parseInt(cardList[i])
        console.log(sum)
    }
    if(sum < 21){
      selectHitBtn()
      
    }
    else{ console.log("you lost")}
    
}
function selectHitBtn(){
    const newCard = document.createElement("p")
    userCardsDiv.appendChild(newCard)
    newCard.innerHTML = shuffleCards()
    cardList.push(newCard.innerHTML)
    

}

gamePlay()
const cardList = [userCardOne.innerHTML, userCardTwo.innerHTML]

hitBtn.addEventListener("click", checkingValues)