var Email = /** @class */ (function () {
    function Email() {
    }
    Email.prototype.composeEmail = function () {
        console.log('compose email');
    };
    Email.prototype.readEmail = function () {
        console.log('read email');
    };
    return Email;
}());
var e = new Email();
e.composeEmail();
e.readEmail();
