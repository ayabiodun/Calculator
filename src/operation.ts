export abstract class MathOperation{
    abstract execute(firstNum: number, secondNum: number): number
}

export class Addition extends MathOperation{
    execute(firstNum: number, secondNum: number): number {
        return firstNum + secondNum;
    }
}

export class Subtraction extends MathOperation{
    execute(firstNum: number, secondNum: number): number {
        return firstNum - secondNum;
    }
}

export class Multiplication extends MathOperation{
    execute(firstNum: number, secondNum: number): number {
        return firstNum * secondNum;
    }
}

export class Division extends MathOperation{
    execute(firstNum: number, secondNum: number): number {
        if(secondNum === 0){
            throw new Error('Not divisible by zero');
        }

        return firstNum / secondNum;
    }
}

export function checkOperation(opera: string): MathOperation | null{
    switch(opera){
        case '+': return new Addition();
        case '-': return new Subtraction();
        case '*': return new Multiplication();
        case '/': return new Division();
        default: return null;
    }
}