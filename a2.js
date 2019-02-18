var bankAccount = /** @class */ (function () {
    function bankAccount() {
        this.accountBalance = 0;
    }
    bankAccount.prototype.isofficehours = function () {
        var d = new Date();
        var hour = d.getHours();
        var status = false;
        if (hour >= 10 && hour <= 16) {
            status = true;
        }
        return status;
    };
    bankAccount.prototype.depositAmount = function (amount) {
        console.log("Attempt: Deposit of amount " + amount);
        if (this.isofficehours()) {
            if (amount >= 50000) {
                console.log("You cannot exceed the limit greater than 50,000");
            }
            else {
                this.accountBalance += amount;
                console.log("Amount of Rs." + amount + " has been credited");
            }
        }
        else {
            console.log("Deposits not allowed out of office  hours");
        }
        this.getBalance();
    };
    bankAccount.prototype.getBalance = function () {
        console.log("Total balance in account is:" + this.accountBalance);
    };
    return bankAccount;
}());
var c1 = new bankAccount();
c1.depositAmount(51000);
c1.depositAmount(40000);
