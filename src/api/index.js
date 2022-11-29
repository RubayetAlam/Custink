import express from 'express';
import cors from 'cors';
const app=express();

app.use(cors());

app.get("/",(req,res)=>{
    res.json('Hello ');
});

app.listen(5000, ()=>console.log("API is Working"));