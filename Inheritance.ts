class Base {
    private a:number=1000;
    public b:number=2000;
    protected c:number=3000;

    displayBase():void {
        console.log(`A: ${this.a} , B:${this.b} , C: ${this.c}`);
    }
}
class Derived extends Base {
    displayDerived():void {
        console.log(` B:${this.b} , C:${this.c}`);
    }
}

var o=new Derived();
o.displayBase();
o.displayDerived();
console.log(`B:${o.b}`);