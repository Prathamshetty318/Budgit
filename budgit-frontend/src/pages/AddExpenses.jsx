import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddExpenses(){

    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState("");
    const [group, setGroup] = useState("");
    const [paidby , setPaidby] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault();

        alert(`Expense Added:`);
        navigate("/expenses")
    };

    return(
        <div className="p-6 max-w-xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Add Expenses</h1>

            <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-lg shadow space-y-4">

                <div>
                    <label className="font-semibold">Expense Description</label>
                    <input
                    type="text"
                    placeholder="Ex: Dinner,Rent"
                    className="border p-2 w-full rounded mt-1"
                    value={description}
                    onChange={(e)=> setDescription(e.target.value)}
                    />
                </div>
                <div>
                    <label className="font-semibold">Amount:</label>
                    <input
                    type="number"
                    min="0"
                    placeholder="Enter Amount"
                    className="border p-2 w-full rounded mt-1"
                    value={amount}
                    onChange={(e)=> setAmount(e.target.value)}
                    />
                </div>
                <div>
                    <label className="font-semibold">Select Group</label>
                    <select
                    className="border p-2 w-full rounded mt-1"
                    value={group}
                    onChange={(e) => setGroup(e.target.value)}>
                        <option value="">-- Select Group --</option>
                        <option value="Friends">Friends</option>
                        <option value="Office">Office</option>
                        <option value="Family">Family</option>
                        <option value="Roommates">Roommates</option>
                        <option value="Trips">Trips</option>
                        <option value="Others">Others</option>
                    </select>
                </div>
                <div>
                    <label className="font-semibold">Paid By:</label>
                    <select
                    className="border p-2 w-full rounded mt-1"
                    value={paidby}
                    onChange={(e) => setPaidby(e.target.value)}>
                        <option value="You">You</option>
                        <option value="Mahesh">Mahesh</option>
                        <option value="Raju">Raju</option>
                    </select>
                </div>

                <button className="bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700">
                    Add Expense
                </button>
            </form>
        </div>
    )
}

export default AddExpenses;