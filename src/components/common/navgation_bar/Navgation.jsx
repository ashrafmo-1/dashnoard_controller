import { useState } from "react";
import Side from "../side_bar/side";
import "./navgation.css";
import bars from "../../../../public/assets/bars.svg?react";
// import { DarkLight } from "../../icons/DarkLight";
import profileImg from "../../../../public/assets/Profile-Avatar-PNG.png";
import { ProfileMenu } from "../ProfileMenu/ProfileMenu";

export default function Navgation() {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const [profileStatus, setProfileStatus] = useState(false);
  const name = window.localStorage.getItem("name");
  const token = window.localStorage.getItem("access_token");
  return (
    <>
      {token ? (
        <div className="navgation py-2 d-flex fixed-top">
          <div className="dash_container d-flex algin-items-center  justify-content-between">
            <div className="d-flex justify-content-center align-items-center ">
              <div className="d-flex justify-content-center align-align-items-center">
                <p className="mb-0 profile-name">{name} :اهلا بك</p>
                <button
                  className=" btn-profile position-relative"
                  onClick={() => setProfileStatus(!profileStatus)}
                >
                  <img src={profileImg} className="w-100 h-100" alt="" />
                  <div>
                    {profileStatus ? (
                      <>
                        <ProfileMenu />
                      </>
                    ) : (
                      ""
                    )}
                  </div>
                </button>
              </div>
            </div>
            {}
            <div className="d-flex justify-content-between flex-row-reverse gap-2 align-items-center">
              <div
                onClick={handleShow}
                className="btn_side_bar me-2 py-1 d-flex justify-content-center align-items-center "
              >
                <img width={40} src={bars} alt="Navigation Icon" />
              </div>
              <>
                <Side show_side={show} setShowSide={setShow} />
                {/* <DarkLight /> */}
              </>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
