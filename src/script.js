document.addEventListener("DOMContentLoaded", function () {
  const display = document.getElementById("calc-display");
  const buttons = document.getElementsByClassName("btn");

  let currentValue = "";

// repalce the buttons to perform actual operation
// example : "×" is Not multiplication but "*" is considered as multiplication.

  function evaluateResult() {
    const convertedValue = currentValue
      .replace("×", "*")
      .replace("÷", "/")
      .replace("%", "*0.01")
      .replace("sin", "Math.sin")
      .replace("cos", "Math.cos")
      .replace("tan", "Math.tan")
      .replace("ln", "Math.log")
      .replace("log", "Math.log10")
      .replace("π", "Math.PI")
      .replace("e", "2.71828182846");

// eval is predefined function that calculates whatever it is given
// Note : it is not safe to use in serious projects bcoz of privacy
    const result = eval(convertedValue);
    currentValue = result.toString();
    display.value = currentValue;
  }

  for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    button.addEventListener("click", function () {
      const value = button.innerText;

      // try catch is used to alert user if he puts some undoable operation 
      
      try {
        if (value == "AC") {
          currentValue = "";
          display.value = currentValue;
        } else if (value == "=") {
          evaluateResult();
        } else if (value == "OFF") {
          currentValue = "";
          display.value = currentValue;
        } else {
          currentValue += value;
          display.value = currentValue;
        }
      } catch (error) {
        console.error(error);
        currentValue = "ERROR";
        display.value = currentValue;
      }
    });
  }
});
