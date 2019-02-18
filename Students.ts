export class Student {
    static sid=10;
    private id:number;
    private sname:string;
    private course:string;

    constructor(sname:string,course:string) {
        this.id=++Student.sid;
        this.sname=sname;
        this.course=course;
    }

    getDetails():void{
        console.log(`ID:${this.id} , Sname:${this.sname} , Course:${this.course}`);
    }
}