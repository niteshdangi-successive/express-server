import userSeed from "../repositories/user/userModel";
export const seed =  async (req, res, next) => {

  const user = {
    userId: 'nit',
    name: 'Nitesh',
    email: 'nitesh@successive.tech',
    password: 'Nitesh@123',
    role: 'trainee'
  };
   
    try {
      const count= await userSeed.countDocuments();
      // console.log('count is -----', count);
      if (count === 0) {
        let data = new userSeed(user);
        try{
            await data.save();
            console.log("Seed data created successfully!");
        }catch (err){
            console.log("Error: " +err );
        }
      }
    } catch (error) {
      console.log('error is created', error);
    }
};