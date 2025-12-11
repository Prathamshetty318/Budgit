import {createExpense,addExpenseSplit,getExpenseWithSplits,getExpenseByGroup} from "../models/expenseModel.js";
import { getGroupMembers } from "../models/groupModel.js";
import { calculateSplit } from "../services/splitService.js";

export const addExpense = async (req, res) => {
    try {
        const { groupId, description, amount } = req.body;
        const userId = req.user.id;

        if (!groupId || !description || !amount) {
        return res.status(400).json({ message: "All Fields are required" });
        }

        if(isNaN(amount)){
            return res.status(400).json({message:"Please enter Valid amount"})
        }

        const members = await getGroupMembers(groupId);

        if (!members || members.length === 0) {
        return res.status(400).json({ message: "No Members found in this group" });
        }

        const expense = await createExpense(groupId, description, amount, userId);

        
        const splits = calculateSplit(amount, members);

        await Promise.all(splits.map(s =>
            addExpenseSplit(expense.id,s.user_id, s.share_amount)
        ));

    res.status(201).json({
        message: "Expense added successfully",
        expense,
        splits
    });

    } catch (error) {
        console.error("Add expense error:", error);
        res.status(500).json({ message: "Server error" });
    }
};


export const getGroupExpenseController = async (req, res) => {
    try {
        const { groupId } = req.params;
        const expenses = await getExpenseByGroup(groupId);
        res.status(200).json({ expenses });

    } catch (error) {
        console.error("Get group expenses error:", error);
        res.status(500).json({ message: "Server error" });
    }
};


export const getSingleExpenseController = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await getExpenseWithSplits(id);

    if (!result.expense) {
        return res.status(404).json({ message: "Expense not found" });
    }

    res.status(200).json(result);

    } catch (error) {
        console.error("Get expense detail error", error);
        res.status(500).json({ message: "Server error" });
    }
};
