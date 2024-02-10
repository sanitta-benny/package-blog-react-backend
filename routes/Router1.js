const express=require("express")

const clientcontroller=require("../controller/Clientcontroller")
const vlogcontroller=require("../controller/Vlogercontroller")
//admin register
const adminController=require("../controller/Admincontroller")

//admin add data
const adminData=require("../controller/AddAdmincontroller")
const AdminAddMiddlewaer = require("../middlewear/AdminAdd")
/* vloger add */
const vlogeraddController=require("../controller/AddVloger")
/* vlog review */
const vlogReview=require("../controller/Addvlogreview")

/* order controller */
const ordercontroller=require("../controller/Order")

//creating object of router class
const router=new express.Router()

//import multer
const multerconfig=require("../middlewear/multerMiddlewaer")






//setting path for client register
router.post("/client/register",clientcontroller.register)
//setting path for client login
router.post("/client/login",clientcontroller.clientlogin)
//path for vlog register
router.post("/vloger/register",vlogcontroller.vlogregister)

//path for vloger login
 router.post("/vloger/login",vlogcontroller.vlogerLogin) 

 //admin login
 router.post("/admin/register",adminController.adminregister)
 //admin login
 router.post("/admin/login",adminController.adminLogin)

 //addpackages
 router.post("/admin/add/data",multerconfig.single('mainImg'), adminData.addData)

 //rules
 const rulesController=require("../controller/RulesController")


 router.post("/vloger/add/data",AdminAddMiddlewaer,vlogeraddController.AddVloger)

 router.get("/vloger/allproject",AdminAddMiddlewaer,vlogeraddController.getAllvlog)
/* 
 router.get("/vloger/allcon",vlogeraddController.getVlogcontent)  */

 router.get("/datavlog",vlogeraddController.vlogdatass)
 router.post("/vlog/review",vlogReview.vlogreviw)
 //all packages by price range
  router.get("/package/data",adminData.allpackages) 

  //all package with theme
  router.get("/package/theme/data",adminData.allpackThemes)

  //all package
  router.get("/package/alldata",adminData.pack)

//GET VLOGER PROJECT BY ID 
router.get("/vlogs/vloguser",AdminAddMiddlewaer,vlogeraddController.getvlogerdata)

//delete vlogs
router.delete("/vlog/delete/:id",AdminAddMiddlewaer,vlogeraddController.deleteVlogProject)

//edit vlogs

router.put("/vlog/edit/:id",AdminAddMiddlewaer,vlogeraddController.editVloger)

//add rules
router.post("/rules",rulesController.addRules)

router.get("/get/rules",rulesController.getRules)
router.post("/order",ordercontroller.postOrders)

//delete pakages
router.delete("/pack/delete/:id",AdminAddMiddlewaer,adminData.deletepack)

  //all package
  router.get("/order/alldata",ordercontroller.getAllOrders)

  //delete order by admin
  router.delete("/order/admin/delete/:id",ordercontroller.deleteOrder)

  //get all vlogs
  router.get("/vlogs/alldata/place",vlogeraddController.getallVlogs)

  //get all reviews
  router.get("/vlogs/alldata/Review",vlogReview.getVlogReview)

    //get client registeration
    router.get("/client/register/data23",AdminAddMiddlewaer,clientcontroller.getRegister)
    router.put("/reg/edit/:id",AdminAddMiddlewaer,clientcontroller.updateReg)

//get vlog register
router.get("/vlog/register/data",vlogcontroller.vlogReg)

//edit vlog reg
router.put("/reg/edit/vlog/:id",AdminAddMiddlewaer,vlogcontroller.editVlogReg)

  //data by category
/*   router.get("/pack/cat",AdminAddMiddlewaer,adminData.getCategory) */

module.exports=router