const express=require('express');

const aiRoutes=require("./routes/ai.routes")
const cors=require('cors') //so that the resource of the express file can be accessibele by the frontend

const app = express()

app.use(cors())
app.use(express.json())   //middleware if post request is used


app.get('/',(req,res)=>{
    res.send('hello world')
})
app.use('/ai',aiRoutes)

module.exports=app