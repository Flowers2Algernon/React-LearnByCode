import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.urlencoded({extended:true}));

function logging(req,res,next){
  req.streetName = req.body.street;
  req.petName = req.body.pet;
  next();
}

app.use(logging);

app.get("/",(req,res,next)=>{
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit",(req,res,next)=>{
  console.log(req.body);
  res.send(`<h1>Your band name is:</h1>\n<h2>${req.streetName}${req.petName}</h2>`);
  next();
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
