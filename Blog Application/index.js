const express=require("express");
const app=express();

//form .env port and db  with process object
require("dotenv").config();
//if 3000 port not come use 4000 port
const PORT=process.env.PORT || 4000
//middleware
app.use(express.json());
//route import
const blog=require("./routes/blog");
//mount blog is main route
app.use("/api/v1",blog);
//db connection
const dbConnection=require("./config/database");
dbConnection();
//listen app
app.listen(PORT,()=>{console.log(`App started at port ${PORT}`)});
//default route
app.get('/',(req,res)=>{ res.send(`<h1>HOMEPAGE</h1>`)  });