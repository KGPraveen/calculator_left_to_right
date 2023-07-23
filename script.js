var zero = document.querySelector(".zero");
var one = document.querySelector(".one");
var two = document.querySelector(".two");
var three = document.querySelector(".three");
var four = document.querySelector(".four");
var five = document.querySelector(".five");
var six = document.querySelector(".six");
var seven = document.querySelector(".seven");
var eight = document.querySelector(".eight");
var nine = document.querySelector(".nine");
var add = document.querySelector(".add");
var subtract = document.querySelector(".subtract");
var multiply = document.querySelector(".multiply");
var divide = document.querySelector(".divide");
var clear = document.querySelector(".clear");
var clearAll = document.querySelector(".clear-all");

var screen = document.querySelector(".screen");
var screenValue = document.querySelector(".screen").innerHTML;




function input(value) {

    // console.log(value);

    if (value == 'clear') {
        screenValue = screenValue.substring(0, screenValue.length - 1);
        screen.innerText = screenValue;
    } else if (value == 'clearAll') {
        screenValue = "";
        screen.innerText = screenValue;
    } else if (value == 'equals') {
        // console.log(screenValue);
        // screenValue = "";
        screenValue = evaluate(screenValue);
        screen.innerText = screenValue;
    } else {
        screenValue += value;
        screen.innerText = screenValue;
    }

}


function evaluate(equation) {
    var operators = "+-*\/"

    var currentNumber = "";
    var numbers = new Array();
    var operatorArray = new Array();

    for (var i = 0; i < equation.length; i++) {
        var currentChar = equation.charAt(i);
        if (operators.indexOf(currentChar) != -1) {
            operatorArray[operatorArray.length] = (currentChar);
            numbers[numbers.length] = (currentNumber);
            currentNumber = "";
        } else {
            currentNumber = currentNumber + currentChar;
            // console.log(currentNumber);
        }
    }
    numbers[numbers.length] = currentNumber;

    for (var i = 0; i < operatorArray.length; i++) {


        if (operatorArray[i] == '+') {
            numbers[0] = parseInt(numbers[0]) + parseInt(numbers[1]);
            console.log("Number Array before: " + numbers);
            // console.log(numbers[0]);
            if (numbers.length > 1) numbers.splice(1, 1);
            console.log("Number Array: " + numbers);
        } else if (operatorArray[i] == '-') {
            numbers[0] = parseInt(numbers[0]) - parseInt(numbers[1]);
            // console.log(numbers[0]);
            console.log("Number Array before: " + numbers);

            if (numbers.length > 1) numbers.splice(1, 1);
            console.log("Number Array: " + numbers);

        } else if (operatorArray[i] == '/') {
            numbers[0] = parseInt(numbers[0]) / parseInt(numbers[1]);
            console.log("Number Array before: " + numbers);

            // console.log(numbers[0]);
            if (numbers.length > 1) numbers.splice(1, 1);
            console.log("Number Array: " + numbers);

        } else if (operatorArray[i] == '*') {
            numbers[0] = parseInt(numbers[0]) * parseInt(numbers[1]);

            console.log("Number Array before: " + numbers);
            // console.log(numbers[0]);
            if (numbers.length > 1) numbers.splice(1, 1);
            console.log("Number Array: " + numbers);
        }
    }
    console.log("Final Ans: " + numbers[0]);
    return (numbers[0]);
}