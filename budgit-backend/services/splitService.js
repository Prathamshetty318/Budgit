export const calculateSplit = (amount, members)=>{
    const total = Number(amount);
    const count = members.length;

    const rawShare = total / count;

    const baseShare = Math.floor(rawShare * 100) / 100;
    let remaining = Number((total - baseShare * count).toFixed(2));

    const splits =  members.map((members)=>{
    let share = baseShare;

    if (remaining > 0) {
        share = Number((share + 0.01).toFixed(2));
        remaining = Number((remaining - 0.01).toFixed(2));
    }

    return {user_id: members.id, email: members.email, share_amount: share};
    
    });

    return splits;
}