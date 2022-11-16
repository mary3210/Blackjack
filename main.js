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
    if(newCard.innerHTML == 1){
        const img = document.createElement("img")
           img.setAttribute('src','data:image/png;base64,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')
            userCardsDiv.append(img)
    }
    if(newCard.innerHTML == 2){
        const img = document.createElement("img")
           img.setAttribute('src','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlOsOL0yLou1xciyT5YQ7amBOozjD2hTjlbQ&usqp=CAU')
            userCardsDiv.append(img)
       }
       else if(newCard.innerHTML == 3){
        const img = document.createElement("img")
           img.setAttribute('src','data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMHEBMRFA8SEhYXFhgRGBEXEBwZERgbFxgbGhkXGBceKSoiGR4nHBQUIzgvJysvMDAwGSE2OzY7RjcvMDoBCwsLDw4PGxERGy0nISMwLy8vLzEvLy8vLy8vLy8vLzAyLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL//AABEIAQkAvgMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAAAwUGBAcBAv/EAEAQAAIBAQQGBgcGBQQDAAAAAAABAgMEBQYREiExM0FyFCJRYbGyE1NxgZGToQcVIzJCUoLBwtHxYpLh8CRDVP/EABoBAQADAQEBAAAAAAAAAAAAAAACAwQBBgX/xAAtEQACAQIFAgUEAwEBAAAAAAAAAQIDEQQSITFBUWEFE4Gh0ZGxwfAyceEiFf/aAAwDAQACEQMRAD8A9gtFWU5ejh1cvz1NujnsjFbHJrXr1JZdyP0rHT4wU3+6fWl8WfLLJU6SnJpZp1ZNvJLS6zzfYs8vYj8/edH/AOij86P9zlzqi3siXolP1VP5aHRKfqqfy0fmjbaVd6MK1Ob25Rmm/gjoFw01uQ9Ep+qp/LQ6JT9VT+WiYHThD0Sn6qn8tDolP1VP5aJgAQ9Ep+qp/LQ6JT9VT+WiYAEPRKfqqfy0OiU/VU/lomABD0Sn6qn8tDolP1VP5aJgAQ9Ep+qp/LQ6JT9VT+WiYAEPRKfqqfy0OiU/VU/lomABD0Sn6qn8tDolP1VP5aJgAQ9Ep+qp/LQ6JT9VT+WiYAHNKyqGum/RP/Sup/FDY/o+8lsld1c1JaM46pR4dzT4p8PeuDJCvvOr0TRqLbrptduetfDJ/wC5gH2pZVbrL6JvR06ShpZa1pQSzMtfN02G4qUVOm6tVpJR05KU3+5pPqrM2Ni3VPkj5UVVtwrZ7dUnUqKpOU8ttTVFJZZRy4bdvaVzjdaLU2YSuqbtKUlHdqPL+q0ODB+G3drdep1akk0qafVhGWTy45vUvYaszFwKd0WudilUlUpun6ajKX5ks8nHP4/A052nZKyI42U5Vc05Xuk0+3GnFv1sAAmZQAAAAfirVVGLlJpJLSbexJcQD9gwl4/aBoTapUoygn+ebecvYlsXtNDhvENO/IPJaE4/mhnnq7U+KIRqRk7Jmqrgq9KHmTjZfb+1wXQMff8AjdWCcqdKEZuL0ZTk+omtqSWt5EmHcZwvKap1IqnOWqMk86cn2a/yseZG+W514DEeX5uXTfvbrY1gAJmQAAAAAAAAAFTiTdR514SLYqcSbqPOvCQBPVpTrWXRpz0JuktGfY9FZFFdeLadCnoWrTp1afVmpQb0mv1LLtNHZpqlQhKTSSpxbbepJRWbKWnf9hvF1JS0H6OLm5VKSz0Vxhms3w+KIS7OxqoJShJSg5JWd1uuN7PR9H6EVwTlfNrqW1wlCkqfoKSkspS15uXj8TUFXct+0b40lTk847YSjoyy4NLsLQ7C1iOJcvMtKOWySt0S2AAJGcAAAGS+0i2OhZo008vST18sFm18XE1piftOpN06E+ClOD/iSa8jK6rtBmzw9J4qCfX3s2vc8+Ou6rwndlRVIPXlKPtUll45P3I5AYk7Hr5RU4uMldM+t59/eIvLxPgRwlue0XDa3brNRqPbKCz9q1P6pneVWFaLoWKhF7fRqX+5uX8y1PoxvZXPDVlFVJKO139wADpWAAAAAACpxJuo868JFsVOJN1HnXhIA/F80pV7vlGGek6CyS2vJJtfBM8iWo9vsW6p8kfKjDYpwhKVaNShDONSWUocISf6u6L1+wz1oN2aPteE4uFPNTnpfVP02f4+hyfZvRlK1Smk9GNOSk+HWayX0+h6WVtx3RC56Kpx1vbKXGUu3+3YWRbThljYwY7ELEVnOO2y9PkAAmZAAAAV1/Xar2s86T1NrOL7JLWn/wB7SxAauShJwkpR3R4ZaKMrNKUJRcXFuLi9qa2ojPSsbYb+8IuvTj+LFdaK/Wl2f6kvitXYea5ZGCcHB2PYYTFRxNPMt+V0fw+P8Ba4auh3xXjDLqLrTlwUVw9r2HFYLHO31I06cdJyeSXD2t8Ej1vD9zQuWkqcdcn1pzy1yl/ZcESpwzPsU+I41YenaP8AJ7du/wAdyzhFQSSWSSyS7kfQDaeTAAAAAAAAABU4k3UedeEi2KnEm6jzrwkAd9i3VPkj5UTkFi3VPkj5UTgAAAAAAAAAAAAAwGO8OaEuk0o6pPKcUv1PZJLvep9+Rvz41mRnBSVmaMLiZ4eopx9V1RQYQuBXPS0pJOpNZyf7VwgvZx7zQAHYxUVZFdWrKrNzm9WAAdKwAAAAAAAAAVOJN1HnXhItipxJuo868JAHfYt1T5I+VE5BYt1T5I+VE4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKnEm6jzrwkWxU4k3UedeEgDvsW6p8kfKicgsW6p8kfKicAAAAAAAAAAAAAAqbwxHZrun6OpWSlxjFOTXNknl7ywslqhbYKpTnGcXsknmv8AJxNE5U5xipSTSeztoTAr70vuhdWSqVVFvWo63N9+iteR+rsvaheibp1Izy2rZJe2L1oXV7Dy55c+V2620+p3AA6QAAAAAAAAABU4k3UedeEi2KnEm6jzrwkAd9i3VPkj5UTkFi3VPkj5UTgAAAAAAAAAAocZXq7pszcHlOb9HF9mpty9y+rRfGH+0/PRs/ZnP45R/wCSFRtRbRqwNONTEQjLa/2TZgZPS17eOfEvsI379zVJaTbhNPSjwUks4y9urL3lAfTCnZ3R6+tSjWg4T2ZNbrVO3VJ1JvNzek/7LuWw/V226d21Y1ISylH4NcYvuZzA429yWWLjltptbi3Q9wsFqVtpU6sdk4qa962E5T4QTVgoZ/sz9zk8vpkXB9FO6ueIqwUJyiuG17gAHSsAAAAAAFTiTdR514SLYqcSbqPOvCQB32LdU+SPlROQWLdU+SPlROAAAAAAAAAADP44u53jZXorOVN+lS4tJZSS9zfwNADkldWLKVSVKanHdO54Q9QNVjXDv3bN1qcfw5vWl+mT4d0W9nty7DKmCUXF2Z7OhWjWpqpDZ+3YE9issrZUhTgs3JqK9/HxfuOdaz0vBGHPu+Pp6kfxJrqxe2EX/U/p8TsIZ3YqxeKjhqefnhdX8Lk09joKyU4U47IRUF/Csv5EwBvPG3vuAAAAAAAAACpxJuo868JFsVOJN1HnXhIA77FuqfJHyonILFuqfJHyonAAAAAAAAAAAAAI69GNphKE4qUZJxcXsafA8nxTcMrkqas3CWbhPxi+9fVHrhyXldtO9Kfo6kdKOaltyeafb8V7GV1IZ13NuBxjw1S7/i91+V3MZgXDenlaqsdW2lFrbl/7GvD4m+PkIKmkkkktSS2JLgfSUIKKsirE4meIqOcvRdEAASM4AAAAAAAAAKnEm6jzrwkWxU4k3UedeEgDvsW6p8kfKicgsW6p8kfKicAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFTiTdR514SLYqcSbqPOvCQB32LdU+SPlROQWLdU+SPlROAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACpxJuo868JFsVOJN1HnXhIA77FuqfJHyonILFuqfJHyonAAAAAAAAAAAAABjccYkdk/8elJqeqU5p64raorvfh7TvxfiNXPT0INOtJalt0F+9/y7Ty2dR1W5NttvNtvNtvi2UVqlllR9nwvA52q1RaLZdX1/pfum/rmGL7jfVFS1KpHJTh3/uXc/wDguTxW6LyqXVVjUg9a2r9LXGL7j1y570p3vSjVg9T1OPGMuMWSpVMys9yjxDAuhLPH+D27dvj/AA7gAWnzQAAAAAAAZ/F2IFc1PRi06s11V+1fvfs4drONpK7LKVKVWahBas0BVYk3UedeEjlwnf6vqloyaVWCWnHtXCa7n9GdWJN1HnXhIJpq6FWlKlNwmrNHdYt1T5I+VE5BYt1T5I+VE50rAAAAAAAAABx3veEbroTrS2RWeXa9iXvZ2GM+02u40aVPhKcpP+BLLzkZyyxbNGFo+dWjTezev9c+xgrda52+pOpN5uTzb8EuxJaiAAwHtEklZAvMI307nrrN/hzahNcO5+1eGZRhagnZ3RCpTjVg4S2Z7unmCswxXdpsdCb1v0aTfL1f6SzPoJ3VzxE4uMnF8Nr6AAHSIAAAieL35a5W601ZyetzfuWeSXuR7QZivgyhXtHptKSTl6SVJZaDeee3ak3tRTVg52sfS8NxVLDylKpytPj1PP7gtcrDaqM4t56cYtdqk0mvgz1TEWqmudeEitsmDqNmtHp020pacaerQjLPPbtaT2IsMSbqPOvCR2lBxTTHiWKpYicZU+Fr8eh3WLdU+SPlROQWLdU+SPlROWnzQAAAAAAAAAY77S7K6lGlUS1Qm4vuU0sn8YJe82JDbLLC205U5xUoyWi0RnHNFovw1byasanT9fseHE9isk7dUjTgs5SzyXsTfgmae8MB1qc36KUJxz1Zy0Zr28H7jRYSwv8Ac7dSbUqjWisvywXHJ8W8jJGlJuzR6St4nQjSc4STfC+fyeXhG9xLgqVoqSq0HHrNydNvLJva4vZr7D7hvBMrPONW0OL0XnGmnms+Dk+7sQ8md7Hf/Tw/leZm16c36W/OxqMO2V2KyUabWTUFmu99Z/VssQDYlZWPKzk5ScnzqAAdIgAAAyEbPPFdaq5VZws9ObpRhB5Oco7ZN/52mviZC5LfDD9WtZa0vRp1JVqc3+Rxl3+5fUrnuk9jZhMyjOVNf9pK3LtfVrvt3W/B9hYauGa1P0c6tWhUkqc6b60oN7JLLh7kXOJN1HnXhInu+96N4TnClUU3BJyy2dbPLJ7HsewgxJuo868JEopJabFeInObXmK0ktXs3yr9+/J3WLdU+SPlROQWF/hQXGK0H7Y9Vr4xZOSM4AAAAAAAAAAAAAAAAAAAAAAAAAAAMLiW9ad9VVZISoxUZde0VMso5PWqbfHx+puinnheyTbk7PFtttvSltevtK6kW1ZGrCVaVKeed7ra3D625t9Opx3db7Fc0adGlUjNzmoZwkpTcnq0p9iO/Em6jzrwkfmjhqy0XGUaEVKLUk9KWprY9pNe9B2zRpR2657dWUdX9aJRTRCvKnKV4OTb3crXb9DoqxlZpucU5Rl+aC1yT2acVx1JZruzXHOajWjXWcZKXDU/o+xnSzL4n30fYv5kig0WQyMQADb5DIxAANvkMjEAA2+QyMQADb5DIxAANvkMjEAA2+QyMQADb5DIxAANvkMjEAA2+QMQADYVrVGk9HXKXCnHXN+7gu96u8WOk4Zzn+eW1LWopbIrtyzeb4tvuRy4X3D5n4IuAD//2Q==')
            userCardsDiv.append(img)
       }
       else if(newCard.innerHTML == 4){
        const img = document.createElement("img")
           img.setAttribute('src','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG8up6xUynITvWjfBq28xdiAl2ApUzjC1k1w&usqp=CAU')
            userCardsDiv.append(img)
       }
       else if(newCard.innerHTML == 5){
        const img = document.createElement("img")
           img.setAttribute('src','https://www.media4math.com/sites/default/files/library_asset/images/MathClipArt--Playing-Card--The-5-of-Spades.jpg')
            userCardsDiv.append(img)
       }
       else if(newCard.innerHTML == 6){
        const img = document.createElement("img")
           img.setAttribute('src','data:image/png;base64,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')
            userCardsDiv.append(img)
       }
       else if(newCard.innerHTML == 7){
        const img = document.createElement("img")
           img.setAttribute('src','data:image/png;base64,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')
            userCardsDiv.append(img)
       }
       else if(newCard.innerHTML == 8){
        const img = document.createElement("img")
           img.setAttribute('src','data:image/png;base64,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')
            userCardsDiv.append(img)
       }
       else if(newCard.innerHTML == 9){
        const img = document.createElement("img")
           img.setAttribute('src','data:image/png;base64,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')
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
standBtn.addEventListener("click", dealersTurn)
