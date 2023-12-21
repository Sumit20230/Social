const user=require('../models/user');
exports.getAlluser= async(req,res)=>{
try{
const users=await user.find({});
res.status(400).json({data:users});
}
catch(e){
    console.log(e);
}
},

exports.signup= async(req,res)=>{
const {nam,email,passsword}=req.body;
let exist1,exist2;
try{
exist1=user.findOne({email});
exist2=user.findOne({nam})

}catch(e){
    console.log(e);

}
// if(exist1 && exist2)
// return res.status(400).json({message:"user already exist"})
const nu= new user({
    nam,
    email,
    passsword,
    blogs:[]

})
try{nu.save()}catch(e){
    console.log(e);
}
return res.status(200).json({nu})
},
exports.login=async(req,res)=>{
const {nam,email,passsword}=req.body;
let data;
try{
data= await user.findOne({email});
}
catch(e){
    console.log(e);

}
if(!data)
return res.status(404).json({message:"user not found"});
return res.status(200).json({message:"login succeessfully"});
}
