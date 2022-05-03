let number = Math.floor(Math.random() * 10 + 1 )
let resetNumber = Math.floor(Math.random() * 10 + 1)
const output = document.getElementById("outputtext")
const button = document.getElementById("submit")
const lifeOutput = document.getElementById("life")
const restartButton = document.getElementById("restart")
//const debug = document.getElementById("cheatsheet")

let chance = 3
//debug.innerHTML = number
lifeOutput.innerHTML = chance

  
restartButton.addEventListener('click', function(){
    alert('You Have Been Restarted The Game!')
    chance = 3
    output.innerHTML = `Your Guess Statement`
    number = Math.floor(Math.random() * 10 + 1)
    lifeOutput.innerHTML = chance
    //debug.innerHTML = number
})


button.addEventListener('click', function(){
    let guess = document.getElementById("input").value
    
    if(chance === 0){
      guess = false
    }
    
    function result(player, computer){
        if(player == computer){
            output.innerHTML = `Congratulation! the number you guessing was ${computer}`
        } else if(chance > 0){
            chance--
            if(player > computer){
                output.innerHTML = `Your guess was too high!`
                lifeOutput.innerHTML = chance
                return
            } else if(player < computer){
                output.innerHTML = `Your guess was too low!`
                lifeOutput.innerHTML = chance
                return
            }
        }
        else {
            output.innerHTML = `You dont have any chance left!`
            alert('"Try Again Later!"\n\nFrom UNIX Developer.')
            guess.setAttribute('disabled', true)
            return
        }
    }

    result(guess, number)

})

/*
button.addEventListener('click', function(){
  const guess = document.getElementById("input").value
  function result(player, computer){
    if(player === ""){
      output.innerHTML = `Enter A Valid Number!`
    } else {
      if(player === computer){
        output.innerHTML = `Congratulation! the number you guessing was ${number}`
        return
      } else if(chance > 0){
        chance--
        if(player > computer){
          output.innerHTML = `Your guess was too high!`
          lifeOutput.innerHTML = chance
          return
        } else if(player < computer){
          output.innerHTML = `Your guess was too low!`
          lifeOutput.innerHTML = chance
          return
        }
      } else {
        output.innerHTML = `You dont have any chance left!`
        return
      }
    }
  }
  
  result(guess, number#00ccff
    
})
*/