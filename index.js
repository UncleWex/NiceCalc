const digitButtons = document.querySelectorAll(".digit-button");
const display = document.querySelector(".display-container");
const clearButton = document.querySelector(".clear-button");
const resultButton = document.querySelector(".result-button");
const operationButtons = document.querySelectorAll(".operation-button");

let value;
let operation;
let newOperationFlag;
let resultFlag;

digitButtons.forEach(button => button.addEventListener("click", () => {
    if (newOperationFlag) {
        display.textContent = "";
        newOperationFlag = false;
        resultFlag = false;
    }
    display.textContent += button.textContent;
}));

operationButtons.forEach(button => button.addEventListener("click", (e) => {
    if (newOperationFlag) {
        operation = e.target.textContent;
        return;
    }  
    if (value === undefined) {
        value = display.textContent;
        newOperationFlag = true;
    }
    else {
        switch (operation) {
            case ("+"):
                value = Number(value) + Number(display.textContent);
                break;
            case ("-"):
                value = Number(value) - Number(display.textContent);
                break;
            case ("*"):
                value = Number(value) * Number(display.textContent);
                break;
            case ("/"):
                value = Number(value) / Number(display.textContent);
                break;
        }
        display.textContent = value;
        newOperationFlag = true;
    }
    operation = e.target.textContent;
}));

clearButton.addEventListener("click", () => {
    display.textContent = "";
    value = undefined;
    operation = undefined;
    resultFlag = false;
    newOperationFlag = false;
});

resultButton.addEventListener("click", () => {
    if (resultFlag) return;
    if (value === undefined || operation === undefined) {
        display.textContent = "Error";
        return;
    }
    switch (operation) {
        case ("+"):
            value = Number(value) + Number(display.textContent);
            break;
        case ("-"):
            value = Number(value) - Number(display.textContent);
            break;
        case ("*"):
            value = Number(value) * Number(display.textContent);
            break;
        case ("/"):
            value = Number(value) / Number(display.textContent);
            break;
    }
    display.textContent = value;
    newOperationFlag = true;
    resultFlag = true;
});