const mongoose = require("mongoose")
const validator = require("validator")

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        minLength:3
    },
    email:{
        type:String,
        required:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("invalid email id")
                }
            },
        unique:true
    },
    phone:{
        type:Number,
        required:true,
        minLength:10
    },
    message:{
        type:String,
        required:true,
        minLength:3
    },
    date:{
        type:Date,
        default:Date.now
    }

})

const User = mongoose.model("User",userSchema)

module.exports = User