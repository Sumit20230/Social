const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const userSchema=new Schema({
    nam:{
        type:String,
        require:true
    },
    Password:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true
    }
})

module.exports=mongoose.model("user",userSchema);
