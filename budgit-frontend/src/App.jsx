import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import PublicLayout from "./layouts/PublicLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Privacypolicy from "./pages/Privacypolicy";
import FAQ from "./pages/FAQ";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Forgotpassword from "./pages/ForgotPassword";
import Resetpassword from "./pages/Resetpassword";
import Settings from "./pages/Settings";
import ProtectedRoute from "./components/ProtectedRoute";
import PrivateLayout from "./layouts/PrivateLayout";
import Dashboard from "./pages/Dashboard";
import Groups from "./pages/Groups";
import Expenses from "./pages/Expenses";
import CreateGroup from "./pages/CreateGroup";
import AddExpenses from "./pages/AddExpenses";
import ExpenseDetails from "./pages/ExpenseDetails";
import GroupDetails from "./pages/GroupDetails";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("hi");

  return (
    <div
      className={
        darkMode
          ? "dark bg-gray-900 text-white min-h-screen"
          : "bg-gray-50 text-gray-900 min-h-screen"
      }
    >
      <Routes>
        <Route path="/" element={<PublicLayout><Home /></PublicLayout>} />
        <Route path="/about" element={<PublicLayout><About /></PublicLayout>} />
        <Route path="/contact" element={<PublicLayout><Contact /></PublicLayout>} />
        <Route path="/privacypolicy" element={<PublicLayout><Privacypolicy /></PublicLayout>} />
        <Route path="/FAQ" element={<PublicLayout><FAQ /></PublicLayout>} />
        <Route path="/Login" element={<PublicLayout><Login /></PublicLayout>} />
        <Route path="/Signup" element={<PublicLayout><Signup /></PublicLayout>} />
        <Route path="/Forgotpassword" element={<PublicLayout><Forgotpassword /></PublicLayout>} />
        <Route path="/Resetpassword" element={<PublicLayout><Resetpassword /></PublicLayout>} />
        <Route
          path="/Settings"
          element={
            <PublicLayout>
              <Settings darkMode={darkMode} setDarkMode={setDarkMode} language={language} setLanguage={setLanguage}/>
            </PublicLayout>
          }
        />
        <Route path="/dashboard" element={<ProtectedRoute><PrivateLayout><Dashboard /></PrivateLayout></ProtectedRoute>}/>
        <Route path="/groups" element={<ProtectedRoute><PrivateLayout><Groups /></PrivateLayout></ProtectedRoute>}/>
        <Route path="/expenses" element={<ProtectedRoute><PrivateLayout><Expenses /></PrivateLayout></ProtectedRoute>}/>
        <Route path="/creategroup" element={<ProtectedRoute><PrivateLayout><CreateGroup /></PrivateLayout></ProtectedRoute>}/>
        <Route path="/addexpenses" element={<ProtectedRoute><PrivateLayout><AddExpenses /></PrivateLayout></ProtectedRoute>}/>
        <Route path="/expensedetails/:id" element={<ProtectedRoute><PrivateLayout><ExpenseDetails /></PrivateLayout></ProtectedRoute>}/>
        <Route path="/groupdetails/:id" element={<ProtectedRoute><PrivateLayout><GroupDetails /></PrivateLayout></ProtectedRoute>}/>
      </Routes>
    </div>
  );
}

export default App;
