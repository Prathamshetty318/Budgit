import {Link} from 'react-router-dom';

function Expenses(){

    const expenses=[
        {
            id:1,
            description:"Dinner at restaurant",
            amount:1300,
            paidBy:"You",
            group:"Friends",
            date:"2025-11-20"
        },
        {
            id:2,
            description:"Rent for october",
            amount:11000,
            paidBy:"Nysa",
            group:"Roommates",
            date:"2025-11-01"
        },
        {
            id:3,
            description:"Cab Ride",
            amount:700,
            paidBy:"Raju",
            group:"Office",
            date:"2025-11-15"
        },
    ];


    return(
        <div className="p-6">
            
            <div className='flex justify-between mb-6'>
                <h1 className='text-3xl font-bold'>Your Expenses</h1>
                <Link to="/addExpenses" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Add Expenses</Link>
            </div>


            <div className='space-y-4'>
                {expenses.map((exp)=>(
                    <div
                    key={exp.id}
                    className='bg-white p-6 rounded-lg shadow flex justify-between item-center hover:shadow:lg transition'>
                        <div>
                            <h2  className='text-xl font-semibold'>{exp.description}</h2>
                            <p className='text-gray-600'>Paid by: {exp.paidBy}</p>
                            <p className='text-gray-600'>Group: {exp.group}</p>
                            <p className='text-gray-600'>Date: {exp.date}</p>
                        </div>

                        <div className='text-right'>
                            <p className='text-2xl font-bold text-green-600'>₹{exp.amount}</p>
                        
                        
                            <div className='flex gap-3 mt-2 justify-end'>
                                <button className='text-blue-600 hover:underline'>Edit</button>
                                <button className='text-red-600 hover:underline'>Delete</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Expenses;