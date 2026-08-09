export declare class Calculator {
    private inputDisplay;
    private currentElement;
    private previousElement;
    private operator;
    private resetDisplay;
    constructor(displayId: string);
    appendNumber(num: string): void;
    appendDecimal(): void;
    setOperator(operator: string): void;
    calculate(): void;
    clearAll(): void;
    private updateDisplay;
}
//# sourceMappingURL=calculator.d.ts.map