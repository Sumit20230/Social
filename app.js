const express=require('express');
const app=express();
const mongoose=require('mongoose');
app.use(express.json())
const router =require('./routes/user-routes');
const brouter=require('./routes/blog-routes');
mongoose.connect('mongodb+srv://root:root@cluster0.sv2ewdq.mongodb.net/social?retryWrites=true&w=majority').then(()=>{
    app.listen(3000,(req,res)=>{
        console.log("server is running 3000");
    })   
}).then(()=>console.log("connected")).catch((e)=>{
    console.log(e);
})
app.use("/api/user",router);
app.use("/api/blog",brouter);

app.get('/',(req,res)=>{
    res.send("<h1>hello </h1>")
})