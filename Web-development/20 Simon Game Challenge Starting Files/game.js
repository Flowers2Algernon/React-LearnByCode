var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var userClickedPattern = [];
var level = 0;
var started = true;
function nextSequence(){
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#"+randomChosenColour).fadeOut(200).fadeIn(200);
    playSound(randomChosenColour);
    level++;
    $("h1").text("Level "+level);
}
$(".btn").on("click",function(){
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
});

function playSound(name){
    new Audio("./sounds/"+name+".mp3").play();
}

function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed");
    setTimeout(function(){
        $("#"+currentColour).removeClass("pressed");
    },100);
}
if(started){
    $(document).on("keydown",function(){
        $("h1").text("Level "+level);
        nextSequence();
        started = false;
    });
}
// here how to ensure just call nextSquence at the first time when the keydown event is triggered

function checkAnswer(currentLevel){
    if (userClickedPattern[currentLevel] == gamePattern[currentLevel]){
        if(currentLevel == gamePattern.length-1){
            setTimeout(function(){
                nextSequence();
            },1000);
            userClickedPattern = [];
        }
    }else{
       playSound("wrong");
       $("body").addClass("game-over");
       $("h1").text("Game Over, Press Any Key to Restart");
       startOver();
       setTimeout(function(){
           $("body").removeClass("game-over");
       },200);
    }
}

function startOver(){
    level = 0;
    gamePattern = [];
    userClickedPattern = [];
    started = true;
}