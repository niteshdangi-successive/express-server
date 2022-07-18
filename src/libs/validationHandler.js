const validationHandler = (config) => (req, res, next) => {
    const errMsg = [];
    let flag = false;
    for(const key in config){
      const dataPlace = config[key].in;
      const input = req[dataPlace][key];
      for (const keyProperty in config[key]){
        switch (keyProperty){
          case 'required':
            if(key == 'skip'){
              if(typeof req[dataPlace].skip !== 'undefined'){
                let resultSkip = /^[0-9]+$/.test(req[dataPlace].skip);
                if(resultSkip == true){
                  console.log(req[dataPlace].skip);
                  break;
                }
                else{
                  errMsg.push('skip is required in number');
                  flag = true;
                  break;
                }
              }
              else{
                req[dataPlace].skip = 0;
                console.log(req[dataPlace].skip);
                break;
              }
            }
            else{
              if(key == 'limit'){
                  if(typeof req[dataPlace].limit !== 'undefined'){
                    let result = /^[0-9]+$/.test(req[dataPlace].limit);
                    if(result == true){
                      console.log(req[dataPlace].limit);
                      break;
                    }
                    else{
                      errMsg.push('limit is required in number');
                      flag = true;
                      break;
                    }
                }
                else{
                  req[dataPlace].limit = 10;
                  console.log(req[dataPlace].limit);
                  break;
                }
              }
              else{
                if((key in req[dataPlace]) && input != null ){
                  break;
                }
                else{
                  errMsg.push(`${key} is required`);
                  flag = true;
                  break;
                }
              }
            }
          case 'string':
            if(typeof input != 'undefined'){
              if(key in req[dataPlace] && typeof input === 'string'){
                break;
              }
              else{
                errMsg.push(`${key} is required in string`);
                flag = true;
                break;
              }
            }
          case 'regex':
            let result = false;
            if(typeof input != 'undefined'){
              // if((/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(req[dataPlace].email))){
              //   break;
              // }
              
              result = /^[a-zA-Z ]+$/.test(input);
              if(result == true){
                break;
              }
              else{
                errMsg.push(`${key} is not in proper form`);
                flag = true;
                break;
              }
            }
          case 'custom':
            if(input != ""){
              break;
            }
            else{
              errMsg.push(`${key} not equal null string`);
              flag = true;
              break;
            }
          case 'isObject':
            if(typeof req[dataPlace].dataToUpdate == 'object'){
              break;
            }
            else{
              errMsg.push(`${key} is required in object form`)
              flag = true;
              break;
            }
        }
      }
    }
    if(flag == true){
      res.send(`Error:${errMsg}`);
    }
    else{
      next();
    }
  }
export default validationHandler;
