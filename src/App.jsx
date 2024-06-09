import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./dashboard/home/Home";
import Login from "./Auth/login/Login_Admin";
import Navgationmain from "./components/common/navgation_bar/Navgation";
import Admins from "./dashboard/admins/Admins";
import RequireAuth from "./Auth/RequireAuth";
import PersistLogin from "./Auth/PersistLogin";

// Start of Selection
function App() {
  return (
    <main>
      <Navgationmain />
      <div className="dash_container">
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard/home" />} />
          <Route path="/login" element={<Login />} />
          <Route element={<PersistLogin />}>
            <Route element={<RequireAuth />}>
              <Route path="/dashboard">
                <Route path="home" element={<Home />} />
                <Route path="admins" element={<Admins />} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </div>
    </main>
  );
}
export default App;
