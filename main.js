const userCardsDiv = document.querySelector('.userCards')
const dealersCardsDiv = document.querySelector('.dealerCards')
const userCardOne = document.querySelector("#userCardOne")
const userCardTwo = document.querySelector("#userCardTwo")
const cardList = document.getElementsByClassName("userCard")
const dealersCardList = document.getElementsByClassName("dealersCard")
const hitBtn = document.querySelector("#hit")
const standBtn = document.querySelector('#stand')
const winOrLosePtag = document.querySelector('#winOrLose')
const usersHand = document.querySelector('#usersHand')
const dealersHand = document.querySelector('#dealersHand')

function shuffleCards(){
    const num = Math.floor(Math.random() * (11 - 1) + 1)
    return num
}

function gameplay(){
    UsersCard()
    UsersCard()
    dealersCard()
    dealersSecondCard()
    hitBtn.addEventListener("click", usersTurn)
    standBtn.addEventListener("click", dealersTurn)
}

function UsersCard(){
    const newCard = document.createElement("p")
    userCardsDiv.appendChild(newCard)
    newCard.innerHTML = shuffleCards()
    newCard.classList.add("userCard")
    newCard.style.display = "none"
    if (newCard.innerHTML < 10) {
        const img = document.createElement("img")
        img.setAttribute('src', returnImage(newCard.innerHTML))
        userCardsDiv.append(img)
    } else if (newCard.innerHTML  == 10){
        const number = Math.floor(Math.random() * (3 - 0) + 0)
            if(number == 0){
                const img = document.createElement("img")
                img.setAttribute('src','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu3D86B-U4GBPd4EaIKvRyUW4ZOXvlNLLoBQ&usqp=CAU')
                userCardsDiv.append(img)
            }
            else if( number == 1){
                const img = document.createElement("img")
                img.setAttribute('src','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTicdEMNz1fZM-QTh-KxzIEVuuS_3MO5lZ7XQ&usqp=CAU')
                userCardsDiv.append(img)
            }
            else if(number == 2){
                const img = document.createElement('img')
                img.setAttribute('src','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBjKpPY5scmoO2UjpMstFgsEqu-TRT9jQQRz5K3RqxK1AhpJu_H1BmaPEVnhSpgGvojoI&usqp=CAU')
                userCardsDiv.append(img)
        }
    }
}

function returnImage(cardValue){
    if( cardValue == 1 ){
        return 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Playing_card_club_A.svg/614px-Playing_card_club_A.svg.png'
    }
    else if(cardValue == 2){
        return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlOsOL0yLou1xciyT5YQ7amBOozjD2hTjlbQ&usqp=CAU'   
    }
    else if(cardValue  == 3){
        return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqm0IQ4pDxNuksJG6HA1leldBdf8GCOd05Eg&usqp=CAU'   
    }
    else if(cardValue == 4){
        return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG8up6xUynITvWjfBq28xdiAl2ApUzjC1k1w&usqp=CAU'  
    }
    else if(cardValue  == 5){
        return 'https://www.media4math.com/sites/default/files/library_asset/images/MathClipArt--Playing-Card--The-5-of-Spades.jpg'   
    }
    else if(cardValue  == 6){
        return 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Playing_card_club_6.svg/819px-Playing_card_club_6.svg.png'    
    }
    else if(cardValue  == 7){
        return 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Playing_card_spade_7.svg/1200px-Playing_card_spade_7.svg.png'  
    }
    else if(cardValue == 8){
        return 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Playing_card_heart_8.svg/1200px-Playing_card_heart_8.svg.png'  
    }
    else if(cardValue == 9){
        return 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Playing_card_heart_9.svg/1200px-Playing_card_heart_9.svg.png'
    }       
}
    
function dealersCard(){
    const newCard = document.createElement("p")
    userCardsDiv.appendChild(newCard)
    newCard.innerHTML = shuffleCards()
    newCard.classList.add("dealersCard")
    newCard.style.display = "none"
    if (newCard.innerHTML < 10) {
        const img = document.createElement("img")
        img.setAttribute('src', returnImage(newCard.innerHTML))
        dealersCardsDiv.append(img)
    } else if (newCard.innerHTML  == 10){
        const number = Math.floor(Math.random() * (3 - 0) + 0)
            if(number == 0){
                const img = document.createElement("img")
                img.setAttribute('src','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu3D86B-U4GBPd4EaIKvRyUW4ZOXvlNLLoBQ&usqp=CAU')
                dealersCardsDiv.append(img)
            }
            else if( number == 1){
                const img = document.createElement("img")
                img.setAttribute('src','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTicdEMNz1fZM-QTh-KxzIEVuuS_3MO5lZ7XQ&usqp=CAU')
                dealersCardsDiv.append(img)
            }
            else if(number == 2){
                const img = document.createElement('img')
                img.setAttribute('src','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBjKpPY5scmoO2UjpMstFgsEqu-TRT9jQQRz5K3RqxK1AhpJu_H1BmaPEVnhSpgGvojoI&usqp=CAU')
                dealersCardsDiv.append(img)
        }
    }
}

function dealersSecondCard(){
    newCard = document.createElement("p")
    userCardsDiv.appendChild(newCard)
    newCard.innerHTML = shuffleCards()
    newCard.classList.add("dealersCard")
    newCard.style.display = "none"
    newCard.setAttribute("id", "cardTwoTag")
    const img = document.createElement('img')
    img.setAttribute('src','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpezWVh1wPksIfCr_wEjcwKmIWU53XULGAH-6u4wtu11bHLW2Aeknu3wAY1_4oG_i7omc&usqp=CAU')
    dealersCardsDiv.append(img)
    img.setAttribute("id", "cardTwoImg")
}

function dealersSecondCardFlip(){
    cardTwo = document.getElementById("cardTwoTag")
    document.getElementById("cardTwoImg").style.display='none';
    if (cardTwo.innerHTML  < 10){
        const img2 = document.createElement("img")
        img2.setAttribute('src',returnImage(cardTwo.innerHTML))
        dealersCardsDiv.append(img2)
    } 
    else if (cardTwo.innerHTML  == 10){
        const number = Math.floor(Math.random() * (3 - 0) + 0)
        if(number == 0){
            const img = document.createElement("img")
            img.setAttribute('src','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu3D86B-U4GBPd4EaIKvRyUW4ZOXvlNLLoBQ&usqp=CAU')
            dealersCardsDiv.append(img)
        }
        else if( number == 1){
            const img = document.createElement("img")
            img.setAttribute('src','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTicdEMNz1fZM-QTh-KxzIEVuuS_3MO5lZ7XQ&usqp=CAU')
            dealersCardsDiv.append(img)
        }
        else if(number == 2){
            const img = document.createElement('img')
            img.setAttribute('src','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBjKpPY5scmoO2UjpMstFgsEqu-TRT9jQQRz5K3RqxK1AhpJu_H1BmaPEVnhSpgGvojoI&usqp=CAU')
            dealersCardsDiv.append(img)
        }
    }
}

function usersTurn(){
    let sum = 0
    for( i = 0; i < cardList.length; i++){
        sum+= parseInt(cardList[i].innerHTML)
    }
    if (sum < 21){
        UsersCard()
        sum+= parseInt(cardList[i].innerHTML)
    }
    if (sum > 21){
        whoIsWinner()
    }
    else if(sum == 21){
        dealersTurn()
    }
}

function dealersTurn(){
    dealersSecondCardFlip()
    let sum = 0
    for ( i = 0; i < dealersCardList.length; i++){
        sum+= parseInt(dealersCardList[i].innerHTML)
    }
    while(sum < 17 ){
        dealersCard()
        sum+= parseInt(dealersCardList[dealersCardList.length-1].innerHTML)
        if (sum >= 17){
            whoIsWinner()
        }
    }
    whoIsWinner()
}

function whoIsWinner(){
    let userSum = 0
    let dealerSum = 0
        for (i = 0; i <cardList.length; i++){
            userSum+= parseInt(cardList[i].innerHTML)
    }
    for (i = 0; i <dealersCardList.length; i++){
        dealerSum+= parseInt(dealersCardList[i].innerHTML)
    }
    if (userSum > dealerSum && userSum < 21){
        dealersHand.innerHTML = `Dealer's cards: ${dealerSum}`
        usersHand.innerHTML = `You have ${userSum}`
        winOrLosePtag.innerHTML = "You Win!"}
    else if( dealerSum > userSum && dealerSum <= 21){
        dealersHand.innerHTML = `Dealer has ${dealerSum}`
        usersHand.innerHTML = `You have ${userSum}`
        winOrLosePtag.innerHTML = "You Lose"
    }
    else if(userSum == dealerSum && userSum <= 21){
        dealersHand.innerHTML = `Dealer has ${dealerSum}`
        usersHand.innerHTML = `You have ${userSum}`
        winOrLosePtag.innerHTML = "It's A Tie"
    }
    else if(userSum >21){
        dealersHand.innerHTML = `you busted!`
        usersHand.innerHTML = `You have ${userSum}`
        winOrLosePtag.innerHTML = "Dealer Wins"
    }
    else if(dealerSum >21){
        dealersHand.innerHTML = `Dealer has ${dealerSum}`
        usersHand.innerHTML = `You have ${userSum}`
        winOrLosePtag.innerHTML = "You Win!"
    }
    else if(userSum == 21) {
        dealersHand.innerHTML = `Dealer has ${dealerSum}`
        usersHand.innerHTML = `You have ${userSum}`
        winOrLosePtag.innerHTML = "You Hit Blackjack! You Win!"
    }
}

 gameplay()
 