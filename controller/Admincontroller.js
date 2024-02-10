const admin=require("../model/AdminSchema")
const jwt=require("jsonwebtoken")


exports.adminregister=async(req,res)=>{
console.log("inside admin register")
const {email,password}=req.body
try{
    const existingUser= await admin.findOne({email})
    if(existingUser)  {
      res.status(406).json("Account already exist please login" )
    }
    else{
      const newadmin=new admin({
       
          email,
          password
      }) 
     await newadmin.save()
      res.status(200).json("successfully registered") 
    }
  }
  catch(err){
      res.status(401).json('Register request failed due to',err)
  }
}

exports.adminLogin=async(req,res)=>{
    console.log("inside admin login")
    const {email,password}=req.body
    try{
    const existingUser=await admin.findOne({email,password}) 
    if(existingUser){
        const token=jwt.sign({userId:existingUser._id},"secretekey123")
        res.status(200).json({existingUser,
        token})
    }
    else{
        res.status(404).json("invalid email or password")
    }
    }
    catch(err){
        res.status(401).json("login request is failed due to",err)
    }
}

//edit profile
exports.editadmin=async(req,res)=>{
    
}