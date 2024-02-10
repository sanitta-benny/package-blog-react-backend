
const vlogreviews=require("../model/Reviewvlogschema")

exports.vlogreviw=async(req,res)=>{
  
    const { sname,email, dis,rating,vlogid}=req.body
    console.log(vlogid)
    try{
        const newData = new vlogreviews({
          sname,email,dis,rating, vlogid
        })
        await newData.save()
        //response
        res.status(200).json(newData)

    }
    catch(err){
        res.status(401).json("register request failed due to ", err)
    }

}

//Get all vlog reviews

exports.getVlogReview=async(req,res)=>{
    try{
        const allvlog=await vlogreviews.find()
        res.status(200).json(allvlog)
      
      }
      catch(err){
        res.status(401).json(`request failes due to ${err}`)
      }
}