display=function(name,gender,terms){

    var msg='';
    if(gender.toLowerCase()=="mid") {
        msg="Hello Mr.";

    else if(gender.toLowerCase()=="fid") {
        msg="Hello Miss.";
        }
    }
    msg+=name;
    
    if(terms) {
        msg+ = "Thanks for accepting";
        else {
            msg+="Please accept";
        }
    }
}