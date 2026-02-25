const aiService=require("../services/ai.service")



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
