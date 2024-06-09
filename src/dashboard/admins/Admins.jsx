import { useEffect, useState } from "react";
import "./admins.module.css";
import "./style.css";
import Table from "react-bootstrap/Table";
const Admins = () => {
  const [admin, setAdmin] = useState([]);
  const getAdmins = "http://127.0.0.1:8000/api/user/show";
  useEffect(() => {
    fetch(getAdmins)
      .then((res) => res.json())
      .then((admin) => setAdmin(admin));
  }, []);
  return (
    <div className="admins_controller">
      <div className="mb-5 d-flex justify-content-between align-content-center">
        <h1 className=""> عرض المستخدمين</h1>
        <button className="btn btn-primary fs-4">اضافة مستخدم</button>
      </div>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th className="py-1 px-3 fs-4">id</th>
            <th className="py-1 px-3 fs-4">الاسم</th>
            <th className="py-1 px-3 fs-4">الاميل</th>
            <th className="py-1 px-3 fs-4">تاريخ الانشاء</th>
          </tr>
        </thead>
            {admin.map((admin, index) => {
              return (
                <tr key={index}>
                  <td className="py-1 px-3 fs-5">{index + 1}</td>
                  <td className="py-1 px-3 fs-5">{admin.name}</td>
                  <td className="py-1 px-3 fs-5">{admin.email}</td>
                  <td className="py-1 px-3 fs-5">{admin.created_at}</td>
                </tr>
              );
            })}
        <tbody>
        </tbody>
      </Table>
    </div>
  );
};

export default Admins;