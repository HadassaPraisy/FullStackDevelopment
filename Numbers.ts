export class Numbers {
    private num1:number;
    private num2:number;

    constructor(num1c:number , num2c:number) {
        this.num1 = num1c;
        this.num2 = num2c;
    }

    public getNumbers():void{
        console.log(`num1=${this.num1} , num2=${this.num2}`);
}
}