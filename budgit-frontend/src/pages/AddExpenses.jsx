import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function AddExpenses() {
    const { id: groupId } = useParams(); 
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch("http://localhost:5000/api/expenses/add", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
                body: JSON.stringify({
                    groupId,
                    description,
                    amount,
                }),
            });

            const data = await res.json();

            if (res.ok) {
                alert("Expense Added Successfully");
                navigate(`/groups/${groupId}`);
            } else {
                alert(data.message || "Failed to add expense");
            }
        } catch (error) {
            console.error("Add expense error:", error);
            alert("Something went wrong");
        }
    };

    return (
        <div className="p-6 max-w-xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Add Expense</h1>

            <form
                onSubmit={handleSubmit}
                className="bg-white p-6 rounded-lg shadow space-y-4"
            >
                <div>
                    <label className="font-semibold">Expense Description</label>
                    <input
                        type="text"
                        className="border p-2 w-full rounded mt-1"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label className="font-semibold">Amount</label>
                    <input
                        type="number"
                        min="0"
                        className="border p-2 w-full rounded mt-1"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        required
                    />
                </div>

                <button className="bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700">
                    Add Expense
                </button>
            </form>
        </div>
    );
}

export default AddExpenses;
