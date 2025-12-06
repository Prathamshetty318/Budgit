import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateGroup(){

    const [name,setName] = useState("");
    const [description,setDescription] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
    e.preventDefault();

    try {
    const token = localStorage.getItem("token");

    const res = await fetch("http://localhost:5000/api/groups/create", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ name, description })
    });

    if (!res.ok) {
        const text = await res.text();
        console.error("Backend error:", text);
        alert("Failed to create group");
        return;
    }

    const data = await res.json();
    console.log(data);

    alert("Group created successfully!");
    navigate("/groups");

    } catch (error) {
        console.error("Create group error:", error);
        alert("Something went wrong");
    }

    navigate("/groups");
};



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
                    <label className="font-semibold">Description</label>
                    <input
                    type="text"
                    className="bg-white p-2 w-full rounded mt-1"
                    placeholder="Goa Trip"
                    value={description}
                    onChange={(e)=>setDescription(e.target.value)}/>
                </div>

                <button className="bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700">
                    Create Group
                </button>
            </form>

        </div>
    )
}

export default CreateGroup;