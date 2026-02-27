const express=require('express');

const aiRoutes=require("./routes/ai.routes")
const cors=require('cors') //so that the resource of the express file can be accessibele by the frontend




const app = express()

const cookieParser=require("cookie-parser")
app.use(cookieParser());

app.use(cors())
app.use(express.json())   //middleware if post request is used


app.get('/',(req,res)=>{
    res.send('hello world')
})
app.use('/ai',aiRoutes)


require("./config/ai.database").connect();
module.exports=app