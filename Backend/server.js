require('dotenv').config()

const app=require('./src/app')


app.listen(3000,()=>{                    //this callback function start when the server starts
console.log("server is running on port 3000")
}) 