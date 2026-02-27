const aiService=require("../services/ai.service")
const bcrypt = require("bcrypt");
const User = require("../models/ai.model");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.signup=async(req,res)=>{
  try {
    //get data
    const{name,email,password}=req.body;

    //check if user already exist
    const existingUser=await User.findOne({email})

    if(existingUser){
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }


    //secure password
    let hashedPassword;
    try {
      hashedPassword=await bcrypt.hash(password,10);
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Error in hashing password",
      });
    }


    //create entry for user
    await User.create({
      name,
      email,
      password:hashedPassword,
    })


    return res.status(201).json({
      success: true,
      message: "User created successfully",
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "User cannot be registered",
  })
}
}

module.exports.getReview = async(req, res) => {
  //controller
  // const prompt = req.query.prompt;   //for get request
const code = req.body.code;    //for post request
  if (!code) {
    return res.status(400).send("code is required");
  }

const response=await aiService(code);
res.send(response)
};
