var numOfDrumsButtons = document.querySelectorAll(".drum").length;


for (let i = 0; i < numOfDrumsButtons ; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
      
        let buttonInnerHtml = this.innerHTML;
        
        makeSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);

    }
)};

function makeSound(key) {


    switch (key) {
        case "r":
            let audioOne = new Audio("sounds/tom-1.mp3");
            audioOne.play();
        break;

        case "y":    
            let audioTwo = new Audio("sounds/tom-2.mp3");
            audioTwo.play();
        break;

        case "n":    
            let audioThree = new Audio("sounds/tom-3.mp3");
            audioThree.play();
        break;

        case "m":    
            let audioFour = new Audio("sounds/tom-4.mp3");
            audioFour.play();
        break;

        case "o":    
            let audioFive = new Audio("sounds/snare.mp3");
            audioFive.play();
        break;

        case "r":    
            let audioSix = new Audio("sounds/kick-bass.mp3");
            audioSix.play();
        break;

        case "e":    
            let audioSeventh = new Audio("sounds/crash.mp3");
            audioSeventh.play();
        break;
    
        default: console.log(buttonInnerHtml);
            

}

}

// for (let i = 0; i < numOfDrumsButtons ; i++) {
//     document.querySelectorAll(".drum")[i].addEventListener("click", function () {
      
//         let buttonInnerHtml = this.innerHTML;

//         }
//     });
// };

function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey) 
    activeButton.classList.add("pressed")

    setTimeout( function() {
        activeButton.classList.remove("pressed") 
    }, 100);

}


document.addEventListener("keydown", (event) => {
    makeSound(event.key)
    buttonAnimation(event.key);
})












    // let audio = new Audio("sounds/tom-1.mp3");
    // audio.play();