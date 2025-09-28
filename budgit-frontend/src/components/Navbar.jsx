import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-blue-900 text-white">
      <h1 className="text-xl font-bold">Budgit</h1>
      <div className="flex gap-6">
        <Link to="/login" className="hover:text-gray-200 font-semibold py-2">Login</Link>
        <Link to="/signup" className="inline-block px-4 py-2 font-semibold text-white bg-blue-700 rounded-lg shadow-md duration-300 ease-in-out transition-transform hover:translate-y-1 hover:shadow-sm">Sign Up</Link>
      </div>
    </nav>
  );
}

export default Navbar;