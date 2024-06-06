import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import Navgation from "./layout/navgation_bar/Navgation";

function App() {
  return (
    <main className="container">
      <Navgation />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </main>
  );
}

export default App;
