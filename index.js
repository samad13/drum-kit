var numberOfDrum = document.querySelectorAll(".drum").length;

for(var i = 0; i < numberOfDrum; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){

        var buttonhtml = this.innerHTML
        soundmaking(buttonhtml)
        anniamtion(buttonhtml)
    
    })
};

document.addEventListener("keydown", function(e){
soundmaking(e.key)
anniamtion(e.key)
})

function soundmaking(key){
    switch (key) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
        audio.play();
            break;
         case "s":
            var audio = new Audio("sounds/tom-3.mp3");
        audio.play();
            break;
    
         case "d":
            var audio = new Audio("sounds/tom-4.mp3");
        audio.play();
            break;
    
         case "j":
            var audio = new Audio("sounds/snare.mp3");
        audio.play();
            break;
         case "k":
            var audio = new Audio("sounds/crash.mp3");
        audio.play();
            break;
         case "l":
                var audio = new Audio("sounds/kick-bass.mp3");
         audio.play();
                break;
        default:console.log(buttonhtml)
            break;
    }
}
function anniamtion(currentpress){
 var activeButton = document.querySelector("." + currentpress)
activeButton.classList.add("pressed");
setTimeout(function(){
    activeButton.classList.remove("pressed")
})

}