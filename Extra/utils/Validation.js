let userEmails = ["trainee1@successive.tech","reviewer1@successive.tech","test123@gmail.com","abcd123.@.com","test.test@gmail.com","demo@outlook.com","123xyz@gmaildotcom"];
 
let validEmailCount = 0;
let invalidEmails = [];
let invalidEmailsCount = 0;

function validateEmail(email) {
    const REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(REGEX.test(String(email).toLowerCase())){
        validEmailCount++;
        return REGEX.test(String(email).toLowerCase());
    }else{
        invalidEmailsCount++;
        invalidEmails.push(email);
    }
}

let validEmails = userEmails.filter(email => validateEmail(email));
console.log("Valid Emails :",validEmails," and Valid Email Counts :", validEmailCount);
console.log("Invalid Emails", invalidEmails," and Invalid Email Counts :",invalidEmailsCount);
