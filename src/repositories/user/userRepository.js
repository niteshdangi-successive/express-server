import User from './userModel';

class UserRepository{

    constructor(){}

    create = async (req, res) => {
        const userDetail = req.body;
        const newUser = new User(userDetail);
        await newUser.save()
        .then(() => {res.json('User Added!')})
        .catch((err) => { res.status(400).json('Error: '+err) });
    }

    read = async (req, res) => {

    }

    update = async (req, res) => {

    }

    delete = async (req, res) => {

    }
    
}

export default new UserRepository;