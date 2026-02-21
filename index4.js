import express from "express";
const app = express();
app.listen(8080);
app.get("/",(req,res) => {
    res.send("Hello world")
})

app.get("/:id",(req,res) => {
    const id=req.params.id
    res.send(id)//give localhost:8080/2(anyvalue)
})
app.get("/:id/:name",(req,res) => {
    const id=req.params.id
    const name=req.params.name
    res.send(id+name)//give localhost:8080/2/sai
})
app.get("/id/:id/name/:name",(req,res) => {
    const id=req.params.id
    const name=req.params.name
    res.send(id+name)//give localhost:8080/2/sai
})
