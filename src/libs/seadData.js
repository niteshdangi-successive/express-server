import userSeed from "../repositories/user/userModel";
const  bcrypt = require('bcrypt');
export const seed =  async (req, res, next) => {
//   console.log('Inside Seed Data');
  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);
  const hash = await bcrypt.hash('Training@123', salt);

  const user = {
    name: 'Nitesh',
    email: 'nitesh@successive.tech',
    password: hash,
  };
   
    try {
      const count= await userSeed.countDocuments();
    //   console.log('count is -----', count);
      if (count === 0) {
        let data = new userSeed(user);
        try{
            await data.save();
            res.send("Seed data created successfully!");
        }catch (err){
            res.send(err);
        }
      }else{
          next();
      }
    } catch (error) {
      console.log('error is created', error);
    }
};