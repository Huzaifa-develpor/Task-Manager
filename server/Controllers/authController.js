const userModel= require("../Models/authModel")
const bcrypt= require("bcrypt")
const generateToken= require("../Services/userTokenService")

const registerUser = async (req,res)=>{
    try{
     userInfo=req.body
    const password= await bcrypt.hash(userInfo.password,10)
    userInfo.password=password
    
    const data=await userModel.create(userInfo)
    return res.send({
        status:200,
        message:"User Data saved"
    }) 
} catch(err){
    return res.send({
        status:500,
        message:"Server Error"
        })
}
}

const login = async (req, res) => {
  const userData = req.body;

  try {
    const user = await userModel.findOne({ email: userData.email });

    if (!user) {
      return res.send({
        status: "failed",
        message: "User Not Found"
      });
    }

    const isMatch = await bcrypt.compare(userData.password, user.password);

    if (!isMatch) {
      return res.send({
        status: "failed",
        message: "Invalid Password"
      });
    }

    const token = generateToken(user._id);
    

    return res.send({
      status: "success",
      message: "Login Successful",
      token
    });

  } catch (err) {
    return res.send({
      status: "error",
      message: "Server Error"
    });
  }
};

module.exports={registerUser,login}