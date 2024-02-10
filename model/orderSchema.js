const mongoose=require("mongoose")

const orderSchema=new mongoose.Schema({
   
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
    },
    oname:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    packName:{
        type:String,
        require:true
    },
    date:{
        type:String,
        require:true
    }
})




const orders=mongoose.model("orders",orderSchema)
module.exports=orders