const express = require("express")
const app = express()

const port = 3000;

app.get("/",(req,res) => {
    res.set({"Content-Type": "text/html; charset=utf-8"});
    res.end("Express Start")
});

app.listen(port, ()=>{
    console.log(`Start Server: use ${port}`);
});