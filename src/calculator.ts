import { checkOperation } from "./operation.js";
import type { MathOperation} from "./operation.js";


export class Calculator{
    private firstNum: string = '';
    private secondNum: string = '';
    private operator: string = '';
    private inputDisplay: HTMLInputElement;

    constructor(displayId: string){
        this.inputDisplay = document.getElementById(displayId) as HTMLInputElement;
    }

    appendNumber(num: string): void{
        if(this.operator === ''){
            this.firstNum += num;
            this.updateDisplay(this.firstNum);
        }else{
            this.secondNum += num;
            this.updateDisplay(this.firstNum + this.operator + this.secondNum);
        }

    }

    appendDecimal(element: string): void{
        if(this.operator === ''){
            if(this.firstNum.includes('.')){
                return;
            }
            this.firstNum += element;
            this.updateDisplay(this.firstNum);
        }else{
            if(this.secondNum.includes('.')){
                return;
            }
            this.secondNum += element;
            this.updateDisplay(this.firstNum + this.operator + this.secondNum);
        }

    }

    calculate(): void{
        if(this.firstNum && this.operator && this.secondNum){
            const num1: number = parseFloat(this.firstNum);
            const num2: number = parseFloat(this.secondNum);

            const operation: MathOperation = checkOperation(this.operator);
            let result: number;

            try{
                result = operation.execute(num1, num2);
                this.firstNum = String(result);
                this.secondNum = '';
                this.operator = '';
            }catch{
                this.firstNum = 'Error'
            }

            this.updateDisplay(this.firstNum);
        }
        else{
            return;
        }
    }

    clear(): void{
        this.firstNum = '';
        this.secondNum = '';
        this.operator = '';
        this.inputDisplay.value = '';
    }

    backspace(): void{
        const display = this.inputDisplay.value;
        const removedDisplay = display.slice(0, -1);
        
        if(this.operator === ''){
            this.firstNum = this.firstNum.slice(0, -1);
        }
        else if(this.operator !== '' && this.secondNum !== ''){
            this.secondNum = this.secondNum.slice(0, -1);
        }
        else if(this.operator !== '' && this.secondNum === ''){
            this.operator = '';
        }else{
            return;
        }

        this.updateDisplay(removedDisplay);
    }

    setOperator(opera: string): void{
        if(!opera) return;
        this.operator = opera;
        this.updateDisplay(this.firstNum + this.operator);
    }


    updateDisplay(element: string){
        this.inputDisplay.value = element;
    }
}