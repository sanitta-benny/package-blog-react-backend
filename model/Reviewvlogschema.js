const mongoose=require("mongoose")

//create schema by creating object of schema class object in mongoose

const vlogreviewSchema=new mongoose.Schema(
    {
        sname:{
            type:String,
            require:true
            

        },
        email:{
            type:String,
            require:true
        },
        dis:{
            type:String,
            require:true
         
        },
        rating:{
            type:String
        },
        vlogid:{
            type:String,
            require:true 
        }

    }
)















//creation of model
const vlogreviews=mongoose.model("vlogreviews",vlogreviewSchema)
module.exports=vlogreviews