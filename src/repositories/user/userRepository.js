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
        let { id } = req.params;
        try{
            if(id !== undefined){
               const user = await User.findById(id);
               if(user === null){
                   res.send('User Not Found!');
               }else{
                   res.json(user);
               } 
            }else{
               const user = await User.find();
               res.json(user);
            }

        }catch (err){
            res.send('Error: ' + err);
        }
            
    }

    update = async (req, res) => {
        let { id } = req.params;
        let dataToUpdate = req.body;
        try{
            let user = await User.findByIdAndUpdate(id, dataToUpdate);
            res.send("Data Updated Successfully!");
        }catch (err){
            res.send('Error: ' + err);
        }
    }

    delete = async (req, res) => {
        let { id } = req.params;
        try{
            let user = await User.findByIdAndRemove(id);
            res.send("User Deleted Successfully!");
        }catch (err){
            res.send('Error: ' + err);
        }
    }
    
}

export default new UserRepository;