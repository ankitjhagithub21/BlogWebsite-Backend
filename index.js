const express = require('express')
const dotenv = require('dotenv')
const app = express()

const mongoDb = require('./conn')
const router = require("./routes/blogRoute")
dotenv.config()

const port = process.env.PORT || 8080
const dburl = process.env.DB_URI
//database connect
mongoDb(dburl)

//middlewares
app.use(express.json())
app.use('/api',router)

app.get("/",(req,res)=>{
    res.send({"message":"Hello world"})
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})