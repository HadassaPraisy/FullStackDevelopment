class Employee {
    static eid:number=1000;
    protected id:number;
    protected ename:string;
    protected category:string;

    constructor(ename:string, category:string) {
        this.id=++Employee.eid;
        this.ename=ename;
        this.category=category;
    }

    getDetails():void{
        console.log(`ID:${this.id} , Ename:${this.ename}, Category:${this.category}`);
    }
}
class PartEmployee extends Employee {
    constructor(ename:string) {
        super(ename,'PartTime');
    }
}

class FullTime extends Employee {
    constructor(ename:string) {
        super(ename,'Fulltime');
    }
}

var e1 = new PartEmployee('john');
var e2 = new FullTime('Hadassa'); 
e1.getDetails();
e2.getDetails();