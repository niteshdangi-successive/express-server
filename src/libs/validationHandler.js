const validationHandler = (config) => (req,res,next) => { 
    const errMessage = [];
    let flag = false;
    // console.log("config------>",config);
    // console.log("body-------->",req.body);
    for(let key in config){
        flag = false;
        const dataPlace = config[key].in;
        const input = req[dataPlace][key];
        // console.log("sdddd",dataPlace);
        // console.log("key---->",key,"  ",req[dataPlace][key]);
        for(let keyProperty in config[key]){
            // console.log("Key Attribute----->",dataPlace);
            switch(keyProperty){
                case 'required':
                    if((key in req[dataPlace]) && input !== null){
                        break;
                    }else{
                        if(config[key][keyProperty] === false){
                            dataPlace.forEach(element => {
                                req[element][key] = config[key].default;  
                            });
                        }else{
                            errMessage.push(`${key} is required`);
                            flag = true;
                        }
                        break;
                    }

                case 'string':
                    if((key in req[dataPlace]) && typeof input === 'string' || !(key in req[dataPlace])){
                        break;
                    }else{
                        errMessage.push(`${key} should be String`);
                        flag = true;
                    }
                    
            }
        }
    }
    console.log("error message: ",errMessage);
    next();
}

export default validationHandler;