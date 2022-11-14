import React, { useContext } from "react";
import ListTrajet from "../components/trajet/ListTrajet";
import SignInForm from "../components/log/SignInForm";
import { AuthContext } from "../context/AuthContext";
import Navbar from "../components/Navbar";

const Home = () => {
  const { userInfo } = useContext(AuthContext);
  return (
    <div>
      {
        (userInfo.access_token = localStorage.getItem("access_token") ? (
          <>
            <Navbar/>
            <ListTrajet />
          </>
        ) : (
          <SignInForm />
        ))
      }
    </div>
  );
};

export default Home;
