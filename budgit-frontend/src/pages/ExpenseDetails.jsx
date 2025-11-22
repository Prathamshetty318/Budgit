import { useParams } from "react-router-dom";

function ExpenseDetails(){
    const {id} = useParams();


    const expense ={
        id,
        description:"Dinner at restaurant",
        amount:1300,
        group:"Friends",
        paidBy:"You",
        date:"2025-11-20",
        notes:"Dinner at the new Italian place downtown."
    };

    return(
        <div className="p-6 max-w-xl mx-auto">
            <h1 className="text-3xl font-bold mb-4">Expense Details</h1>

            <div className="bg-white p-6 rounded-lg shadow space-y-3">
                <p className="text-lg">
                    <span className="font-bold">Description : {expense.description}</span>
                </p>
                <p className="text-lg">
                    <span className="font-bold">Amount : {expense.amount}</span>
                </p>
                <p className="text-lg">
                    <span className="font-bold">PAid By : {expense.paidBy}</span>
                </p>
                <p className="text-lg">
                    <span className="font-bold">Group : {expense.group}</span>
                </p>
                <p className="text-lg">
                    <span className="font-bold">Date : {expense.date}</span>
                </p>
                <p className="text-lg">
                    <span className="font-bold">Notes : {expense.notes}</span>
                </p>

            </div>
        </div>
    );
}

export default ExpenseDetails;