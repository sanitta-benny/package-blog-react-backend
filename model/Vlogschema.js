const mongoose=require("mongoose")


const VlogSchema= new mongoose.Schema({
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
})













const vloger=mongoose.model("vlogers",VlogSchema)
module.exports=vloger




