import { useState } from "react";


function Forgotpassword(){

    const [email,setemail] = useState("");
    const [message,setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Email:", email);
        setMessage("Reset link sent to your email.");
    };

    return(
            <div className="flex items-center justify-center mt-10 ">
                <form onSubmit={handleSubmit}
                className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
                    <h1 className="text-2xl font-bold mb-6  text-gray-800">
                    Forgot Password :
                    </h1>
                    <label>Email:</label>
                    <input
                    type="email"
                    placeholder="email"
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                    className="border border-gray-300 rounded-md p-2 w-full mb-6 focus:ring-2 focus:ring-blue-500"
                    />
                    <button type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white rounded-md p-2 w-full transition-transform hover:translate-y-1 duration-300 ease-in-out">
                    Submit
                    </button>

                    {message &&
                    ( <p className="text-green-600 text-center mt-3">{message}</p>
                )}
                </form>
            </div>
    );
}

export default Forgotpassword;