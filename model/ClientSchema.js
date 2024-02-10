//import mongoose

const mongoose=require("mongoose")

//create schema by creating object of schema class object in mongoose

const clientSchema=new mongoose.Schema(
    {
        username:{
            type:String,
            require:true
            

        },
        email:{
            type:String,
            require:true,
            unique:true
        },
        password:{
            type:String,
            require:true
        }
        ,
    userId:{
        type:String,
        require:true
    }

    }
)















//creation of model
const client=mongoose.model("client",clientSchema)
module.exports=client
