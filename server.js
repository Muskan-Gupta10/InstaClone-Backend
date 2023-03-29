const express=require("express")
const mongoose=require("mongoose")
const app=express()
const dotenv=require("dotenv")
const cors=require("cors")
app.use(express.json())
app.use(cors({
    origin:"https://instaclone-frontend-a3oh.onrender.com"
}))
const PORT=process.env.PORT || 8080
dotenv.config()
mongoose.connect(process.env.MONGO_URI)
mongoose.connection.on("connected",()=>{
    console.log("congrats!!! mongodb connected successfully")
})
mongoose.connection.on("error",(err)=>{
    console.log("sorry mongodb not connected",err)
})
app.use(require("./routes/Post"))
app.listen(PORT,()=>{
console.log("app runnning on port 8080")
})
