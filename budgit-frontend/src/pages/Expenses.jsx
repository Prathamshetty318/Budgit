import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function Expenses() {
  const { groupId } = useParams();
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
      <h1 className="text-2xl font-bold mb-4">Group Expenses</h1>

      {expenses.length === 0 && <p>No expenses yet</p>}

      {expenses.map((e) => (
        <div key={e.id} className="bg-white p-4 mb-4 rounded shadow">
          <h3 className="font-semibold">{e.description}</h3>
          <p>₹{e.amount}</p>
          <p>Paid by: {e.paid_by_email}</p>

          <Link
            to={`/expenses/${e.id}`}
            className="text-blue-600 hover:underline"
          >
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Expenses;
