import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

function Resetpassword() {
    const [searchParams] = useSearchParams();
    const token = searchParams.get("token");
    const navigate = useNavigate();

    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");
    const [isError, setIsError] = useState(false);

    useEffect(() => {
    if (!token && process.env.NODE_ENV === "production") {
        navigate("/Forgotpassword");
    }
    }, [token, navigate]);

    const handleSubmit = (e) => {
    e.preventDefault();

    if (!newPassword || !confirmPassword) {
    setIsError(true);
    setMessage("Please fill in all fields.");
    return;
}


    if (newPassword !== confirmPassword) {
        setIsError(true);
        setMessage("Passwords do not match.");
        return;
    }



    console.log("Token:", token);
    console.log("New Password:", newPassword);

    setIsError(false);
    setMessage("Password has been reset successfully!");
    };

    return (
    <div className="flex items-center justify-center mt-10 ">
        <form
        onSubmit={handleSubmit}
        className="bg-blue-300 shadow-md rounded-lg p-8 w-full max-w-md"
        >
        <h1 className="text-2xl font-bold mb-6 text-gray-800">
            Reset Password
        </h1>

        <label>New Password:</label>
        <input
            type="password"
            placeholder="New password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="border border-gray-300 rounded-md p-2 w-full mb-4 focus:ring-2 focus:ring-blue-500"
        />

        <label>Confirm New Password:</label>
        <input
            type="password"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="border border-gray-300 rounded-md p-2 w-full mb-6 focus:ring-2 focus:ring-blue-500"
        />

        <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white rounded-md p-2 w-full transition-transform hover:translate-y-1 duration-300 ease-in-out"
        >
            Reset Password
        </button>

        {message && (
            <p className={` text-center mt-3 ${isError ? "text-red-600" : "text-green-600" }`}>{message}</p>
        )}
        </form>
    </div>
    );
}

export default Resetpassword;
