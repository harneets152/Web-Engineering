$(function() { // Makes sure that your function is called once all the DOM elements of the page are ready to be used.
    
    // Called function to update the name, happiness, and weight of our pet in our HTML
    checkAndUpdatePetInfoInHtml();
  
    // When each button is clicked, it will "call" function for that button (functions are below)
    $('.treat-button').click(clickedTreatButton);
    $('.play-button').click(clickedPlayButton);
    $('.exercise-button').click(clickedExerciseButton);
    $('.pet-button').click(clickedPetButton);  
  })

    // Add a variable "pet_info" equal to a object with the name (string), weight (number), and happiness (number) of your pet
    // Added a sound variable for the pet action
    var pet_info = {name:"Squirtle", weight:20, happiness:100, sound:0};
    var tSound = new Audio("https://cdn.glitch.global/0542a592-7a0f-46aa-ba27-699d6f0d4dda/squirtle-squirtle-squirtle.mp3?v=1649497715503");
    var pSound = new Audio("https://cdn.glitch.global/0542a592-7a0f-46aa-ba27-699d6f0d4dda/squirtle.mp3?v=1649497710895");
    var eSound = new Audio("https://cdn.glitch.global/0542a592-7a0f-46aa-ba27-699d6f0d4dda/squirtleeee.mp3?v=1649497721700");
    var petSound = new Audio("https://cdn.glitch.global/0542a592-7a0f-46aa-ba27-699d6f0d4dda/squirtle-squirtle.mp3?v=1649497728083");


    function clickedTreatButton() {
      //Used the document.getElementById in order to have the message pop up after clicking the button
      //Reference: https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
      document.getElementById("message").innerHTML = "Treat Button Pressed <br>Squirtle says: Squirtle Sqirtle Squirtle <br>(Translated: Thank you thank you thank you)";
      tSound.play();
      // Increase pet happiness
      pet_info.happiness += 10;
      // Increase pet weight
      pet_info.weight += 2.5;
      checkAndUpdatePetInfoInHtml();
    }
    
    function clickedPlayButton() {
      //Used the same thing as above but just with the Play button instead
      document.getElementById("message").innerHTML = "Play Button Pressed <br>Squirtle says: Squirtle <br>(Translated: Alrighty)";
      pSound.play();
      // Increase pet happiness
      pet_info.happiness += 15;
      // Decrease pet weight
      pet_info.weight -= 1;
      checkAndUpdatePetInfoInHtml();
    }
    
    function clickedExerciseButton() {
      //Again same thing but with the Excercise button and you'll see the same thing for the Pet Button
      document.getElementById("message").innerHTML = "Exercise Button Pressed <br>Squirtle says: SQUIRTLEEEEEE <br>(Translated: Here comes the Squirtle Squad)";
      eSound.play();
      // Decrease pet happiness
      pet_info.happiness -= 5;
      // Decrease pet weight
      pet_info.weight -= 2;
      checkAndUpdatePetInfoInHtml();
    }

    function clickedPetButton (){
      document.getElementById("message").innerHTML = "Pet Button Pressed <br>Squirtle says: Squirtle Squirtle<br>(Translated: Yep that's the spot)";
      petSound.play();
      pet_info.sound += 1;
      pet_info.happiness += 1;
      checkWeightAndHappinessBeforeUpdating();
      updatePetInfoInHtml();
    }

    function checkAndUpdatePetInfoInHtml() {
      checkWeightAndHappinessBeforeUpdating();  
      updatePetInfoInHtml();
    }

    function checkWeightAndHappinessBeforeUpdating() {
      //Added conditional where if both happiness and weight is less than 0 then it will pop up the message and set the values to 0.
      if(pet_info.happiness < 0 && pet_info.weight < 0){
        document. getElementById("message").innerHTML = "Your pokemon has lost alot of weight and it's feeling down, you should feed it more treats!";
        pet_info.weight = 0;
        pet_info.happiness = 0;
      }
      // Add conditional so if weight is lower than zero, set it back to zero
      if(pet_info.weight < 0 ){
        document.getElementById("message").innerHTML = "Your pokemon is feeling super down, you should feed it more treats or play with it!";
        pet_info.weight = 0;
      }
      //Added conditional so if happiness is lower than zero, it gets set back to zero 
      if(pet_info.happiness < 0){
        document.getElementById("message").innerHTML = "Your pokemon has lost alot of weight, you should feed it more treats!";
        pet_info.happiness = 0;
      }
    }

    // Updates your HTML with the current values in your pet_info object
    function updatePetInfoInHtml() {
      $('.name').text(pet_info['name']);
      $('.weight').text(pet_info['weight']);
      $('.happiness').text(pet_info['happiness']);
      $('.sound').text(pet_info['sound']);
    }
