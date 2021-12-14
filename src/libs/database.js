const mongoose = require('mongoose');

class Database{

    constructor(){}

    open(mongoURL){
        let con = mongoose.connect(mongoURL)
        .then( ()=> {
            console.log("Conncected successfully");
            return true;
            })
        .catch( (err) => {
            console.log(err);
            return false;
            });

        return con;
    }

    disconnect(){
        mongoose.connection.close()
    }

}

export default new Database;