const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const blogSchema=new Schema({
    title:{
      type:String,
      require:true
    },
    description:{
        type:String,
        require:true,
    },
    image:{
        type:String,
        require:true
    },
    people:{
        type:String,
        require:true
    }
})
module.exports=mongoose.model("Blog",blogSchema);