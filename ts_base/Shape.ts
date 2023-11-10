export abstract class Shape {
    constructor(private _x: number, private _y: number) {
    }

    // get/set accessors
    get x(): number {
        return this._x;
    }

    set x(value: number) {
        this._x = value;
    }

    getInfo(): string {
        return `x=${this._x}, y=${this._y}`;
    }

    abstract calculateArea(): number;
}