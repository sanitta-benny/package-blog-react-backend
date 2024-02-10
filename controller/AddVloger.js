
const vlogeradds =require("../model/VlogeraddSchema")

exports.AddVloger=async(req,res)=>{
    console.log("inside vloger add request")
    const userId = req.payload
    console.log(userId)
    const{place,title,titleimg,date,head1,img1,dis1,head2,img2,dis2,head3,img3,dis3,head4,img4,dis4,ur1,url2,url3,url4,vName}=req.body
/*     console.log(`${place},${title},${titleimg},${date},${head1},${img1},${dis1},${head2},${img2},${dis2},${head3},${img3},${dis3},${head4},${img4},${dis4},${ur1},${url2},${url3},${url4}`) */
    try{
      /*   const existingUser= await admin.findOne({title})
        if(existingUser)  {
          res.status(406).json("Account already exist please login" )
        }
        else{ */
          const addvloger=new vlogeradds({
            place,title,titleimg,date,head1,img1,dis1,head2,img2,dis2,head3,img3,dis3,head4,img4,dis4,ur1,url2,url3,url4,vName,userId
             
          }) 
         await addvloger.save()
          res.status(200).json(addvloger) 
       /*  } */
      }
      catch(err){
          res.status(401).json('Register request failed due to',err)
      }


}
//all vlog data
exports.getAllvlog=async(req,res)=>{
  console.log("inside allvlog")
  const searchKey = req.query.search
  console.log(searchKey)
  const query={
    place:{
        //regular expression , option--to remove case sensitive property
        $regex:searchKey, $options:'i'
    }
}
try{
  const allvlog=await vlogeradds.find(query)
  res.status(200).json(allvlog)

}
catch(err){
  res.status(401).json(`request failes due to ${err}`)
}
}
//vlog content

/* exports.getVlogcontent=async(req,res)=>{
  const searchKey = req.query.search
  console.log(searchKey)
  try{
    const vlogcon=await vlogeradds.find({_id:searchKey})
    res.status(200).json(vlogcon)

  }
  catch(err){
    res.status(401).json('request failes due to', err)
  }
} */

exports.vlogdatass =async(req,res)=>{
console.log("inside vlog con")
try{
  const vlogProject = await vlogeradds.find()
  res.status(200).json(vlogProject)
  

}catch(err){
  res.status(401).json(`request failes due to ${err}`)

}
}

//vlogerproject
exports.getvlogerdata=async(req,res)=>{
  const userId=req.payload


  try{
      const getvlogerProject = await vlogeradds.find({userId})
      res.status(200).json(getvlogerProject)
      
  
  }catch(err){
      res.status(401).json(`request failes due to ${err}`)
  
  }  
}
//vlog delete
exports.deleteVlogProject=async(req,res)=>{
  const {id}=req.params
  try{
      const removeProject=await vlogeradds.findByIdAndDelete({_id:id})
      res.status(200).json(removeProject)
  }
  catch(err){
      res.status(401).json(err)
  }
}

//edit vlogs

exports.editVloger=async(req,res)=>{
 
  const {id}=req.params
  const userId = req.payload
  const{place,title,titleimg,date,head1,img1,dis1,head2,img2,dis2,head3,img3,dis3,head4,img4,dis4,ur1,url2,url3,url4,vName}=req.body
  console.log(`${title},${date},${dis1},${dis2},${dis3},${dis4},${head1},${head2},${head3},${head4},${img1},${img2},${img3},${img4},${place},${titleimg},${ur1},${url2},${url3},${url4},${vName}`)
  try{
    const updateProject=await vlogeradds.findByIdAndUpdate({_id:id},{place,title,titleimg,date,head1,img1,dis1,head2,img2,dis2,head3,img3,dis3,head4,img4,dis4,ur1,url2,url3,url4,vName,userId},{new:true})
    await updateProject.save()
    res.status(200).json(updateProject)
  }
  catch(err){
    res.status(401).json(err)
  }

}

//all vlogs

exports.getallVlogs=async(req,res)=>{
  try{
    const allvlog=await vlogeradds.find()
    res.status(200).json(allvlog)
  
  }
  catch(err){
    res.status(401).json(`request failes due to ${err}`)
  }
}







