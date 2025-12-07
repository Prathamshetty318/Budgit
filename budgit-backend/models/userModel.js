import pool from "../config/db.js";

export const findUserByEmail = async(email)=>{
    const result = await pool.query("Select id,email from users where email = $1",[email]);
    return result.rows[0];
};

export const createUser = async(email, hashedPassword)=>{
    const result = await pool.query("Insert into users(email,password) values ($1,$2) RETURNING id,email,created_at",[email,hashedPassword]);
    return result.rows[0];
}