import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import Navgationmain from "./components/common/navgation_bar/Navgation";

function App() {
  return (
    <main>
      <Navgationmain />
      <div className="dash_container">
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </main>
  );
}
export default App;
