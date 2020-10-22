function keyActivity (key){
    switch(key){
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "k":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        default:
            console.log("not in the list");

    }
}

var btnAll = document.querySelectorAll(".drum");

for(var i = 0; i < btnAll.length ;i++){
    btnAll[i].addEventListener("click",  function(){
        keyActivity(this.innerHTML);
        buttonAnimation(this.innerHTML);
    });
}
document.addEventListener("keydown", function(event){
    keyActivity(event.key);
    buttonAnimation(event.key);
});

function buttonAnimation(key){
    document.querySelector("." + key).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("." + key).classList.remove("pressed");
    }, 100);
}
