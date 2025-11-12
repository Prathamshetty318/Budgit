import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import pool from "./config/db.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req,res)=>{
    res.send("Budgit Backend is running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=> console.log(`Server running on Port ${PORT}`));

pool.connect()
    .then(()=>console.log("connected to the db"))
    .catch((err => console.error("db connection failed",err)));
