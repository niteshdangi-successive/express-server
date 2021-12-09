import { hasPermission } from '../../../Extra';

export const authMiddleWare = (module,permissionType) => (req,res,next) =>{
    const token = req.header('Authorization');
    if(!token){
        next({ err: 'Unauthorized Access', status: 403, message: 'Token not found'});
    }

    

}