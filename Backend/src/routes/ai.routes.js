const express= require("express");




const aiController=require("../controllers/ai.controller")

const router=express.Router();

const {auth}=require("../middlewares/ai.middleware")


//map
router.post("/signup",aiController.signup)


router.post("/get-review", aiController.getReview);

//testing protected routes for single middleware\
router.get("/test", auth, (req, res) => {
  res.json({
    success: true,
    message: "welcome to the protected route for test ",
  });
});


module.exports=router;