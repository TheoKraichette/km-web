import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, messageL } = useContext(AuthContext);
  const handleLogin = async (e) => {
    e.preventDefault();
    login(email, password);
  };
  return (
    <div className="container mx-auto wi">
      <div className="w-full max-w-xs mx-auto mt-9">
        {messageL ? messageL : ""}
        <form
          action=""
          onSubmit={handleLogin}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              name="email"
              id="email"
              placeholder="Admin@admin.fr"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="password"
            >
              Mot de passe
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              name="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              placeholder="******************"
            />
          </div>
          <div className="flex items-center justify-between">
            <input
              type="submit"
              value="Se connecter"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInForm;
