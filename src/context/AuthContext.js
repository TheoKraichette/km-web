import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});
  const [messageR, setMessageR] = useState("");
  const [messageL, setMessageL] = useState("");
  const [messageC, setMessageC] = useState("");

  const register = (name, lastname, email, password) => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/create-user`, {
        name,
        lastname,
        email,
        password,
      })
      .then((res) => {
        console.log(res);

        if (res.data.message) {
          let messager = res.data.message;
          setMessageR(messager);
          setMessageC("");
        }
        if (res.data.success) {
          setMessageR("")
          setMessageC("Utilisateur créer");
        }
      })
      .catch((e) => {
        console.log(`register error ${e}`);
        console.log("aie");
      });
  };

  const login = async (email, password) => {
    await axios
      .post(`${process.env.REACT_APP_API_URL}/sign-in`, {
        email,
        password,
      })
      .then(async (res) => {
        if (res.data.message) {
          console.log(res.data.message);
          let messagel = await res.data.message;
          setMessageL(messagel);
        }
        if (res.data.user) {
          if (res.data.user.role === "admin") {
            setMessageL("");
            let userInfo = res.data;
            localStorage.setItem("userId", userInfo.user.id);
            localStorage.setItem("access_token", userInfo.access_token);
            setUserInfo(userInfo);
          } else {
            console.log("vous n'etes pas autorisée");
            setMessageL("Vous n'etes pas autorisée");
            localStorage.setItem("userId", "");
            localStorage.setItem("access_token", "");
          }
        }
      })
      .catch((e) => {
        console.log(`login error ${e}`);
      });
  };

  const logout = () => {
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/sign-out`,
        {},
        {
          headers: { Authorization: `Bearer ${userInfo.access_token}` },
        }
      )
      .then(() => {
        localStorage.removeItem("userId");
        localStorage.removeItem("access_token");
        setUserInfo([]);
      })
      .catch((e) => {
        console.log(`logout error ${e}`);
      });
  };

  useEffect(() => {
    const isLoggedIn = async () => {
      try {
        if (userInfo) {
          setUserInfo(userInfo);
        }
      } catch (e) {
        console.log(`is logged in error ${e}`);
      }
    };

    isLoggedIn();
  }, [userInfo]);

  return (
    <AuthContext.Provider
      value={{
        messageR,
        messageL,
        messageC,
        userInfo,
        register,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
