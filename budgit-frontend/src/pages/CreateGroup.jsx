import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateGroup(){

    const [name,setName] = useState("");
    const [members,setMembers] = useState("");

    const navigate = useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault();
        alert(`Group Created`);
        navigate("/groups");
    }

    return(
        <div className="p-6 max-w-md mx-auto">
            <h1 className="text-3xl font-bold mb-6">Create a New Group</h1>

            <form
            onSubmit={handleSubmit}
            className="bg-white  p-6 rounded-lg shadow space-y-4 hover:shadow-lg">
                <div>
                    <label className="font-semibold">Group Name</label>
                    <input
                    type="text"
                    className="bg-white p-2 w-full rounded mt-1"
                    placeholder="Ex: Goa Trip,Roomates"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}/>
                </div>

                <div>
                    <label className="font-semibold">Add Members</label>
                    <input
                    type="text"
                    className="bg-white p-2 w-full rounded mt-1"
                    placeholder="pratham@gmail.com, shetty@gmail.com"
                    value={members}
                    onChange={(e)=>setMembers(e.target.value)}/>
                </div>

                <button className="bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700">
                    Create Group
                </button>
            </form>

        </div>
    )
}

export default CreateGroup;