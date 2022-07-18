export default function hasPermission(moduleName,role,permissionType){
    
    if(moduleName == 'getUsers'){
        if(role == 'headTrainer'){
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
