const mentorRoute = require("./mentor");
const studentRoute = require("./students")
const router =require("express").Router();


router.use("/mentor",mentorRoute);
router.use("/student",studentRoute);

module.exports=router;