import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Expenses() {
    const { id: groupId } = useParams();
    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        const fetchExpenses = async () => {
            const res = await fetch(
            `http://localhost:5000/api/expenses/group/${groupId}`,
            {
                headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            }
        );

        const data = await res.json();
        setExpenses(data.expenses || []);
        };

    fetchExpenses();
    }, [groupId]);

    return (
        <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">Group Expenses</h1>

        {expenses.map((exp) => (
            <div
                key={exp.id}
                className="bg-white p-6 rounded-lg shadow mb-4 flex justify-between"
            >
                <div>
                    <h2 className="text-xl font-semibold">{exp.description}</h2>
                    <p className="text-gray-600">Paid by: {exp.paid_by_email}</p>
                    <p className="text-gray-600">
                        {new Date(exp.created_at).toLocaleDateString()}
                    </p>
                </div>

                <div className="text-right">
                    <p className="text-2xl font-bold text-green-600">₹{exp.amount}</p>

                    <Link
                        to={`/expenses/${exp.id}`}
                        className="text-blue-600 hover:underline mt-2 block"
                    >
                        View Details
                    </Link>
                </div>
            </div>
        ))}
    </div>
    );
}

export default Expenses;
