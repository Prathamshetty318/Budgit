import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCPassword] = useState("");
    const [captchaValue, setCaptchaValue] = useState(null);

    const handleCaptcha = (value) => {
    setCaptchaValue(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

    if (password !== cpassword) {
        alert("Passwords do not match!");
        return;
    }

    if (!captchaValue) {
        alert("Please verify that you're not a robot!");
        return;
    }

    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Captcha:", captchaValue);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50 overflow-x-hidden">
        <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded-lg p-8 w-full max-w-md"
        >
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Sign Up :</h1>

        <label>Email:</label>
        <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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

        <label>Confirm Password:</label>
        <input
            type="password"
            placeholder="Confirm Password"
            value={cpassword}
            onChange={(e) => setCPassword(e.target.value)}
            className="border border-gray-300 rounded-md p-2 w-full mb-6 focus:ring-2 focus:ring-blue-500"
        />

        <div className="mb-6 flex justify-center">
            <ReCAPTCHA
            sitekey="6LeuHQAsAAAAAOFYBvzPcWU2g3WybulOcyqU4CV7"
            onChange={handleCaptcha}
            />
        </div>
        {/*S ecret key: 6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe*/}


        <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white rounded-md p-2 w-full transition-transform hover:translate-y-1 duration-300 ease-in-out"
        >
            Sign Up
        </button>
        </form>
        </div>
    );
}

export default Signup;
