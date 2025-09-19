import { Link, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

function App()
{
  return(
    <div className="p-6">
      <nav className="flex gap-4 mb-6">
        
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