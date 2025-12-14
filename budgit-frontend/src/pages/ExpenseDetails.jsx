import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ExpenseDetails() {
    const { id } = useParams();
    const [expense, setExpense] = useState(null);
    const [splits, setSplits] = useState([]);

    useEffect(() => {
    const fetchExpense = async () => {
        const res = await fetch(
            `http://localhost:5000/api/expenses/${id}`,
        {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        }
        );

        const data = await res.json();
        setExpense(data.expense);
        setSplits(data.splits || []);
    };

    fetchExpense();
    }, [id]);

    if (!expense) return <p>Loading...</p>;

    return (
        <div className="p-6 max-w-xl mx-auto">
            <h1 className="text-3xl font-bold mb-4">Expense Details</h1>

        <div className="bg-white p-6 rounded-lg shadow space-y-3">
            <p><b>Description:</b> {expense.description}</p>
            <p><b>Amount:</b> ₹{expense.amount}</p>
            <p><b>Paid By:</b> {expense.paid_by_email}</p>
            <p><b>Date:</b> {new Date(expense.created_at).toLocaleDateString()}</p>

        <h3 className="font-bold mt-4">Split Details</h3>
        <ul className="list-disc ml-6">
            {splits.map((s) => (
                <li key={s.user_id}>
                {s.email} owes ₹{s.share_amount}
                </li>
            ))}
        </ul>
        </div>
    </div>
    );
}

export default ExpenseDetails;
