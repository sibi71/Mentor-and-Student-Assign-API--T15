const mongoose =require("mongoose");

const StudentSchema = new mongoose.Schema({
    name:String,
    age:Number,
    contact_no:Number,
    department:String,
    mentor: {
        type:mongoose.Types.ObjectId,
        ref:"mentors",
    },
},{timestamps:true})

const student = mongoose.model("students",StudentSchema);

module.exports=student;