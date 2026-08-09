import { checkOperation } from "../dist/operation.js";
export class Calculator {
    inputDisplay;
    currentElement = '0';
    previousElement = '';
    operator = '';
    resetDisplay = false;
    constructor(displayId) {
        this.inputDisplay = document.querySelector(displayId);
    }
    appendNumber(num) {
        if (this.currentElement === '0' || this.resetDisplay) {
            this.currentElement = num;
            this.resetDisplay = false;
        }
        else {
            this.currentElement += num;
        }
        this.updateDisplay(this.currentElement);
    }
    appendDecimal() {
        if (this.resetDisplay) {
            this.currentElement = '0.';
            this.resetDisplay = false;
            this.updateDisplay(this.currentElement);
            return;
        }
        if (!this.currentElement.includes('.')) {
            this.currentElement += '.';
            this.updateDisplay(this.currentElement);
        }
    }
    setOperator(operator) {
        if (this.operator && !this.resetDisplay) {
            this.calculate();
        }
        this.previousElement = this.currentElement;
        this.operator = operator;
        this.resetDisplay = true;
    }
    calculate() {
        if (!this.operator || this.resetDisplay)
            return;
        const val1 = parseFloat(this.previousElement);
        const val2 = parseFloat(this.currentElement);
        const operator = checkOperation(this.operator);
        if (operator) {
            try {
                const result = operator.execute(val1, val2);
                this.currentElement = String(result);
                this.updateDisplay(this.currentElement);
                this.previousElement = '';
                this.operator = '';
            }
            catch (error) {
                this.clearAll();
                this.updateDisplay('Error');
            }
        }
    }
    clearAll() {
        this.currentElement = '0';
        this.previousElement = '';
        this.operator = '';
        this.resetDisplay = false;
        this.updateDisplay(this.currentElement);
    }
    updateDisplay(element) {
        this.inputDisplay.value = element;
    }
}
//# sourceMappingURL=calculator.js.map