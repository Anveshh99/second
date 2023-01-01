const express=require("express");
const app= express();
const path=require("path");

app.use(express.static(path.join(__dirname,"public")));

app.get("/",(req,resp)=>{
  resp.sendFile(__dirname+"/index.html");
})

app.get("/home",(req,resp)=>{
    resp.send("<h1>hello java</h1>");
})

app.listen(8000,function(){
console.log("Server is running at port no 8000");
});