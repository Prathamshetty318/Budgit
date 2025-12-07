import pool from "../config/db.js";

export const createGroup = async(name,description, createdby)=>{
    const result = await pool.query("Insert into groups(name,description,created_by) VALUES ($1,$2,$3) returning *",
        [name,description,createdby]);
        return result.rows[0];

};

export const addMemberToGroup = async(group_Id,userId)=>{
    await pool.query("Insert into group_members(group_id,user_id) values ($1,$2)",
        [group_Id,userId]);
};


export const getGroupByUser = async(user_id)=>{
    const result = await pool.query(`select g.*
        from groups g
        Join group_members gm on g.id = gm.group_id
        where gm.user_id = $1`,
        [user_id]);
    return result.rows;
};

export const getGroupDetails = async(group_Id)=>{
    const result = await pool.query(`select * from groups where id = $1`,[group_Id]);
    return result.rows[0];
}

