const autoIncrement = require('mongoose-auto-increment');
const mongoose = require('mongoose');
const userSchema = require('./userSchema');
const bcrypt = require('bcrypt');
const saltRounds = 10;

autoIncrement.initialize(mongoose.connection);

userSchema.plugin(autoIncrement.plugin, 'user');

userSchema.pre('save', function(next){
    let thisUser = this;
    bcrypt.hash(thisUser.password, saltRounds, function(err, hash) {
        if(err) return next(err);
        thisUser.password = hash;
        next();
    });
});

const User = mongoose.model('user', userSchema );

module.exports = User;