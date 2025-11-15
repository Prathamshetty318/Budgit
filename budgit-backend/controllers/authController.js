import bcrypt from 'bcryptjs';
import { findUserByEmail,createUser } from '../models/userModel.js';
import JWT from 'jsonwebtoken';

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

export const loginUser = async(req,res)=>{
    try{
        const {email,password} = req.body;

        if (!email || !password){
            return res.status(400).json({message:"All fields are reqiured"});
        }

        const user = await findUserByEmail(email);
        if (!user){
            return res.status(400).json({message:"Invalid Credentials"});
        }

        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(400).json({message:"Invalid Credentials"});
        }


        const token = JWT.sign(
            {id : user.id,email:user.email},
            process.env.JWT_SECRET,
            {expiresIn : "1h"}
        );

        return res.status(200).json({message:"Login Successful",
            token,
            user:{id:user.id,
                email: user.email
            },
        });

    }catch(error){
        console.error("Error in LoginUser:",error);
        res.status(500).json({meaasge:"Server Error"});
    }
};