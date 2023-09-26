document.addEventListener('DOMContentLoaded', function(){
const display = document.getElementById('display');
let currentInput = '';
let currentOperator = '';
let prevValue = 0;
let decimalClicked = false;

function appendToDisplay(value){
    if (value === '.' && decimalClicked) return;
    if (value === '.') decimalClicked = true;
    
    currentInput += value;
    display.innerText  = currentInput;
}

function clearDisplay(){
    currentInput = '';
    currentOperator = '';
    prevValue = 0;
    decimalClicked = false;
    display.innerText = '0';
}

function calculateResult(){
    if(currentInput === '') return;
    const currentValue = parseFloat(currentInput);

    switch (currentOperator){
        case '+':
            prevValue += currentValue;
            break;
        case '-':
            prevValue -= currentValue;
            break;
        case '*':
            prevValue *= currentValue;
            break;
        case '/':
            if (currentValue !== 0){
                prevValue /= currentValue;
            } else {
                alert('Error: Division by zero');
                clearDisplay();
                return;
            }
            break;
        default:
            prevValue = currentValue;
            break;
    }
    display.innerText = prevValue;
    currentInput = '';
    currentOperator = '';
    decimalClicked = false
}
 const buttons = document.querySelectorAll('.btn');
 buttons.forEach(button => {
    button.addEventListener('click', function(){
        const value = this.innerText;
        if (value >= '0' && value <= '9'){
            appendToDisplay(value);
        }else if(value === '.'){
            appendToDisplay(value);
        }else if (value === 'C'){
            clearDisplay();
        }else if (value ==='='){
            calculateResult();
        } else{
            currentOperator = value;
            prevValue = parseFloat(currentInput);
            currentInput = '';
            decimalClicked = false;
        }
    })
 })

clearDisplay();

});