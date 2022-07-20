import Starting from "./pages/Starting";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <div className="bg-[#0077B6] h-screen box-border font-body">
      <Navbar />
      <Routes>
        <Route path="/" element={<Starting/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
