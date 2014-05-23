// Check if the user is ready to play!
confirm("I am ready to play!")
age = prompt("What's your age?");
if(age < 13){
    console.log("You're allowed to play this game, but I take no responsibility if you're scared or scarred.")
}
else {
    console.log("Yay! Let's play!")
}
console.log("You are at a Justin Bieber concert, and you hear this lyric 'Lace my shoes off, start racing.'")
console.log("Suddenly, Bieber stops and says, 'Who wants to race me?'")
var userAnswer = prompt("Do you want to race Beiber on stage?")
if((userAnswer.toUpperCase()) == "YES" ){
    console.log("You and Bieber start racing. It's neck and neck! You win by a shoelace!")
}
else{
    console.log("Oh no! Bieber shakes his head and sings 'I set a pace, so I can race without pacing.'")
}

var feedback = prompt("On a scale of 1-10, how would you rate this game?")
if(feedback > 8){
    console.log("Thank you! We should race at the next concert!")
}
else{
    console.log("I'll keep practicing coding and racing.")
}
