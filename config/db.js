const mongoose = require("mongoose");

const url = 
"mongodb+srv://sibi:arunsibi@hospital-systems.wgqwd8m.mongodb.net/Menter-std-assgin-db?retryWrites=true&w=majority";

mongoose.set("strictQuery",false);

const connectDB =async()=>{
    try{
        const connect =await mongoose.connect(url);
        console.log(`mongoDB connected ${connect.connection.host}`);
    }
    catch(err){
        console.log(err);
    }
}
module.exports=connectDB;