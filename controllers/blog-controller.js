const Blog=require('../models/blog');
exports.allposts=async(req,res)=>{
let allposts;
try{
allposts= await Blog.find({});
}
catch(e)
{
    console.log(e);
}
if(!allposts)
return res.status(404).json({message:"plz upload some post"})
return res.json({allposts});

}
exports.addBlog= async (req,res)=>{
const {title,image,description,people}=req.body;
const nu= new Blog({
 title,
 image,
 description,
 people
})
try{nu.save()}catch(e){
    console.log(e);
}
res.json({nu});
},
exports.updateBlog=async(req,res)=>{
const {title,description}=req.body;
const id=req.params.id;
let data;
try{
data= await Blog.findByIdAndUpdate(id,{title,description})
}
catch(e)
{
    console.log(e);
}
data.save();
return res.json({Blog});

}
exports.getbyid=async(req,res)=>{
let data;
const id=req.params.body;
try{
data=await Blog.findById(id);
}catch(e)
{
console.log(e);
}
if(!data)
return res.json({message:"cffcsfcfsf"})
return res.send({data});
},
exports.deletebyid=async(req,res)=>{
    let data;
    const id=req.params.id;
    try{
       data=Blog.findByIdAndDelete(id);
    }catch(e)
    {
console.log(e);
    }
    if(!data)
return res.json({message:"no data found"});
return res.json({Blog});

}