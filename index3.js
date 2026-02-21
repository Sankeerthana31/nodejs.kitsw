import express from "express";
const app = express();
app.listen(8080);

app.use(express.json())
app.get("/morning", (req, res) => {
  res.send("good morning");
});
app.get("/evening", (req, res) => {
  res.send("good evening");
});
app.post("/",(req,res)=>{
    console.log(req.body);
    res.send("this is post request");
})