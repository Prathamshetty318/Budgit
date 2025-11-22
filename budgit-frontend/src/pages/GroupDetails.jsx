import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function GroupDetails(){
    const {id} = useParams();
    const navigate=useNavigate();

    const group={
        id,
        name:"Friends",
        members:["You ","Raju ","Mia "],
        createdOn:"2025-10-15",
        description:"Group for tracking expenses among friends."
    };

    return(
        <div className="p-6 max-w-xl mx-auto">
            <h1 className="text-3xl font-bold mb-4">Group Details:</h1>

            <div className="bg-white p-6 rounded-lg shadow space-y-3">
                <p className="text-lg">
                    <span className="font-bold">Group Name: {group.name}</span>
                </p>
                <p className="text-lg font-bold">Group Members:</p>
                    <ul className="list-disc ml-6">
                        {group.members.map((m, i) => <li key={i}>{m}</li>)}
                    </ul>
                <p className="text-lg">
                    <span className="font-bold">Created On: {group.createdOn}</span>
                </p>
                <p className="text-lg">
                    <span className="font-bold">Description : {group.description}</span>
                </p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded mt-4 hover:bg-blue-700"
                onClick={() => navigate(`/addexpense?group=${id}`)}>
                        ➕ Add Expense
                </button>

            </div>
        </div>
    )
}


export default GroupDetails;