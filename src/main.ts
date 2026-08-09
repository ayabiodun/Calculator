import { Calculator } from "../dist/calculator.js";

const display = document.querySelector('#display') as HTMLInputElement;
const buttons = document.querySelectorAll('button') as NodeListOf<HTMLButtonElement>;
const myCalc = new Calculator('#display');


buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const action = button.dataset.action;
        const val = button.dataset.value || '';

        switch(action){
            case 'number':
                myCalc.appendNumber(val);
                break;
            case 'operator':
                myCalc.setOperator(val);
                break;
            case 'decimal':
                myCalc.appendDecimal();
                break;
            case 'calculate':
                myCalc.calculate();
                break;
            case 'clear':
                myCalc.clearAll();
                break;
        }
    });
});
