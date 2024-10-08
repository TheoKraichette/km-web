import axios from "axios";
import React, { useEffect, useState } from "react";

const ListTrajet = () => {
  const [trajets, setTrajets] = useState([]);
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/get-trajets`).then((res) => {
      console.log(res.data);
      setTrajets(res.data.trajets);
    });
  }, []);

  return (
    <div className="container">
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <div className="flex justify-between py-3 pl-2">
            <div className="relative max-w-xs">
              <label htmlFor="hs-table-search" className="sr-only">
                Search
              </label>
              <input
                type="text"
                name="hs-table-search"
                id="hs-table-search"
                className="block w-full p-3 pl-10 text-sm border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                placeholder="Search..."
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                <svg
                  className="h-3.5 w-3.5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <div className="relative">
                <button className="relative z-0 inline-flex text-sm rounded-md shadow-sm focus:ring-accent-500 focus:border-accent-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1">
                  <span className="relative inline-flex items-center px-3 py-3 space-x-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-md sm:py-2">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-3 h-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                        />
                      </svg>
                    </div>
                    <div className="hidden sm:block">Filters</div>
                  </span>
                </button>
              </div>
            </div>
          </div>

          <div className="p-1.5 w-full inline-block align-middle">
            <div className="overflow-hidden border rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                    >
                      Date de départ
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                    >
                      Vehicule
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                    >
                      Service
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                    >
                      Salarié
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                    >
                      Heure départ
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                    >
                      Heure arrivée
                    </th>

                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                    >
                      km parcouru
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {trajets.map((item) => {
                    return (
                      <tr key={item._id}>
                        <td className="py-3 pl-4 font-medium font-medium text-center">
                          {item.createdAt?.split("T")[0]}
                        </td>
                        <td className="px-6 py-4 text-sm text-center font-medium text-gray-800 whitespace-nowrap">
                        {item.vehicle.brand.toUpperCase()} {item.vehicle.name.toUpperCase()}/ {item.vehicle.matricul}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-800 font-medium text-center whitespace-nowrap">
                          {item.company.name.toUpperCase()}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-800 font-medium text-center whitespace-nowrap">
                          {item.user.name} {item.user.lastname}
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-center whitespace-nowrap">
             
                            {item.createdAt?.split("T")[1].split(".")[0]}
                          
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-center whitespace-nowrap">
                 
                            {item.updatedAt.split("T")[1].split(".")[0]}
                        </td>
                                     <td className="px-6 py-4 text-sm font-medium text-center whitespace-nowrap">
                          {item.km_end ? item.km_end - item.km_start + " Km": "TRAJET EN COURS"}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListTrajet;
