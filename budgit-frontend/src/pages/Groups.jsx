import { Link } from "react-router-dom";

function Groups(){

    const groups=[
        {id:1,name:"Roomates",members:4},
        {id:2,name:"Trip to Goa",members:5},
        {id:3,name:"Office Lunch",members:3}
    ];

    return(
        <div className="p-6">
            <div className="flex justify-between mb-6">
                <h1 className="text-3xl font-bold">Your Groups</h1>
                <Link to="/creategroup"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                    👥 Create Group
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {groups.map((g)=>(
                    <div
                    key={g.id}
                    className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
                        <h2 className="text-xl font-bold">{g.name}</h2>
                        <p className="text-gray-600">{g.members}</p>

                        <Link to={`/groupdetails/${g.id}`}
                        className="text-blue-600 hover:underline mt-2 inline-block">
                            View Group
                        </Link>
                        </div>
                    ))}
                </div>
        </div>
    )
}

export default Groups;