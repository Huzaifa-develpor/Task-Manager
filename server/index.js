const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const cookieParser = require('cookie-parser')
require('dotenv').config()

const todoRouter = require('./Routes/todoRoutes')

const app = express()

app.use(express.json())
app.use(cors())
app.use(cookieParser())

// Cache the connection across serverless invocations
let isConnected = false

async function connectDB() {
    if (isConnected) return

    try {
        const db = await mongoose.connect(process.env.DB_URL, {
            serverSelectionTimeoutMS: 10000,
        })
        isConnected = db.connections[0].readyState === 1
        console.log('connected to DB')
    } catch (err) {
        console.error('Database connection failed:', err)
        throw err
    }
}

// Ensure DB is connected before any route handles a request
app.use(async (req, res, next) => {
    try {
        await connectDB()
        next()
    } catch (err) {
        res.status(500).json({ status: 500, message: 'Database connection failed' })
    }
})

app.use('/web/todos', todoRouter)

// Local development: run with `node index.js` or `npm run dev`
if (require.main === module) {
    connectDB().then(() => {
        app.listen(process.env.PORT || 3000, () => {
            console.log('server is running')
        })
    })
}

module.exports = app