class Employee {
    private id:number
    public ename:string
    public job:string
    public salary:number
    public setEmployeeDetails(id:number , ename:string,job:string,salary:number): void {
        this.id=id;
        this.ename=ename;
        this.job=job;
        this.salary=salary;
    }

    public getEmployeeDetails():void {
        console.log(`${this.id} ${this.ename} ${this.job} ${this.salary}`);
    }
}

var e1 = new Employee();
e1.setEmployeeDetails(1,'john','job',5000);
e1.getEmployeeDetails();
