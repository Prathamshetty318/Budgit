import { Link, Route, Routes } from "react-router-dom";

function App()
{
  return(
    <div className="p-6">
      <nav className="flex gap-4 mb-6">
        <Link to="/" className="text-blue-600">Home</Link>
        <Link to="/Login" className="text-blue-600">Login</Link>
        <Link to="/SignUp" className="text-blue-600">SignUp</Link>
        <Link to="/dashboard" className="text-blue-600">Dashboard</Link>
      </nav>


      <Routes>
        <Route path="/" element={<h1>Welcome To Budgit</h1>}/>
        <Route path="/Login" element={<h1>Login Page</h1>}/>
        <Route path="/SignUp" element={<h1>SignUp Page</h1>}/>
        <Route path="/dashboard" element={<h1>Dashboard Page</h1>}/>
      </Routes>
    </div>
  );
}

export default App;