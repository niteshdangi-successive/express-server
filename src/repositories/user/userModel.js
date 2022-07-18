const autoIncrement = require('mongoose-auto-increment');
const mongoose = require('mongoose');
const userSchema = require('./userSchema');
const bcrypt = require('bcrypt');
const saltRounds = 10;

autoIncrement.initialize(mongoose.connection);

userSchema.plugin(autoIncrement.plugin, 'User');

userSchema.pre('save', function(next){
    let thisUser = this;
    bcrypt.hash(thisUser.password, saltRounds, function(err, hash) {
        if(err) return next(err);
        thisUser.password = hash;
        next();
    });
});

userSchema.methods.validateUserPassword = async function validateUserPassword(userPassword){
    return await bcrypt.compare(userPassword, this.password);
}

const User = mongoose.model('User', userSchema );
module.exports = User;
