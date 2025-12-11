import { createExpense,addExpenseSplit,getExpenseWithSplits,getExpenseByGroup } from "../models/expenseModel.js";
import {getGroupMembers} from "../models/groupModel.js";

export const addExpense = async(req,res)=>{
    try{
        const {groupId, description, amount} = req.body;
        const userId = req.user.id;

        if(!groupId || !description || !amount){
            return res.status(400).json({mesage:"All Fields are required"});
        }


        const members = await getGroupMembers(groupId);

        if(!members || members.length ===0){
            return res.status(400).json({message: "No Members found in this group"});
        }

        const expense = await createExpense(groupId,description,amount,userId);

        const total = Number(amount);
        const count=members.length;
        const rawShare = total/count;

        const baseShare = Math.floor(rawShare *100)/100;
        let remaining = Number((total - baseShare * count).toFixed(2));

        const splits =[];

        for (let i = 0; i < members.length; i++) {
            let share = baseShare;

            if (remaining > 0) {
                share = Number((share + 0.01).toFixed(2));
                remaining = Number((remaining - 0.01).toFixed(2));
            }

        await addExpenseSplit(expense.id, members[i].id, share);

        splits.push({ user_id: members[i].id,email: members[i].email,share_amount: share,
        });
    }

    res.status(201).json({
        message: "Expense added successfully",
        expense,
        splits,
    });
    } catch (error) {
        console.error("Add expense error:", error);
        res.status(500).json({ message: "Server error" });
    }
};

export const getGroupExpenseController = async(req,res)=>{
    try{
        const {groupId} = req.params;
        const expenses = await getExpenseByGroup(groupId);
        res.status(200).json({expenses});
    } catch(error){
        console.error("Get group expenses error:",error);
        res.status(500).json({message:"Server error"});

    }
};

export const getSingleExpenseController =async(req,res) =>{
    try{
        const {id} = req.params;
        const result = await getExpenseWithSplits(id);

        if(!result.expense){
            return res.status(404).json({message:"Expense not found"});
        }

        res.status(200).json(result);
    }
    catch(error){
        console.error("Get expense detail error",error);
        res.status(500).json({message:"Server error"});
    }
};