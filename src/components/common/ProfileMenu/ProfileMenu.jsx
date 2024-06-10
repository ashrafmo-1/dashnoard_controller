import useAuthLogin from "../../../Auth/login/useAuthLogin";
import "./ProfileMenu.css";
export const ProfileMenu = () => {
  const { logOut } = useAuthLogin();
  const token = window.localStorage.getItem("access_token");
  const name = window.localStorage.getItem("name");
  const email = window.localStorage.getItem("email");
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center bg-white rounded-2 p-2 py-3 profile-menu">
        <div className="d-flex justify-content-center  gap-1 flex-column">
          <p className="mb-0 d-flex justify-content-end">{name} :الاسم</p>
          <hr className="my-2" />
          <p className="mb-0"> {email} :الايميل</p>
          <hr className="my-2" />
        </div>
        <div className="btn-logout">
          <div
            className="login-register_btn btn btn-danger h-100 d-flex justify-content-center align-items-center fs-5"
            onClick={() => (token ? logOut() : "")}
          >
            {token ? "تسجيل الخروج" : ""}
          </div>
        </div>
      </div>
    </>
  );
};
