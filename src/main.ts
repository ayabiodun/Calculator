import { Calculator } from "./calculator.js";

const myCalculator = new Calculator('display');
const buttons = document.querySelectorAll('button') as NodeListOf<HTMLButtonElement>;


buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const val = button.dataset.value;
        const action = button.dataset.action;

        switch(action){
            case 'operator':
                if(val){
                    myCalculator.setOperator(val);
                }
                break;
            case 'number':
                if(val){
                    myCalculator.appendNumber(val);
                }
                break;
            case 'decimal':
                if(val){
                    myCalculator.appendDecimal(val);
                }
                break;
            case 'calculate':
                myCalculator.calculate();
                break;
            case 'clear':
                myCalculator.clear();
                break;
            case 'backspace':
                myCalculator.backspace();
                break;
        }
    })
})