const router = require("express").Router();
const {mentor} = require("../models")

router.get("/",(req,res)=>{
    res.send("mentor route is working");
})
router.post("/mentoradd",async(req,res)=>{
    try{
        const student = new mentor(req.body);

        const data=await student.save();
        return res.json(data);
    }
    catch (error){
        return res.json({msg:error.message})
    }
})
router.get("/mentorlist",async(req,res)=>{
    const mentorlist = await mentor.find().populate(
        "students",
        "name age contact_no department ");
    res.json(mentorlist);
})
module.exports=router;