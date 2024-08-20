const mongoose = require("mongoose")


const  LoginSchema = new mongoose.Schema({

    user:{
        type:String,
        required:false
    },

    password:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model("Login",LoginSchema)

