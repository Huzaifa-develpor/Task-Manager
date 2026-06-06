const jwt = require("jsonwebtoken")

const checkUser = (req, res, next) => {
    try {
        const authHeader = req.header('Authorization')
        
        if (!authHeader) {
            return res.send({ message: "No token Provided" }) // return bhi add kiya
        }
        
        const token = authHeader.replace("Bearer ", "").trim() // ✅ FIX
        const decoded = jwt.verify(token, process.env.SECRET_KEY)
        req.user = decoded

        next()

    } catch (err) {
        return res.send({ message: "Invalid Token" })
    }
}

module.exports = checkUser