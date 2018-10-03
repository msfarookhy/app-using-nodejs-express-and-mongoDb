const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const usersSchema = new mongoose.Schema({
    username: {
        type:String,
        required: true
    },
    email: {
        type:String,
       
    },
    password: {
        type:String,
        
    },
   
});

usersSchema.plugin(passportLocalMongoose);

const User = mongoose.model("User", usersSchema);

module.exports = User;