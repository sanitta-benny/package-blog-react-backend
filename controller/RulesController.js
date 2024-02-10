
const rulespack=require("../model/RulesSchema")

exports.addRules=async(req,res)=>{
 const{rule1,rule2,rule3,rule4}=req.body  
 try{
    const newData = new rulespack({
       rule1,rule2,rule3,rule4
    })
    await newData.save()
    //response
    res.status(200).json(newData)
 }
 catch(err){
    res.status(401).json("register request failed due to ", err)
 }
    
}

//get rules
exports.getRules=async(req,res)=>{
    console.log("inside")
    try{
        const getrule = await rulespack.find()
        res.status(200).json(getrule)
        
      
      }catch(err){
        res.status(401).json(`request failes due to ${err}`)
      
      }
}