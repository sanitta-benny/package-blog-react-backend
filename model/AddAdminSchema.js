const mongoose=require("mongoose")


const addAdminSchema=new mongoose.Schema({
    mainImg:{
        type:String,
        require:true
    },
    days:{
        type:String,
        require:true
    },
    theme:{
        type:String,
        require:true
    },
    place:{
        type:String,
        require:true
    },
    packName:{
        type:String,
        require:true
    },
    actualAmount:{
        type:String,
        require:true
    },
    disAmount:{
        type:String,
        require:true
    },
    discount:{
        type:String,
        require:true
    },
    meals:{
        type:String,
        require:true
    },
    accomodation:{
        type:String,
        require:true
    },
    transport:{
        type:String,
        require:true
    },
    team:{
        type:String,
        require:true
    },
    high1:{
        type:String,
        require:true
    },
    dis1:{
        type:String,
        require:true
    },
    high2:{
        type:String,
        require:true
    },
    dis2:{
        type:String,
        require:true
    },
    high3:{
        type:String,
        require:true
    },
    dis3:{
        type:String,
        require:true
    },
    img1:{
        type:String,
        require:true
    },
    img2:{
        type:String,
        require:true
    },
    img3:{
        type:String,
        require:true
    },
    discription:{
        type:String,
        require:true
    },
    map:{
        type:String,
   
    },
    range:{
        type:String,
        require:true
    }
   




})
const addPackages=mongoose.model("addPackages",addAdminSchema)

module.exports=addPackages