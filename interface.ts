interface IEmail {
    composeEmail();
    readEmail();

}

class Email implements IEmail {
    public composeEmail():void {
        console.log('compose email');
    }

    public readEmail():void {
        console.log('read email');
    }
}

var e = new Email()
e.composeEmail();
e.readEmail();
