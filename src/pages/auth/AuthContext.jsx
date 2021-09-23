import React, { createContext, useReducer, useEffect,  } from "react";
// import axios from "axios";
import jwt_decode from "jwt-decode";

import authReducer from "./authReducer";

export const AuthContext = createContext();

export default function AuthContextProvider(props) {
  const [admin_user_auth, dispatch] = useReducer(authReducer, {}, () => {
    const localData = localStorage.getItem("admin_user_auth");
    return localData ? JSON.parse(localData) : {};
  });

  const login = async (data) => {
    // return console.log("login", jwt_decode(data.access_token));
    let user = jwt_decode(data.access_token);
    dispatch({
      type: "LOGIN",
      payload: {
        access_token: data.access_token,
        refresh_token: data.refresh_token,
        user: user,
      },
    });
  };

  const logout = () => {
    localStorage.setItem("timer", "");
    dispatch({
      type: "LOGOUT",
      payload: {},
    });
  };

  // const signup = async (name, email, password) => {
  //   const token = await axios.post("http://localhost:4000/api/user/register", {
  //     name,
  //     email,
  //     password,
  //   });
  //   if (token.data.error) {
  //     localStorage.setItem("error", token.data.error);
  //   } else {
  //     dispatch({
  //       type: "LOGIN",
  //       payload: {
  //         token: token.data,
  //       },
  //     });
  //   }
  // };

  useEffect(() => {
    localStorage.setItem("admin_user_auth", JSON.stringify(admin_user_auth));
  }, [login]);

  return (
    <AuthContext.Provider value={{ login, admin_user_auth, logout }}>
      {props.children}
    </AuthContext.Provider>
  );
}
