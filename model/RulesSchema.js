const mongoose=require("mongoose")

const rulesSchema=new mongoose.Schema({
   
    rule1:{
        type:String,
        require:true,
      
    },
    rule2:{
        type:String,
        require:true
    },
    rule3:{
        type:String,
        require:true,
      
    },
    rule4:{
        type:String,
        require:true
    }
})




const rules=mongoose.model("rules",rulesSchema)
module.exports=rules