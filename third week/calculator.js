document.addEventListener("DOMContentLoaded", function() {
    // Get the display element
    const display = document.getElementById("display");

  
    // Get all the number buttons
    const numberButtons = document.querySelectorAll(".number");
  
    // Get all the operator buttons
    const operatorButtons = document.querySelectorAll(".operator");
  
    // Add event listeners to number buttons
    numberButtons.forEach(function(button) {
      button.addEventListener("click", function() {
        display.innerText += button.innerText;
      });
    });
  
    // Add event listeners to operator buttons
    operatorButtons.forEach(function(button) {
      button.addEventListener("click", function() {
        if (display.innerText == '' &&  button.innerText != '-' ){
          return
        } 

        if (['*', '+', '/', '-'].includes(display.innerText[display.innerText.length-1])){
          display.innerText = display.innerText.slice(0, display.innerText.length - 1) + button.innerText;
        }
        else{

          display.innerText += button.innerText;
        }

      });
    });
  
    // Add event listener to equals button
    const equalsButton = document.getElementById("equals");
    equalsButton.addEventListener("click", function() {
      try {
        const result = eval(display.innerText);
        display.innerText = result;
      } catch (error) {
        display.innerText = "Error";
      }
    });
  
    // Add event listener to clear button
    const clearButton = document.getElementById("clear");
    clearButton.addEventListener("click", function() {
      display.innerText = "";
    });
  });