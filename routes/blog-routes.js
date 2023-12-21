const express=require('express');
const brouter=express.Router();
const {allposts,addBlog,updateBlog,getbyid,deletebyid}=require('../controllers/blog-controller');
brouter.get("/allposts",allposts);
brouter.post('/add',addBlog);
brouter.put('/blogUpdate/:id',updateBlog);
brouter.get('/t/:id',getbyid);
brouter.delete('/deletebyid/:id',deletebyid);
module.exports=brouter;