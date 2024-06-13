import { User_token } from "../../components/context/context";
import ItemLength from "../../components/length/adminLength";
import "./home.css";
import { useContext } from "react";
const Home = () => {
  const { adminsLength, productsLength } = useContext(User_token);
  return (
    <div className="home_page d-flex">
      <div>
        <h2 className="homeTitle" style={{ color: "var(--text_color)" }}>
          Welcome to the Romoz Foundation Dashboard
        </h2>
      </div>
      <div className="widgets text-end">
        <ItemLength title={"جميع المستخدمين"} count={adminsLength} />
        <ItemLength title={"جميع المنتجات"} count={productsLength} />
      </div>
    </div>
  );
};
export default Home;
