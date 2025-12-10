import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function GroupDetails() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [groups, setGroups] = useState(null);
    const [members, setMembers] = useState([]);

    useEffect(() => {
        const fetchGroupDetails = async () => {
        try {
            const token = localStorage.getItem("token");

            const res = await fetch(
            `http://localhost:5000/api/groups/${id}`,
        {
                headers: {
                Authorization: `Bearer ${token}`,
            },
        }
        );

        const data = await res.json();


        if (!res.ok) {
            alert(data.message || "Failed to fetch data");
            return;
        }

        setGroups(data.group);
        setMembers(data.members);
        } catch (error) {
        console.error("Error Fetching Data:", error);
        }
    };

    fetchGroupDetails();
    }, [id]);

    if (!groups) return <p>Loading group.....</p>;

    return (
    <div className="p-6 max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Group Details:</h1>

        <div className="bg-white p-6 rounded-lg shadow space-y-3">
        <p className="text-lg">
            <span className="font-bold">Group Name:</span> {groups.name}
        </p>

        <p className="text-lg">
            <span className="font-bold">Description:</span>{" "}
            {groups.description || "No Description"}
        </p>

        <p className="text-lg">
            <span className="font-bold">Created On:</span>{" "}
            {new Date(groups.created_at).toLocaleDateString()}
        </p>

        <p className="text-lg font-bold">Group Members:</p>
        <ul className="list-disc ml-6">
            {members.length === 0 ? (
            <li className="text-gray-500">No members found</li>
            ) : (
            members.map(m => <li key={m.id}>{m.email}</li>)
        )}
</ul>


        <button
            className="bg-blue-600 text-white px-4 py-2 rounded mt-4 hover:bg-blue-700"
            onClick={() => navigate(`/addexpense?group=${id}`)}
        >
            ➕ Add Expense
        </button>
        </div>
    </div>
    );
}

export default GroupDetails;
