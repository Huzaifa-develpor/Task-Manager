let todoModel=require('../Models/todoModel')

let todoInsert=(req,res)=>{
    let {title,description}=req.body
    let tasks=new todoModel({
        title,
        description,
        user:req.user.id
    })

    tasks.save().then((data)=>{
        res.send({ 
            status:200,
             message:'task added',
              data})
    }).catch((err)=>{
        res.send({
            status:500,
             message:'error while adding task',
              err})
    })
}

let todoList=async(req,res)=>{
let todoView=await todoModel.find({user:req.user.id});
res.send({
    status:200,
    message:'task list',
     todoView})
}

let todoDelete=async(req,res)=>{
    let id=req.params.id
    
    let delRes=await todoModel.deleteOne({
        _id:id,
        user: req.user.id
    })
    res.send({
        status:200, 
        message:'task deleted',
        delRes
    })
}




module.exports={todoInsert, todoList, todoDelete}