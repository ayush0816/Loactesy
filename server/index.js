const express=require('express');
const db=require("./database/db");
const cors=require("cors");
const app=express();
const port='8081';

app.use(express.json());
app.use(cors());

app.listen(port,()=>{
    console.log("Listening");
});