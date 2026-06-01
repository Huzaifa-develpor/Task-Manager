const jwt= require("jsonwebtoken")

const checkUser=(req,res,next)=>{
    try{
    const authHeader= req.header('Authorization')
    if(!authHeader){
        res.send({
        message:"No token Provided"
        })
    }
    const token = authHeader.replace("Bearer","")
    const decoded =jwt.verify(token,process.env.SECRET_KEY)
    req.user= decoded

    next()

} catch(err){
    res.send({
        message:"Invalid Token"
    })
}
}

module.exports=checkUser
