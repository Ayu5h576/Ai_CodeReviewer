const jwt=require("jsonwebtoken")
require("dotenv").config();


//authentictaion middleware
exports.auth=(req,res,next)=>{
     try {
       // Extract token (from body, header, or cookies)
       const token =
         req.body.token || //import import bosy parser
         req.header("Authorization")?.replace("Bearer ", "") || //most important
         req.cookies?.token; //must import cookie parser

       if (!token) {
         return res.status(401).json({
           success: false,
           message: "Token missing",
         });
       }

       try {
         const decoded = jwt.verify(token, process.env.JWT_SECRET);
         console.log(decoded);

         req.user = decoded; // attach user info to req
       } catch (error) {
         return res.status(401).json({
           success: false,
           message: "Token is invalid",
         });
       }

       next();
     } catch (error) {
       return res.status(500).json({
         success: false,
         message: "Something went wrong while verifying the token",
       });
     }
}