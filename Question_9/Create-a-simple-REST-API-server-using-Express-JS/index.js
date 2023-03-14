const express = require("express")
const app = express()

app.get("/", (req,res)=>{
    res.send("Hello world")
})

app.post("/", (req,res)=>{
    console.log(req.body)

    res.send(req.body)
})


app.listen(3000, ()=>{
    console.log("Listening on port http://localhost:3000")
})