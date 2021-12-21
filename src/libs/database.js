const mongoose = require('mongoose');
import { seed }  from './seadData';

class Database{

    constructor(){}

    open(mongoURL){
        let con = mongoose.connect(mongoURL)
        .then( ()=> {
            console.log("Conncected successfully");
            seed();
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