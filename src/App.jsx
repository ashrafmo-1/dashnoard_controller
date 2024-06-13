import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./dashboard/home/Home";
import Login from "./Auth/login/Login_Admin";
import Navgationmain from "./components/common/navgation_bar/Navgation";
import Admins from "./dashboard/admins/Admins";
import RequireAuth from "./Auth/RequireAuth";
import LoginProdect from "./Auth/LoginProdect";
import AddNewItem from "./components/AddNewItem/AddNewItem";
import Error from "./components/common/Error/Error";

function App() {
  return (
    <main>
      <Navgationmain />
      <div className="dash_container">
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard/home" />} />
          <Route element={<RequireAuth />}>
            <Route path="/login" element={<Login />} />
          </Route>
          <Route element={<LoginProdect />}>
            <Route path="/dashboard"> {/* start all pages */}
              <Route path="home" element={<Home />} />
              <Route path="admins"> {/* start admins */}
                <Route path="showAdmins" element={<Admins />} />
                <Route path="newadmin" element={<AddNewItem />} />
              </Route> {/* start end */}
            </Route> {/* start all pages */}
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </main>
  );
}
export default App;
