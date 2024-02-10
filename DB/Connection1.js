const mongoose=require("mongoose")


//generate connection string
const connectionString=process.env.DATABASE
console.log(connectionString)

//connect to mongodb using mangoose

mongoose.connect(connectionString).then((res)=>{
    console.log('mongodb connected successfully')
}).catch((err)=>{
    console.log(`mongodb connection failed due to : ${err}`)
})
