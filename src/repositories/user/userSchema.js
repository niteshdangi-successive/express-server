const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    userId: {type: String, required: true, unique: true},
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    role: {type: String, required: true},
}, { timestamps: true });

module.exports = userSchema;
