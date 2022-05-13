const userSchema=require("../models/usersModels")
// const fs=require("fs")

exports.getallmovies=async(req,res)=>{
    const data=await userSchema.find()
    console.log(data)
    res.status(200).json({
        status:"ok",
        message:data
    })
}
exports.createmovies=async(req,res)=>{
    // const jsondata=Json.parse(fs.readFileSync('./jsondata.json',utf-8))
    const data=await userSchema.create(req.body)
    console.log("hi")
    console.log(req.data,req.body)
}