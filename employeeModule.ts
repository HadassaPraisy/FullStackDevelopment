export class Employee {
    private id:number;
    private ename:string;
    private job:string;
    private salary:number;

    constructor(idc:number,enamec:string,jobc:string,salaryc:number) {
        this.id=idc;
        this.ename=enamec;
        this.job=jobc;
        this.salary=salaryc;
    }

    public getDetails():void{
        console.log(`ID: ${this.id}, Ename: ${this.ename}, Job: ${this.job}, Salary: ${this.salary}`);
    }
}