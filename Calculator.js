
const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.buttons button');

let firstNumber = '';
let operator = '';
let secondNumber = '';

buttons.forEach(button => {
    button.addEventListener('click', function() {
        const value = button.textContent.trim();
        console.log('Button pressed' , value)

        console.log(value);

        if(value >= '0' && value <= '9') {
            if (operator === '') {
                firstNumber += value;
                display.value = firstNumber;
            }else {
                secondNumber += value;
                display.value = firstNumber + operator + secondNumber;
            }
        } else if(value === '.') {
            console.log('DECIMAL CONDITION REACHED')
            if (operator === '') {
                if(!firstNumber.includes('.')) {
                    firstNumber += '.';
                    display.value = firstNumber;
                }
            } else {
                if(!secondNumber.includes('.')) {
                    secondNumber += '.';
                    display.value =firstNumber + operator + secondNumber;
                }
                
            }
        }else if(['+', '-', '*', '/'].includes(value)) {
            operator = value;
            display.value =firstNumber + operator + secondNumber;

        } else if ( value === '=') {
            const num1 = Number(firstNumber);
            const num2 = Number(secondNumber);
            let result;

            if (operator === '+') {
                result = num1 + num2;
            } else if (operator === '-') {
                result = num1 - num2
            } else if ( operator === '*') {
                result = num1 * num2
            } else if ( operator === '/') {
                result = num1 / num2
            }
            display.value = result;
        }else if( value === 'AC') {
            firstNumber = '';
            operator ='';
            secondNumber ='';
            display.value = '';

        }
    });
});

                

               