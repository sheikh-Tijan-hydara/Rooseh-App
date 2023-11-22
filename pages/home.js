import React, { useState } from "react";
import Image from "next/image";
import background from "../public/images/background.png";

import Header from "../components/header";
import { Bacasime_Antique } from "next/font/google";

export default function PlotList() {
  const [showModal, setShowModal] = useState(false);

  function handleAddPlot() {
    setShowModal(true);
  }
  const plots = [
    {
      id: 1,
      name: "May plot",
      vegetable: "casava",
      checked: false,
    },
    {
      id: 2,
      name: "June plot",
      vegetable: "casava",
      checked: false,
    },
    {
      id: 3,
      name: "July plot",
      vegetable: "casava",
      checked: false,
    },
    {
      id: 4,
      name: "August plot",
      vegetable: "casava",
      checked: false,
    },
    {
      id: 5,
      name: "September plot",
      vegetable: "casava",
      checked: true,
    },
  ];

  return (
    <div className="w-full h-full">
      <Header />
      <div className="flex flex-col w-full  py-6  ">
        <div className="h-40 bg-green-950 flex justify-center items-center px-16">
          <h1 className="text-white font-bold text-6xl text-center">
            Your Partner for Optimal Irrigation Scheduling
          </h1>
        </div>
        <div className="flex justify-center items-center mt-8">
          <div className="px-16 py-8 w-4/5 border-4 border-green-950  rounded shadow ">
            <div className="flex flex-row justify-between">
              <div className="flex justify-between flex-row items-center">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-2 w-5 h-5 "
                    checked={false}
                  />
                  <span className="text-green-950 text-xl font-bold">
                    Select All
                  </span>
                </div>
                <p className="ml-4">Delete</p>
              </div>
              <button
                className="bg-green-950 text-white font-bold px-16 py-4 rounded-lg"
                onClick={handleAddPlot}
              >
                Add A New Plot
              </button>
            </div>

            <div className="my-4">
              <table className="w-full">
                <thead>
                  <tr className="text-start border-b border-green-950">
                    <th className="font-bold text-green-950 text-xl">
                      Plot Name
                    </th>
                    <th className="font-bold text-green-950 text-xl">
                      Vegetable Type
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {plots.map((plot) => (
                    <tr key={plot.id} className="hover:bg-gray-300">
                      <td className="py-4 text-lg text-green-900 flex items-center">
                        {" "}
                        <span>
                          <input
                            type="checkbox"
                            name={plot.id}
                            checked={plot.checked}
                            className="mr-2 w-5 h-5 "
                          />
                        </span>
                        {plot.name}
                      </td>
                      <td className="py-4 text-lg text-green-900">
                        {plot.vegetable}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {showModal && (
                <div className="px-8 py-4 bg-white rounded shadow-lg  w-3/4 h-auto top-0 left-0 ">
                  <p>FIll In The Form To Add A Plot</p>
                  <form className="flex flex-col w-full py-4">
                    <input
                      type="text"
                      placeholder="Plot Name"
                      className="w-full border border-gray-300 bg-gray-200 rounded py-2 px-2 mb-3"
                    />
                    <input
                      type="text"
                      placeholder="Crop Type"
                      className="w-full border border-gray-300 bg-gray-200 rounded py-2 px-2 mb-3"
                    />
                    <input
                      type="text"
                      placeholder="Crop Name"
                      className="w-full border border-gray-300 bg-gray-200 rounded py-2 px-2 mb-3"
                    />
                    <input
                      type="text"
                      placeholder="Stage"
                      className="w-full border border-gray-300 bg-gray-200 rounded py-2 px-2 mb-3"
                    />
                    <button type="submit">Submit</button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
