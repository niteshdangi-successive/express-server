const jwt = require('jsonwebtoken');

export class UserController{
    constructor(){}

    userLogin = (req, res) => {

        let token = jwt.sign({ iss: "Successive Technologies",
                               iat: 1548690437, 
                               exp: 1580226437, 
                               aud: "www.successive.in&quot;", 
                               sub: "Learn and Implement", 
                               name: "Trainee", 
                               email: "trainee@successive.tech", 
                               role: "trainee" }, 'qwertyuiopasdfghjklzxcvbnm123456');
        console.log(token);

        // let decoded = jwt.verify(token, 'qwertyuiopasdfghjklzxcvbnm123456');
        // console.log(decoded);
        res.send('User has Loged in...');
    }
}