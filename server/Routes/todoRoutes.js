let express=require('express');
const { todoInsert,todoList,todoDelete } = require('../Controllers/todoController');
const {registerUser,login}= require("../Controllers/authController")
const checkUser= require('../Middleware/checkUserMiddleware')
let todoRouter=express.Router()

app.get("/", (req,res)=>{
    res.send("Backend Running")
})
todoRouter.post('/add',checkUser,todoInsert)

todoRouter.get('/view',checkUser,todoList)

todoRouter.delete('/delete/:id',checkUser,todoDelete)

todoRouter.post('/registerUser',registerUser)
todoRouter.post('/login',login)


module.exports=todoRouter;