const userCardOne = document.querySelector("#userCardOne")
const userCardTwo = document.querySelector("#userCardTwo")
const dealerCardOne = document.querySelector("#dealerCardOne")
const dealerCardTwo = document.querySelector("#dealerCardTwo")
const hitBtn = document.querySelector("#hit")
const standBtn = document.querySelector('#stand')
const userCardsDiv = document.querySelector('.userCards')
const dealersCardsDiv = document.querySelector('.dealerCards')
const winOrLosePtag = document.querySelector('#winOrLose')
const usersHand = document.querySelector('#usersHand')
const dealersHand = document.querySelector('#dealersHand')

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
      addNewCard()
      sum+= parseInt(cardList[i])
      console.log(sum)
      if (sum >21){
        console.log("you busted")
        dealersTurn()
      }
      else if(sum == 21){
        console.log("you hit blackjack ahh!")
        dealersTurn()
      }
    }
    //else if(sum == 21){
     //   console.log("You win")
        
    }
    //else{ 
     //   dealersTurn()
    //    console.log("you busted")}



//adds another card on the table
function addNewCard(){
    const newCard = document.createElement("p")

    userCardsDiv.appendChild(newCard)
    newCard.innerHTML = shuffleCards()
    cardList.push(newCard.innerHTML)
    if(newCard.innerHTML == 2){
        const img = document.createElement("img")
           img.setAttribute('src','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlOsOL0yLou1xciyT5YQ7amBOozjD2hTjlbQ&usqp=CAU')
            userCardsDiv.append(img)
       }
       else if(newCard.innerHTML == 3){
        const img = document.createElement("img")
           img.setAttribute('src','data:image/jpeg;base64,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')
            userCardsDiv.append(img)
       }
       
    
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
       break
    }
    else if(sum > 21){
       console.log("Dealer Busted")
        
      break
   }
    else{
      console.log("this is where we are at " + sum)
    }
   }
  setTimeout(whoIsWinner, 2000)
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
    if (userSum > dealerSum && userSum < 21){
    console.log("yay you win!")
    dealersHand.innerHTML = `Dealer's cards: ${dealerSum}`
    usersHand.innerHTML = `You have ${userSum}`
    winOrLosePtag.innerHTML = "yay you win!"}
    else if( dealerSum > userSum && dealerSum < 21){
        console.log("you lose")
        dealersHand.innerHTML = `Dealer has ${dealerSum}`
        usersHand.innerHTML = `You have ${userSum}`
        winOrLosePtag.innerHTML = "you lose"
    }
    else if(userSum == dealerSum && userSum <= 21){
        console.log("it's a tie")
        dealersHand.innerHTML = `Dealer has ${dealerSum}`
        usersHand.innerHTML = `You have ${userSum}`
        winOrLosePtag.innerHTML = "it's a tie"
    }
    else if(userSum >21){
        console.log("Dealer Wins")
        dealersHand.innerHTML = `Dealer has ${dealerSum}`
        usersHand.innerHTML = `You have ${userSum}`
        winOrLosePtag.innerHTML = "Dealer Wins"
    }
    else if(dealerSum >21){
        console.log("User wins")
        dealersHand.innerHTML = `Dealer has ${dealerSum}`
        usersHand.innerHTML = `You have ${userSum}`
        winOrLosePtag.innerHTML = "You win!"
    }
    else if(userSum == 21) {
        console.log("You hit Blackjack! You win!")
        dealersHand.innerHTML = `Dealer has ${dealerSum}`
        usersHand.innerHTML = `You have ${userSum}`
        winOrLosePtag.innerHTML = "You hit Blackjack! You win!"
    }
}





gamePlay()
const cardList = [userCardOne.innerHTML, userCardTwo.innerHTML]
const dealersCardList = [dealerCardOne.innerHTML, dealerCardTwo.innerHTML]

function imgCard(){
    numList = [1, 2, 3, 4, 5, 6,7,8, 9, 10]
    for(i = 0; i < dealersCardList.length; i++){
        //for (j = 0; j< numList.length; j++){
            if(dealersCardList[i] == 2){
               const img = document.createElement("img")
               img.setAttribute('src','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlOsOL0yLou1xciyT5YQ7amBOozjD2hTjlbQ&usqp=CAU')
                UsersCardsDiv.append(img)
            }
       // }
    }
}



hitBtn.addEventListener("click", checkingValues)
standBtn.addEventListener("click", dealersTurn )
