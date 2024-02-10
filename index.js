//1)
require("dotenv").config()



//import connection.js file /mangoose
require("./DB/Connection1")



//2)
const express =require("express")
//3)
const cors=require("cors")
/* trserver.use(router) */
const router=require("./routes/Router1")



//4)server creation
trserver=express()

//importing router

//5)
trserver.use(cors())
//6)
trserver.use(express.json())




trserver.use(router)

trserver.use('/uploads',express.static('./uploads'))
//use router






//7)setting port
const PORT =4000 || process.env.PORT

//8)
trserver.listen(PORT,()=>{
    console.log(`server successfully at port number ${PORT}`)
})

trserver.get('/',(req,res)=>{
    res.send('<h1 style="color:blue">project fair server running successfully and waiting for client request</h1>')
})
