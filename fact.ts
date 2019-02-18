export class Calc {
    static factorial(n:number):number {
        var f=1;
        for(var i=n; i>=1; i--) 
            f*=i;
            return f;
        
    }
    static biggest(a:number,b:number):number{
        return(a>b)?a:b
    }
}