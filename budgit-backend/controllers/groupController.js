import {createGroup, addMemberToGroup, getGroupByUser,getGroupDetails,getGroupMembers} from "../models/groupModel.js";
import {findUserByEmail} from "../models/userModel.js";

export const createNewGroup = async(req,res)=>{

    console.log("req.user:", req.user);
    console.log("req.body:",req.body);

    try{
        const{name,description, members} = req.body;
        const userId = req.user.id //jwt se aayegs


        if(!name) return res.status(400).json({message:"Group name is requires"});

        if(Array.isArray(members)){
            for (let email of members){

                    const user = await findUserByEmail(email);
                    if(!user){
                        return res.status(400).json({message:`User with email ${email} does not exist`});

                    }

                    
            }
        }

        const group = await createGroup(name,description,userId);
        await addMemberToGroup(group.id, userId);

        if(Array.isArray(members)){
            for (let email of members){

                    const user = await findUserByEmail(email);

                    if(user && user.id !== userId){
                        await addMemberToGroup(group.id, user.id);
                }
            }
        }

        res.status(201).json({message:"Group created Succesfully",group});

    }catch (error){
        console.error("create group error:",error);
        res.status(500).json({message:"Something Went Wrong"});
    }
};

export const getUserGroups = async(req,res)=>{
    try{
        const user_Id= req.user.id;
        const groups = await getGroupByUser(user_Id);
        res.status(200).json(groups);
    }catch(error){
        console.error("Fetch group error:",error);
        res.status(500).json({message:"Server Error"});
    }
};


export const getSingleGroup = async(req,res)=>{
    try{
        const {id} = req.params;
        const group = await getGroupDetails(id);

        if(!group) return res.status(404).json({message:"Group not found"});

        const members = await getGroupMembers(id);


        res.status(200).json({group,members});
    }catch(error){
        console.error("Group details error",error);
        res.status(500).json({message:"Server Error"});
    }
};


