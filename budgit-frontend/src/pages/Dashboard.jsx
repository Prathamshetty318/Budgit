function Dashboard(){
    return(
        <div className="p-6 space-y-8">
            
            <h1 className="text-3xl font-bold">Welcome Back</h1>
            <p className="text-gray-600">Here's a quick summary of your expenses.</p>

            {/* stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                <div className="bg-white p-6 rounded-lg shadow">
                    <h2 className="text-xl font-semibold">Total Balance</h2>
                    <p className="text-3xl font-bold mt-2 text-blue-600">₹0</p>
                    <p className="text-gray-500 mt-1 text-sm">
                        You are all settled.
                    </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow">
                    <h2 className="text-xl font-semibold">You Owe</h2>
                    <p className="text-3xl font-bold mt-2 text-red-500">₹0</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow">
                    <h2 className="text-xl font-semibold">You Are Owed</h2>
                    <p className="text-3xl font-bold mt-2 text-green-500">₹0</p>
                </div>
            </div>


            {/* quick act */}
            <div>
                <h2 className="text-2xl font-bold mb-3">Quick Actions</h2>
                <div className="flex gap-4">
                    <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                        Add Expense
                    </button>
                    <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                        Create Group
                    </button>
                    <button className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700">
                        View All Expenses
                    </button>
                </div>
            </div>

            {/* recent act*/}
            <div>
                <h2 className="font-bold mb-3 text-2xl">Recent Activity</h2>
                <div className="bg-white p-6 rounded-lg shadow">
                    <p className="text-gray-500">No Recent activity.</p>
                </div>
            </div>
        </div>
        
    );
}

export default Dashboard;