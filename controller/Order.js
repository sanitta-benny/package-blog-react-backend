
const orderSchema=require("../model/orderSchema")
exports.postOrders=async(req,res)=>{
    const{rule1,rule2,rule3,rule4,oname,email,packName,date}=req.body  
    try{
       const newData = new orderSchema({
          rule1,rule2,rule3,rule4,oname,email,packName,date
       })
       await newData.save()
       //response
       res.status(200).json(newData)
    }
    catch(err){
       res.status(401).json("register request failed due to ", err)
    } 
}

//get all orders
exports.getAllOrders=async(req,res)=>{
   try{
      const alldata=await orderSchema.find()
      res.status(200).json(alldata)
      console.log(alldata)
    
    }
    catch(err){
      res.status(401).json(`request failes due to ${err}`)
    }
}

//order delete by admin

exports.deleteOrder=async(req,res)=>{
   const {id}=req.params
  try{
      const removeProject=await orderSchema.findByIdAndDelete({_id:id})
      res.status(200).json(removeProject)
  }
  catch(err){
      res.status(401).json(err)
  } 
}