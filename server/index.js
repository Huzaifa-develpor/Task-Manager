let express=require('express')
let app= express()
let mongoose=require('mongoose')
let cors=require('cors')
let cookieParser= require('cookie-parser')
require('dotenv').config()
const todoRouter=require('./Routes/todoRoutes')
app.use(express.json())
app.use(
  cors({
    origin: "https://task-manager-pscm.vercel.app",
    credentials: true,
  })
);
app.use(cookieParser())

app.use('/web/todos',todoRouter)

mongoose.connect(process.env.dbURL).then(()=>{
    console.log('connected to DB')
    app.listen(process.env.port,()=>{
        console.log('server is running')
    })
})

