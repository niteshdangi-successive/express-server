export function validateEmail(email) {

    const REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if(REGEX.test(String(email).toLowerCase())){
        return REGEX.test(String(email).toLowerCase());
    }else{
        return false;
    }
}
