import bcrypt from 'bcryptjs';
import { findUserByEmail,createUser } from '../models/userModel.js';

export const registerUser = async(req, res) => {
    try{
        const {email,password, confirmPassword} = req.body;

        if (!email || !password||!confirmPassword){
            return res.status(400).json({message:"All fields are required"});
        }
        if (password !== confirmPassword){
            return res.status(400).json({message : "Password doesn't match"});
        }

        const existingUser = await findUserByEmail(email);

        if (existingUser){
            return res.status(400).json({message : "User already exists"});
        }

        const hashedPassword = await bcrypt.hash(password,10);

        const newUser = await createUser(email, hashedPassword);

        res.status(201).json({message : "User registered Successfully",user: newUser});
    }
    catch (error){
        console.error("Error in registerUser:",error);
        res.status(500).json({message:"Server Error"});
    }
};