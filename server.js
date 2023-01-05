const express = require("express");
const connectDB =require("./config/db");
const { param } = require("./routes");
const apiRouter = require("./routes");

const app = express();
const port = process.env.PORT || 4000 ;

connectDB();

app.use(express.json());
app.use("/api",apiRouter); 

app.get("/",(req,res)=>{
    res.send(`<h1>mentor and students management API</h1>`)
})


app.listen(port,()=>{
    console.log(`Server is up and running on port ${port}`);
})