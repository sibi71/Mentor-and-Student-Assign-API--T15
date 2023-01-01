const mongoose = require("mongoose");

const MentorSchema = new mongoose.Schema({
    name:String,
    email:{
        type:String,
        required:true,
        unique:true,
    },
    age:Number,
    contact_no:String,
    experience:{
        type:Number,
        default:0,
    },
    students:[
        {
             type:mongoose.Types.ObjectId,
             ref:"students",
        },
    ],
    
},{timestamps:true}
)

const mentor= mongoose.model("mentors",MentorSchema);

module.exports = mentor