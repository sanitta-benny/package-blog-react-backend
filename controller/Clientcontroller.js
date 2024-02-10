const client = require("../model/ClientSchema")

//importing json web token

const jwt =require("jsonwebtoken")


exports.register=async(req,res)=>{
console.log("inside clientcontroller register")
const userId = req.payload

const {username,email,password}=req.body
try{
  const existingUser= await client.findOne({email})
  if(existingUser)  {
    res.status(406).json("Account already exist please login" )
  }
  else{
    const newClient=new client({
        username,
        email,
        password,
        userId
    }) 
   await newClient.save()
    res.status(200).json("successfully registered") 
  }
}
catch(err){
    res.status(401).json('Register request failed due to',err)
}
}

// client login
exports.clientlogin=async(req,res)=>{
console.log("inside client login")
const {email,password}=req.body
try{
const existingUser=await client.findOne({email,password}) 
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
//get registeration
exports.getRegister=async(req,res)=>{
  const userId=req.payload


    try{
        const getUserProject = await client.find()
        res.status(200).json(getUserProject)
        console.log(getUserProject)
        
    
    }catch(err){
        res.status(401).json(`request failes due to ${err}`)
    
    }
}
//update
exports.updateReg=async(req,res)=>{
  const {id}=req.params
  const userId = req.payload

  const {username,email,password}=req.body
  try{
    const updateProject=await client.findByIdAndUpdate({_id:id},{username,email,password,userId},{new:true})
    await updateProject.save()
    res.status(200).json(updateProject)
  }
  catch(err){
    res.status(401).json(err)
  }
}