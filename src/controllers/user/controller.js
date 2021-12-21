const jwt = require('jsonwebtoken');
import User from '../../repositories/user/userModel';
const bcrypt = require('bcrypt');
export let token;
export class UserController{
    
    constructor(){}

    userLogin = async (req, res) => {

        const { email, password } = req.body;
        const userDetail = await User.findOne({email});
        if(userDetail && (await userDetail.validateUserPassword(password))){
            token = jwt.sign({userDetail}, 'qwertyuiopasdfghjklzxcvbnm123456');
        }
        // let decoded = jwt.verify(token, 'qwertyuiopasdfghjklzxcvbnm123456');
        // console.log(decoded);
        res.status(200).json({ message: "login successful ", status: 200, token: token });
    }
}

// let token = jwt.sign({ iss: "Successive Technologies",
        //                        iat: 1548690437, 
        //                        exp: 1580226437, 
        //                        aud: "www.successive.in&quot;", 
        //                        sub: "Learn and Implement", 
        //                        name: "Trainee", 
        //                        email: "trainee@successive.tech", 
        //                        role: "trainee" }, 'qwertyuiopasdfghjklzxcvbnm123456');
        // console.log(token);