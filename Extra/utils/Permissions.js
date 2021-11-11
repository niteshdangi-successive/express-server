

export default function hasPermission(moduleName,role,permissionType){
    // console.log(permissions[moduleName][permissionType]);
    if(moduleName == 'getUsers'){
        if(role == 'head-trainer'){
            return true;
        }else{
            if(role == 'trainer' && (permissionType == 'read' || permissionType == 'write')){
                return true;
            }else{
                if(role == 'trainee' && permissionType == 'read'){
                    return true;
                }else{
                    return false;
                }    
            }
        }
    }else{
        return false;
    } 
}

// let ans = hasPermission('getUsers','trainee','read');
// console.log("Ans :",ans);