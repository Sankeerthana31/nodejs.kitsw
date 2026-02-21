import express from "express";
const app = express();
app.listen(8080);
app.get("/",(req,res) => {
    res.send(req.headers.authorization);//in that in authorization in bearer token give token value
})