export declare abstract class MathOperation {
    abstract execute(firstNum: number, secondNum: number): number;
}
export declare class Addition extends MathOperation {
    execute(firstNum: number, secondNum: number): number;
}
export declare class Subtraction extends MathOperation {
    execute(firstNum: number, secondNum: number): number;
}
export declare class Multiplication extends MathOperation {
    execute(firstNum: number, secondNum: number): number;
}
export declare class Division extends MathOperation {
    execute(firstNum: number, secondNum: number): number;
}
export declare function checkOperation(opera: string): MathOperation | null;
//# sourceMappingURL=operation.d.ts.map