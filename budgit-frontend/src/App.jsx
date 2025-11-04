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


function App() {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout><Home /></PublicLayout>} />
      <Route path="/about" element={<PublicLayout><About /></PublicLayout>} />
      <Route path="/contact" element={<PublicLayout><Contact /></PublicLayout>} />
      <Route path="/privacypolicy" element={<PublicLayout><Privacypolicy /></PublicLayout>} />
      <Route path="/FAQ" element={<PublicLayout><FAQ /></PublicLayout>} />
      <Route path="/Login" element={<PublicLayout><Login /></PublicLayout>} />
      <Route path="/Signup" element={<PublicLayout><Signup /></PublicLayout>}/>
      <Route path="/Forgotpassword" element={<PublicLayout><Forgotpassword /></PublicLayout>}/>
      <Route path="/Resetpassword" element={<PublicLayout><Resetpassword /></PublicLayout>}/>
    </Routes>
  );
}
export default App;
