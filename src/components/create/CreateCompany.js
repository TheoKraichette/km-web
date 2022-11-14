import React, { useState } from "react";
import Navbar from "../Navbar";
import axios from "axios";
const CreateCompany = () => {
  const [name, setName] = useState("");
  const [messageC, setMessageC] = useState("");
  const [messageE, setMessageE] = useState("");
  const handleServiceForm = (e) => {
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_API_URL}/create-company`, {
        name
      })
      .then((res) => {
        console.log(res);

        if (res.data.success) {
          setName("");
          setMessageE("");
          setMessageC("Le service à été créé");
        } else {
          setMessageC("");
          setMessageE(res.data.message);
        }
      })
      .catch((e) => {
        console.log(`register error ${e}`);
        console.log("aie");
      });
  };

  return (
    <div>
      <Navbar />
      <form
        onSubmit={handleServiceForm}
        className="w-full max-w-lg mx-auto mt-9"
      >
        <h2 className="text-lg font-semibold text-center mb-9">
          Ajouter un service
        </h2>
        {messageC ? <div className="text-lg font-semibold text-center text-teal-500">{messageC}</div>  : ""}
        {messageE ? <div className="text-lg font-semibold text-center text-red-500">{messageE}</div>  : ""}
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Nom du service
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Modele"
              name="name"
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
            />
          </div>
        </div>
        <input
          type="submit"
          value="Créer"
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        />
      </form>
    </div>
  );
};

export default CreateCompany;
