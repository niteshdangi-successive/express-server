import { hasPermission } from '../../../Extra';
const jwt = require('jsonwebtoken');
// import { token } from '../../controllers/user/controller';

export const authMiddleWare = (module,permissionType) => (req,res,next) =>{
    const token = req.header('Authorization');
    // console.log(token);
    if(!token){
        next({ err: 'Unauthorized Access', status: 403, message: 'Token not found'});
    }

    if(token){
        let decoded = jwt.verify(token, 'qwertyuiopasdfghjklzxcvbnm123456');
        console.log(decoded);
        next();
    }
    

}