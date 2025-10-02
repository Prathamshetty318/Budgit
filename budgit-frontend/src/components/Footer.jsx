import { Link } from "react-router-dom";

function Footer() {
return (
        <footer className="bg-blue-900 text-white  text-center py-4 mt-8">
            

            <div className="mt-4 justify-center flex flex-col md:flex-row">
                <div className="container mx-auto px-4 flex  ms-5 flex-col md:flex-row gap-12 ml-5">
                    
                    <div>
                        <h3 className="font-semibold mb-2 ">Budgit</h3>
                        <ul className="space-y-1">
                            <li><Link to="/" className="text-gray-200 hover:text-white hover:underline">Home</Link></li>
                            <li><Link to="/about" className="text-gray-200 hover:text-white hover:underline">About</Link></li>
                            <li><Link to="/contact" className="text-gray-200 hover:text-white hover:underline">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-2">More</h3>
                        <ul className="space-y-1">
                            <li><Link to="/privacy" className="text-gray-200 hover:text-white hover:underline">Privacy Policy</Link></li>
                            <li><Link to="/faq" className="text-gray-200 hover:text-white hover:underline">FAQ</Link></li>
                            <li><a href="http://www.facebook.com" className="text-gray-200 hover:text-white hover:underline" target="_blank" rel="noreferrer">Facebook</a></li>
                            <li><a href="http://www.instagram.com" className="text-gray-200 hover:text-white hover:underline" target="_blank" rel="noreferrer">Instagram</a></li>
                            <li><a href="http://www.twitter.com" className="text-gray-200 hover:text-white hover:underline" target="_blank" rel="noreferrer">Twitter</a></li>
                        </ul>
                    </div>
        
                    <div>
                        <h3 className="font-semibold mb-2">Account</h3>
                        <ul className="space-y-1">
                            <li><Link to="/login" className="text-gray-200 hover:text-white hover:underline">Login</Link></li>
                            <li><Link to="/signup" className="text-gray-200 hover:text-white hover:underline">Signup</Link></li>
                            <li><Link to="/resetpassword" className="text-gray-200 hover:text-white hover:underline">Reset Password</Link></li>
                            <li><Link to="/setting" className="text-gray-200 hover:text-white hover:underline">Settings</Link></li>
                        </ul>
                    </div>
                    
            </div>

            <div className="mt-4 text-center px-4">
                <h1 className="font-semibold">Budgit</h1>
                <p>Track Your expenses without any worry :)</p>
                <p className="text-gray-200">&copy; {new Date().getFullYear()} Budgit. All rights reserved.</p>
                
            </div>
            </div>
        </footer>
    );
}
export default Footer;