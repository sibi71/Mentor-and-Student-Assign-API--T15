const router = require("express").Router();
const {mentor, student} = require("../models");

router.get("/",(req,res)=>{
    res.send("student route is working ")
})

router.post("/studentadd",async(req,res)=>{
    try{
        
        const studData = await student.create(req.body);
        const mentorData = await mentor.findByIdAndUpdate(
        req.body.mentor,
        {
            $push:{ students:studData._id},
        },
        {new:true}
        );
        res.json({student:studData,mentor:mentorData});

    }
    catch(error){
        return res.json({msg:error.message})
    }
})

router.get("/studentlist",async(req,res)=>{
    const studentlist = await student.find().populate(
        "mentor","name age email contact_no"
        );
    res.json(studentlist);
})

module.exports=router;