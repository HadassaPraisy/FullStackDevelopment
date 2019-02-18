class bankAccount{
    private accountBalance:number=0;
    private isWorkingDay():boolean {
        var d =new Date();
        var day=d.getDay();
         if(day==0)
            return false;
            else return true;
                 private isofficehours():boolean {
        var d = new Date();
        var hour = d.getHours(); 
        var status:boolean = false;

        if(hour>=10 && hour<=16) {
            status=true;
        }
        return status;
    }
    public depositAmount(amount:number):void {

        console.log(`Attempt: Deposit of amount ${amount}`);
        if(this.isofficehours()) {
        if(amount>=50000)
        {
            console.log(`You cannot exceed the limit greater than 50,000`)
        }
        else {
        this.accountBalance+=amount;
        console.log(`Amount of Rs.${amount} has been credited`);
        }
    }
    else {
        console.log(`Deposits not allowed out of office  hours`);
    }
}
else {
    console.log(`Deposits are not allowen on Sundays`);
}
         }
        this.getBalance();
    }

    public getBalance():void {
        console.log(`Total balance in account is:${this.accountBalance}`)
    }
}

var c1 = new bankAccount();
c1.depositAmount(51000);
c1.depositAmount(40000);