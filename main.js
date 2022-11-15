const userCardOne = document.querySelector("#userCardOne")
const userCardTwo = document.querySelector("#userCardTwo")
const dealerCardOne = document.querySelector("#dealerCardOne")
const dealerCardTwo = document.querySelector("#dealerCardTwo")
const hitBtn = document.querySelector("#hit")
const standBtn = document.querySelector('#stand')
const userCardsDiv = document.querySelector('.userCards')
const dealersCardsDiv = document.querySelector('.dealerCards')

// random value for card(s)
function shuffleCards(){
    const num = Math.floor(Math.random() * (11 - 1) + 1)
    return num 
}

//Events of the game
function gamePlay(){
    const gameOn = true;
    userCardOne.innerHTML = shuffleCards()
    userCardTwo.innerHTML = shuffleCards()
    dealerCardOne.innerHTML = shuffleCards()
    dealerCardTwo.innerHTML = shuffleCards()
    dealerCardTwo.style.display = "none"
}


//checking if users cards is less than, equal, or greater than 21
function checkingValues(){
    let sum = 0
    sum += parseInt(cardList[0])
    console.log(sum)
    for( i = 1; i < cardList.length; i++){
        sum+= parseInt(cardList[i])
        console.log(sum)
    }
    if(sum < 21){
      selectHitBtn()
      
    }
    else if(sum == 21){
        console.log("You win")
    }
    else{ 
        console.log("you lost")}

}
//adds another card on the table
function selectHitBtn(){
    const newCard = document.createElement("p")
    userCardsDiv.appendChild(newCard)
    newCard.innerHTML = shuffleCards()
    cardList.push(newCard.innerHTML)
    
}
//the dealers option to hit or stay
function dealersTurn(){
    dealerCardTwo.style.display = "unset"
    
    console.log(dealersCardList)
    let sum = 0
        sum += parseInt(dealersCardList[0])
    for( i = 1; i < dealersCardList.length; i++){
        sum+= parseInt(dealersCardList[i])
        console.log(sum)
    
    if(sum < 17){
        const dealersNewCard = document.createElement("p")
        dealersCardsDiv.appendChild(dealersNewCard)
        dealersNewCard.innerHTML = shuffleCards()
        dealersCardList.push(dealersNewCard.innerHTML)
        console.log(dealersCardList)
    }
    else if(sum == 21){
        console.log("blackjack")
    }
    else if(sum > 21){
        console.log("Dealer Busted")
        break
    }
    else{
        console.log("this is where we are at " + sum)
    }
    }
    whoIsWinner()
}

function whoIsWinner(){
    let userSum = 0
    let dealerSum = 0
    for (i = 0; i <cardList.length; i++){
        userSum+= parseInt(cardList[i])
    }
    for (i = 0; i <dealersCardList.length; i++){
        dealerSum+= parseInt(dealersCardList[i])
}
    if (userSum > dealerSum && userSum < 21)
    console.log("yay you win!")
    else if( dealerSum > userSum && dealerSum < 21){
        console.log("you lose")
    }
    else if(userSum == dealerSum){
        console.log("it's a tie")
    }
    else if(userSum >21){
        console.log("Dealer Wins")
    }
    else if(dealerSum >21){
        console.log("User wins")

    }
}
gamePlay()
const cardList = [userCardOne.innerHTML, userCardTwo.innerHTML]
const dealersCardList = [dealerCardOne.innerHTML, dealerCardTwo.innerHTML]


hitBtn.addEventListener("click", checkingValues)
standBtn.addEventListener("click", dealersTurn )
