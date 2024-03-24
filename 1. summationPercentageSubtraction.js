function summationValidation() {
    let number01 = document.getElementById("number1").value;
    let number02 = document.getElementById("number2").value;

    let numToInt1 = parseInt(number01);
    let numToInt2 = parseInt(number02);

    let result = numToInt1 + numToInt2;

    document.write(result);
}

function subtractionValidation() {
    let number01 = document.getElementById("number1").value;
    let number02 = document.getElementById("number2").value;

    let numToInt1 = parseInt(number01);
    let numToInt2 = parseInt(number02);

    let result = numToInt1 - numToInt2;

    document.write(result);
}

function percentageValidation() {
    let number01 = document.getElementById("number1").value;
    let number02 = document.getElementById("number2").value;

    let numToInt1 = parseInt(number01);
    let numToInt2 = parseInt(number02);

    let result = ((numToInt1 / numToInt2) * 1) / 100;

    document.write(result);
}