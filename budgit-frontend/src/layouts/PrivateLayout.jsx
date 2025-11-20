import {Link} from 'react-router-dom';

function PrivateLayout({children}){

    return (
        <div className='min-h-screen flex flex-col bg-gray-100'>
            <nav className='bg-blue-800 text-white p-4 flex justify-between'>
                <h1 className='font-bold text-white text-xl'>Budgit Dashboard</h1>

                <div className="flex gap-4">
                    <Link to="/dashboard">Home</Link>
                    <Link to="/groups">Groups</Link>
                    <Link to="/expenses">Expenses</Link>

                    <button
                    onClick={()=>{
                        localStorage.removeItem("token");
                        window.location.href="/login";
                    }}
                    className="bg-red-500 px-3 py-1 rounded">
                        Logout
                    </button>
                </div>

            </nav>

            <main className='flex-grow'>{children}</main>
        </div>
    );
}

export default PrivateLayout;