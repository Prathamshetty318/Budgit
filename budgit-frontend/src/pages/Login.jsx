import { useState } from "react";

function Login() {
    const [email, setemail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Email:", email);
        console.log("Password:", password);
    };

    return (
        <div className="flex items-center justify-center bg-gray-50 mt-5">
        <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded-lg p-8 w-full max-w-md"
        >
            <h1 className="text-2xl font-bold mb-6  text-gray-800">
            Login :
            </h1>

            <label>Email:</label>
            <input
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            className="border border-gray-300 rounded-md p-2 w-full mb-6 focus:ring-2 focus:ring-blue-500"
            />

            <label>Password:</label>
            <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 rounded-md p-2 w-full mb-6 focus:ring-2 focus:ring-blue-500"
            />

            <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white rounded-md p-2 w-full transition-transform hover:translate-y-1 duration-300 ease-in-out"
            >
            Login
            </button>


            <p className="mt-3 text-center text-gray-600 mb-3">---or---</p>

            <label className="mt-3 text-center">
            <a href="/auth/google" className="bg-white  text-black border border-gray-300 rounded-md p-2 w-full inline-block transition:transform hover:translate-y-1 duration-300 ease-in-out">
                Login with Google
            </a>
            </label>

            <p className="mt-4 text-center">
            Don't have an account? <a href="/signup" className="text-blue-500 hover:underline">Sign Up</a>
            </p>
            <p className="mt-2 text-center">
            <a href="/reset-password" className="text-blue-500 hover:underline">Forgot Password?</a>
            </p>
        </form>
        </div>
    );
}

export default Login;
