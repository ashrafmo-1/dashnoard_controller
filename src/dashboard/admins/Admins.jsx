import { useEffect, useState } from "react";
import "./admins.module.css";
import "./style.css";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import Pagination from "react-bootstrap/Pagination";
const Admins = () => {
  const [admin, setAdmin] = useState([]);

  const getAdmins = "http://127.0.0.1:8000/api/user/show";
  useEffect(() => {
    fetch(getAdmins)
      .then((res) => res.json())
      .then((admin) => setAdmin(admin));
  }, []);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8); // Removed setItemsPerPage
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    setTotalPages(Math.ceil(admin.length / itemsPerPage));
  }, [admin, itemsPerPage]);

  const getVisibleUsers = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return admin.slice(startIndex, endIndex);
  };

  const visibleUsers = getVisibleUsers();

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="admins_controller pb-5">
      <div className="mb-5 d-flex justify-content-between align-content-center">
        <h1 className="" style={{ color: "var(--text_color)" }}>
          عرض المديرين
        </h1>
        <Link
          to={"/dashboard/admins/newadmin"}
          className="btn btn-success fs-4">
          اضافة مدير
        </Link>
      </div>
      <Table bordered hover size="sm" className="text-center" style={{backgroundColor: "var(--main_color)"}}>
        <thead>
          <tr className="text-center">
            <th className="py-1 px-3 fs-4">id</th>
            <th className="py-1 px-3 fs-4">الاسم</th>
            <th className="py-1 px-3 fs-4">الاميل</th>
            <th className="py-1 px-3 fs-4">تاريخ الانشاء</th>
            <th className="py-1 px-3 fs-4">التحكم</th>
          </tr>
        </thead>
        <tbody>
          {visibleUsers.map((admin, index) => {
            return (
              <tr key={index}>
                <td className="py-1 px-3 fs-5">
                  {(currentPage - 1) * itemsPerPage + index + 1}
                </td>
                <td className="py-1 px-3 fs-5">{admin.name}</td>
                <td className="py-1 px-3 fs-5">{admin.email}</td>
                <td className="py-1 px-3 fs-5">{admin.created_at}</td>
                <td className="py-1 px-3 fs-5 d-flex gap-3 d-flex justify-content-center align-items-center">
                  <button className="btn btn-primary">تعديل المعلومات</button>
                  <Link to={""} className="btn btn-danger">حذف المدير</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <div className="d-flex justify-content-center">
        <Pagination>
          <Pagination.First onClick={() => setCurrentPage(1)} disabled={currentPage === 1} />
          <Pagination.Prev onClick={handlePreviousPage} disabled={currentPage === 1} />
          {Array.from({ length: totalPages }, (_, index) => (
            <Pagination.Item key={index + 1} active={index + 1 === currentPage} onClick={() => setCurrentPage(index + 1)} >
              {index + 1}
            </Pagination.Item>
          ))}
          <Pagination.Next onClick={handleNextPage} disabled={currentPage === totalPages} />
          <Pagination.Last onClick={() => setCurrentPage(totalPages)} disabled={currentPage === totalPages} />
        </Pagination>
      </div>
    </div>
  );
};
export default Admins;
