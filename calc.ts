export class Calculations{
    static square(n:number):number{
        return (n*n);
    }

    static factorial(n:number):number{
        var f=1;
            for(var i=n;i>=1;i--)
            f*=i;
        return f;
    }
}
