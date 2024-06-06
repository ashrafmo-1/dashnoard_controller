import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/controller" />} />
      <Route path="/controller" element={<Home />} />
    </Routes>
  );
}

export default App;