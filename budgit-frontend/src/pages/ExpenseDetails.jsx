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
      setSplits(data.splits);
    };

    fetchExpense();
  }, [id]);

  if (!expense) return <p>Loading...</p>;

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-xl font-bold">{expense.description}</h2>
      <p>Total: ₹{expense.amount}</p>
      <p>Paid by: {expense.paid_by_email}</p>

      <h3 className="mt-4 font-bold">Split</h3>
      <ul>
        {splits.map((s) => (
          <li key={s.user_id}>
            {s.email} owes ₹{s.share_amount}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseDetails;
