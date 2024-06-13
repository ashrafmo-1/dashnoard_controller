import { createContext, useState, useEffect } from "react";
import PropTypes from 'prop-types';

export const User_token = createContext({});
export default function User_provider({ children }) {
  const [auth, setAuth] = useState({});
  const [adminsLength, setAdminsLength] = useState(0);
  const [productsLength, setProductsLength] = useState(0);
  // apis
  const apiUsers = "http://127.0.0.1:8000/api/user/show";
  const apiProducts = "https://jsonplaceholder.typicode.com/posts";
  const fetchAdminsLength = async () => {
    const response = await fetch(apiUsers);
    const data = await response.json();
    setAdminsLength(data.length);
    console.log("admins: " + data.length);
  };
  const fetchProductsLength = async () => {
    const response = await fetch(apiProducts);
    const data = await response.json();
    setProductsLength(data.length);
    console.log("products: " + data.length);
  };

  useEffect(() => {
    fetchAdminsLength();
    fetchProductsLength();
  }, []);

  return (
    <User_token.Provider value={{ auth, setAuth, adminsLength, productsLength }}>
      {children}
    </User_token.Provider>
  );
}

User_provider.propTypes = {
  children: PropTypes.node.isRequired,
};