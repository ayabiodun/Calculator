export class MathOperation {
}
export class Addition extends MathOperation {
    execute(firstNum, secondNum) {
        return firstNum + secondNum;
    }
}
export class Subtraction extends MathOperation {
    execute(firstNum, secondNum) {
        return firstNum - secondNum;
    }
}
export class Multiplication extends MathOperation {
    execute(firstNum, secondNum) {
        return firstNum * secondNum;
    }
}
export class Division extends MathOperation {
    execute(firstNum, secondNum) {
        if (secondNum === 0) {
            throw new Error('Not divisible by zero');
        }
        return firstNum / secondNum;
    }
}
export function checkOperation(opera) {
    switch (opera) {
        case '+': return new Addition();
        case '-': return new Subtraction();
        case '*': return new Multiplication();
        case '/': return new Division();
        default: return null;
    }
}
//# sourceMappingURL=operation.js.map