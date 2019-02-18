<script>
var users = [
    {uname:'kiran',pwd:'kiran1'},
    {uname:'vignesh',pwd:'vigensh1'},
    {uname:'radhika',pwd:'radhik1'},
    {uname:'haritha',pwd:'haritha1'},
    {uname:'swathi',pwd:'swathi1'}
];

    validateFromSource=function (uname,pwd) {
        var flag=false;
        for(var user of users) {
            if ( user.uname==uname && user.pwd==pwd) {
                flag = true;
                break;
            }
        }
        
        return flag;
    }
</script>