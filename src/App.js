import Contact from "./Comp/Contact";
import Home from "./Comp/Home";
import Login from "./Comp/Login";
import BasicExample from "./Comp/Navbar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BasicExample />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Login" element={<Login />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
