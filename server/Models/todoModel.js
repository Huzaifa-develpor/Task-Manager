let mongoose= require('mongoose')
let todoSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users",
        required: true  
    }


});

let todoModel=mongoose.model('todo',todoSchema)

module.exports=todoModel;
