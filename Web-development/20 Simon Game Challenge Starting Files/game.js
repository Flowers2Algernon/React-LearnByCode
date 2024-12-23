var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
function nextSequence(){
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#"+randomChosenColour).fadeOut(200).fadeIn(200);
    new Audio("./sounds/"+randomChosenColour+".mp3").play();
}
$("btn").on("click",nextSequence());