import { createContext, useState } from "react";
  // Start of Selection
import PropTypes from 'prop-types';

export const User_token = createContext({});

export default function User_provider({ children }) {
  const [auth, setAuth] = useState({})
  return (
    <User_token.Provider value={{ auth, setAuth }}>{children}</User_token.Provider>
  );
}

User_provider.propTypes = {
  children: PropTypes.node.isRequired,
};