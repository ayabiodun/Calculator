export abstract class MathOperation{
    abstract execute(firstNumber: number, secondNumber: number): number
}

export class Addition extends MathOperation{
    execute(firstNumber: number, secondNumber: number): number {
        return firstNumber + secondNumber;
    }
}

export class Subtraction extends MathOperation{
    execute(firstNumber: number, secondNumber: number): number {
        return firstNumber - secondNumber;
    }
}

export class Multiplication extends MathOperation{
    execute(firstNumber: number, secondNumber: number): number {
        return firstNumber * secondNumber;
    }
}

export class Division extends MathOperation{
    execute(firstNumber: number, secondNumber: number): number {
        if(secondNumber === 0){
            throw new Error('Error');
        }

        return firstNumber / secondNumber;
    }
}


export function checkOperation(operation: string): MathOperation{
    if(operation === '+') return new Addition();
    if(operation === '-') return new Subtraction();
    if(operation === '*') return new Multiplication();
    if(operation === '/') return new Division();

    throw new Error('Invalid operation');
}