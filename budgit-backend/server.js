import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import pool from "./config/db.js";
import authRoutes from './routes/authRoutes.js';
import groupRoutes from "./routes/groupRoutes.js"
import expenseRoutes from "./routes/expenseRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Budgit Backend is running");
});

pool.connect()
    .then(() => console.log("connected to the db"))
    .catch(err => console.error("db connection failed", err));

    app.use('/api/auth', authRoutes);
    app.use("/api/groups",groupRoutes);
    app.use("/api/expenses",expenseRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on Port ${PORT}`));
