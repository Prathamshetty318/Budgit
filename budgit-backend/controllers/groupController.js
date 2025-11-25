import {createGroup, addMemberToGroup, getGroupByUser,getGroupDetails} from "../models/groupModel.js";


export const createNewGroup = async(req,res)=>{

    console.log("req.user:", req.user);

    try{
        const{name,description} = req.body;
        const userId = req.user.id //jwt se aayegs

        if(!name) return res.status(400).json({message:"Group name is requires"});

        const group = await createGroup(name,description,userId);
        await addMemberToGroup(group.id, userId);

        res.status(201).json({message:"Group created Succesfully",group});

    }catch (error){
        console.error("create group error:",error);
        res.status(500).json({message:"Something Went Wrong"});
    }
};

export const getUserGroups = async(req,res)=>{
    try{
        const userId= req.user.body;
        const groups = await getGroupByUser(userId);
        res.json(groups);
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

        res.json(group);
    }catch(error){
        console.error("Group details error",error);
        res.status(500).json({message:"Server Error"});
    }
};
