let carousel = document.getElementById("carousel")



function turnMechanic(){
    if(carousel.classList.contains("cycleZero")){
        carousel.classList.toggle("cycleZero")
        carousel.classList.toggle("cycleOne")
    }
    else if(carousel.classList.contains("cycleOne")){
        carousel.classList.toggle("cycleOne")
        carousel.classList.toggle("cycleTwo")
    }
    else if(carousel.classList.contains("cycleTwo")){
        carousel.classList.toggle("cycleTwo")
        carousel.classList.toggle("cycleThree")
    }
    else if(carousel.classList.contains("cycleThree")){
        carousel.classList.toggle("cycleThree")
        carousel.classList.toggle("cycleFour")
    }
    else if(carousel.classList.contains("cycleFour")){
        carousel.classList.toggle("cycleFour")
        carousel.classList.toggle("cycleZero")
    }
}


function autoTurn(){
    setInterval(() =>  
        turnMechanic()
    , 30000)
}

autoTurn()