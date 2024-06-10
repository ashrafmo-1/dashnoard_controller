import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./dashboard/home/Home";
import Login from "./Auth/login/Login_Admin";
import Navgationmain from "./components/common/navgation_bar/Navgation";
import Admins from "./dashboard/admins/Admins";
import RequireAuth from "./Auth/RequireAuth";
import LoginProdect from "./Auth/LoginProdect";
import PersistLogin from "./Auth/PersistLogin";
// import RequireAuth from "./Auth/RequireAuth";

// Start of Selection
function App() {
  return (
    <main>
      <Navgationmain />
      <div className="dash_container">
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard/home" />} />
          {/* <Route element={<PersistLogin />}> */}
            {/* Prodect Login Page */}
            <Route element={<RequireAuth />}>
              <Route path="/login" element={<Login />} />
            </Route>
            {/* Product Pages When Login */}
            <Route element={<LoginProdect />}>
              <Route path="/dashboard">
                <Route path="home" element={<Home />} />
                <Route path="admins" element={<Admins />} />
              </Route>
            </Route>
          {/* </Route> */}
        </Routes>
      </div>
    </main>
  );
}
export default App;
