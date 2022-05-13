const express = require ('express')
const dotenv = require ('dotenv').config()
const {connectDB} = require('./config/db')
const cors = require('cors')
const Movie=require("./routes/movieroute")
connectDB()

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/movieservice',Movie)


app.listen(PORT,()=>{
    console.log("server is running")
})