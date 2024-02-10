const addPackages = require("../model/AddAdminSchema")

exports.addData = async (req, res) => {
    console.log("admin add project request")
       
    

        const { days, theme, place, packName,
            actualAmount, disAmount, discount, meals,
            accomodation, transport, team, high1, dis1,
            high2, dis2, high3, dis3, img1, img2, img3,
            discription, map,range } = req.body
     const mainImg = req.file.filename
  //we want file name because we store file name in mongodb
  /*   console.log(mainImg) */

  
    try {

        const existingData = await addPackages.findOne({ packName })
        if (existingData) {
            res.status(406).json("project already exist upload new project")



        }
        else {
            const newData = new addPackages({
                mainImg   ,days, theme, place, packName,
                actualAmount, disAmount, discount, meals,
                accomodation, transport, team, high1, dis1,
                high2, dis2, high3, dis3, img1,img2, img3, 
                discription, map,range
            })
            await newData.save()
            //response
            res.status(200).json(newData)

        }
    }
    catch (err) {
        res.status(401).json("register request failed due to ", err)


    }




}
//all packages with price range
exports.allpackages=async(req,res)=>{
    const searchKey = req.query.search
    console.log(searchKey)

  try{
    const alldata=await addPackages.find({range:searchKey})
    res.status(200).json(alldata)
    console.log(alldata)
  
  }
  catch(err){
    res.status(401).json(`request failes due to ${err}`)
  }
}

//all packages with theme
exports.allpackThemes=async(req,res)=>{
    const searchKey = req.query.search
    console.log(searchKey)

  try{
    const alldata=await addPackages.find({theme:searchKey})
    res.status(200).json(alldata)
    console.log(alldata)
  
  }
  catch(err){
    res.status(401).json(`request failes due to ${err}`)
  }
}

//all packages
exports.pack=async(req,res)=>{
    try{
        const alldata=await addPackages.find()
        res.status(200).json(alldata)
        console.log(alldata)
      
      }
      catch(err){
        res.status(401).json(`request failes due to ${err}`)
      }
}

//delete packages
exports.deletepack=async(req,res)=>{
    const {id}=req.params
  try{
      const removeProject=await addPackages.findByIdAndDelete({_id:id})
      res.status(200).json(removeProject)
  }
  catch(err){
      res.status(401).json(err)
  } 
}



//by category
exports.getCategory=async(req,res)=>{
    const searchKey = req.query.search
    console.log(searchKey)

    


    try{
        const allProject = await addPackages.find({theme:searchKey})
        res.status(200).json(allProject)
        
    
    }catch(err){
        res.status(401).json(`request failes due to ${err}`)
    
    }
}

