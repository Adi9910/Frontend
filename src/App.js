import Contact from "./Comp/Contact";
import Home from "./Comp/Home";
import Login from "./Comp/Login";
import TopNav from "./Comp/Navbar";
import Reg from "./Comp/Signup";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <TopNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Login" element={<Login />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="Reg" element={<Reg />} />
      </Routes>
    </>
  );
}

export default App;
