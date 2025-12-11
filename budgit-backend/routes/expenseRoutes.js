import express from "express";
import { addExpense,getGroupExpenseController,getSingleExpenseController } from "../controllers/expenseController.js";
import {verifyToken} from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/add",verifyToken,addExpense);  //new exp

router.get("group/:groupId",verifyToken,getGroupExpenseController);  //get all exp from grp

router.get("/:id",verifyToken,getSingleExpenseController);  //get single exp with split

export default router;

