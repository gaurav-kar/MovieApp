import { createContext } from "react";

export const AuthContext = createContext({
  isLoggedIn: false,
  userToken: null,
  login: () => {},
  logout: () => {},
  setUsertoken: () => {},
});
