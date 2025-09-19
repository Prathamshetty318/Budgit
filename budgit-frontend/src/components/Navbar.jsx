import { Link } from "react-router-dom";

function Navbar(){
    return(
        <nav className="flex justify-between item-center px-6 py-4 bg-blue-600 text-white">
            <h1 className="text-xl font-bold">Budgit</h1>

            <div className="flex gap-6">
                <Link to="/" className="hover:text-grey-200">Home</Link>
                <Link to="/About" className="hover:text-grey-200">About</Link>
                <Link to="/Contact" className="hover:text-grey-200">Contact</Link>
                <Link to="/Login" className="hover:text-grey-200">Login</Link>
                <Link to="/SignUp" className="hover:text-grey-200">SignUp</Link>
            </div>
        </nav>
    );
}

export default Navbar;