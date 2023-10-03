const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");

//Variables
var beginTimer; 
var initTime = null; 
var testText = "Emperor Charles sought the past, you seek the present, but I seek the future."
var userCursor = '';
var errors = 0;
var score = 0;

// Add leading zero to numbers 9 or below (purely for aesthetics):
function leadZeroes(num) {
    return ("0"+num)
}

// Run a standard minute/second/hundredths timer:
function stanTimer() {
  //Reference for Dates: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date 
    var atmTime = new Date(); // For the current time

    // count up timer in milliseconds
    var difTime = atmTime.getTime() - initTime.getTime();

    difTime = difTime/1000; // change difTime 
    
    if (difTime / 60 > 1) { // In case we pass 1 minute
        var min = Math.floor(difTime / 60);
        var sec = difTime - (min * 60);
        
        document.querySelector('div.timer').innerHTML = 
            ((min < 10)? leadZeroes(min) : min) + ":" + ((sec < 10)? leadZeroes(sec.toFixed(3)) : sec.toFixed(3));
    }
    else {
        document.querySelector('div.timer').innerHTML = "00:" + ((difTime < 10)? leadZeroes(difTime.toFixed(3)) : difTime.toFixed(3));
    }
}

// Start the timer:
function startTime() {
    initTime = new Date();
    beginTimer = window.setInterval(stanTimer, 1);
}

// Match the text entered with the provided text on the page:
function sameText() {
    // starting our timer
    if (initTime == null) {
        startTime();
        console.log("start timer running");
    }
    userCursor = document.getElementById('test-area').value;

    // changing textarea to red when something is mistyped
    if (userCursor.charAt(userCursor.length-1) !== testText.charAt(userCursor.length-1)) {
        document.querySelector('.test-wrapper textarea').setAttribute('style', 'background-color: #ff000099');
        errors++;
    }
    else {
        document.querySelector('.test-wrapper textarea').setAttribute('style', 'background-color: #ffffff');
    }
    // user completed the test 
    if (userCursor == testText) {
        clearInterval(beginTimer); //stops our timer
        document.querySelector('.test-wrapper textarea').setAttribute('style', 'background-color: #429890bb'); // textarea turns green
        document.getElementById('type-complete').innerHTML = "Your done! You've made "  + errors +  " mistake(s)"; // reports the # of mistakes made
    }
}

// Event listeners for keyboard input and the reset button
resetButton.addEventListener("click", fullReset);
testArea.addEventListener('keydown', sameText);

// Resets everything and it's for the eventListener
function fullReset() {
    console.log('Full Reset!');
    clearInterval(beginTimer); // this only stops the timer, if it didn't reset
    initTime = null; // resets our start time
  
    document.getElementById('test-area').value = ''; 
    document.querySelector('.test-wrapper textarea').setAttribute('style', 'background-color: #ffffff'); // setting textbox from green to white
    document.querySelector('div.timer').innerHTML = "00:00.000" // sets timer display to 0
}
function bestScores() {
while(initTime != null){
  
}
}
