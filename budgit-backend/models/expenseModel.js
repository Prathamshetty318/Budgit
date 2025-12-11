import pool from "../config/db.js";

export const createExpense = async(groupId,description,amount,paidBy)=>{
    const result = await pool.query(`insert into expenses (group_id,description,amount,paid_by)
        values($1,$2,$3,$4)
        returning *`,
    [groupId,description,amount,paidBy]);

    return result.rows[0];};

export const addExpenseSplit = async(expenseId, userId, shareAmount)=>{
    await pool.query(`insert into expense_split (expense_id,user_id,shareAmount)
        values($1,$2,$3)`,
    [expenseId,userId,shareAmount]);
    
};

export const getExpenseByGroup = async(groupId)=>{
    const result = await pool.query(`
        select e.id, e.description,e.amount.e.created_at, u.email as paid_by_email
        from expenses e
        join users u on e.paid_by = u.id
        where e.group_id = $1
        order by craeted_at desc`,
    [groupId]);

    return result.rows;
}

export const getExpenseWithSplits = async (expenseId) =>{
    const expenseResult = await pool.query(`
        select e.*, u.email as paid_by_email
        from expenses e
        join users u on e.paid_by = u.id
        where e.id = $1`,
    [expenseId]);

    const splitResult = await pool.query(`
        select es.user_id, es.share_amount,u.email
        from expense_split es
        join users u on es.user_id = u.id
        where es.expense_id = $1`,
    [expenseId]);

    return{
        expense : expenseResult.rows[0],
        splits : splitResult.rows
    };

};