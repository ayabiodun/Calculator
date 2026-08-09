import { checkOperation } from "../dist/operation.js";

export class Calculator{
    private inputDisplay: HTMLInputElement;
    private currentElement: string = '0';
    private previousElement: string = '';
    private operator: string = '';
    private resetDisplay: boolean = false;

    constructor(displayId: string){
        this.inputDisplay = document.querySelector(displayId) as HTMLInputElement;
    }

    public appendNumber(num: string): void{
        if(this.currentElement === '0' || this.resetDisplay){
            this.currentElement = num;
            this.resetDisplay = false;
        }
        else{
            this.currentElement += num;
        }

        this.updateDisplay(this.currentElement);
    }

    public appendDecimal(): void{
        if(this.resetDisplay){
            this.currentElement = '0.';
            this.resetDisplay = false;
            this.updateDisplay(this.currentElement);
            return;
        }

        if(!this.currentElement.includes('.')){
            this.currentElement += '.';
            this.updateDisplay(this.currentElement);
        }
    }

    public setOperator(operator: string):void{
        if(this.operator && !this.resetDisplay){
            this.calculate();
        }
        
        this.previousElement = this.currentElement;
        this.operator = operator;
        this.resetDisplay = true;
    }

    public calculate(): void{
        if(!this.operator || this.resetDisplay) return;

        const val1 = parseFloat(this.previousElement);
        const val2 = parseFloat(this.currentElement);
        const operator = checkOperation(this.operator);

        if(operator){
            try{
                const result = operator.execute(val1, val2);
                this.currentElement = String(result);
                this.updateDisplay(this.currentElement);
                this.previousElement = '';
                this.operator = '';
            }catch(error){
                this.clearAll();
                this.updateDisplay('Error');
            }
        }
    }

    public clearAll(){
        this.currentElement = '0';
        this.previousElement = '';
        this.operator = '';
        this.resetDisplay = false;
        this.updateDisplay(this.currentElement);
    }

    private updateDisplay(element: string): void{
        this.inputDisplay.value = element;
    }
}