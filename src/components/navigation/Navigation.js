import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../../screens/Home";
import CreateCompany from "../create/CreateCompany";
import CreateVehicle from "../create/CreateVehicle";
import SignUpForm from "../create/SignUpForm";
const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-user" element={<SignUpForm />} />
        <Route path="/create-vehicle" element={<CreateVehicle />} />
        <Route path="/create-company" element={<CreateCompany />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
