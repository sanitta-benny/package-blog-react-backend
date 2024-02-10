const vloger = require("../model/Vlogschema")
const jw=require("jsonwebtoken")



exports.vlogregister=async(req,res)=>{
console.log("inside vloger controller")
const {username,email, password}=req.body
try{
const existing=await vloger.findOne({email})
if(existing){
    res.status(406).json("account is already exist please login")
}
else{
    const newClient=new vloger({
        username,
        email,
        password
    })
   await newClient.save()
    res.status(200).json("register succuessfully")

}
}
catch(err){
    res.status(401).json('Register request failed due to',err)

}
}

exports.vlogerLogin=async(req,res)=>{
    console.log("inside vloger login")
    const {email,password}=req.body
    try{
    const existingUser=await vloger.findOne({email,password}) 
    if(existingUser){
        const token=jw.sign({userId:existingUser._id},"secretekey123")
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

//get vlog register
exports.vlogReg=async(req,res)=>{
    try{
        const getUserProject = await vloger.find()
        res.status(200).json(getUserProject)
        console.log(getUserProject)
        
    
    }catch(err){
        res.status(401).json(`request failes due to ${err}`)
    
    }  
}

//edit vlog 
exports.editVlogReg=async(req,res)=>{
    const {id}=req.params
    const userId = req.payload
  
    const {username,email,password}=req.body
    try{
      const updateProject=await vloger.findByIdAndUpdate({_id:id},{username,email,password,userId},{new:true})
      await updateProject.save()
      res.status(200).json(updateProject)
    }
    catch(err){
      res.status(401).json(err)
    } 
}

