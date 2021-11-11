import {validateEmail} from "./Helpers";

// let userEmails = ["trainee1@successive.tech","reviewer1@successive.tech","test123@gmail.com","abcd123.@.com","test.test@gmail.com","demo@outlook.com","123xyz@gmaildotcom"];
 
// let validEmailCount = 0;
// let invalidEmailsCount = 0;



// let validEmails = userEmails.filter(email => validateEmail(email));
// // console.log("Valid Emails :",validEmails," and Valid Email Counts :", validEmailCount);
// // console.log("Invalid Emails", invalidEmails," and Invalid Email Counts :",invalidEmailsCount);

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
    console.log(`these are valid emails= ${validEmails}`);
    console.log(`these are invalid emails= ${invalidEmails}`);
    var valid_user = validEmails.length;
    var invalid_user = invalidEmails.length;
    console.log(`the number of valid user = ${valid_user}`);
    console.log(`the number of invalid user = ${invalid_user}`);
}
