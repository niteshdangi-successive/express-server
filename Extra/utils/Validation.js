import {validateEmail} from "./Helpers";

export default function validateUser(users){

    const validEmails = [];
    const invalidEmails = [];
    let res = "";
    let userlen = users.length;
    for(var i=0;i<userlen;i++){
        res = validateEmail(users[i]);
        if (res == true){
        validEmails.push(users[i]);
    }
        else{
            invalidEmails.push(users[i]);
        }
    }

    console.log(`these are valid emails : ${validEmails}`);
    console.log(`these are invalid emails : ${invalidEmails}`);
    var valid_user = validEmails.length;
    var invalid_user = invalidEmails.length;
    console.log(`the number of valid user : ${valid_user}`);
    console.log(`the number of invalid user : ${invalid_user}`);
}
