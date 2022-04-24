const express=require('express');
const app=express();

const rateLimit=require('express-rate-limit')

const limiter=rateLimit({
    max:10,
    windowMs:1000*60
})
app.get("/limit",limiter,async(req,res)=>{
    try {
        return res.send("Hello")
    } catch (error) {
        return res.send(error.message);
    }
})


app.listen(4000,async function(){
    console.log("listening on port 4000")
})