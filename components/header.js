import React from 'react'
import Image from "next/image";
import logo from "../public/images/logo2.png";

export default function header() {
  return (
    <div className="w-full px-16 h-20 flex flex-between justify-between items-center ">
        <Image src={logo} width={250} height={100} />
        <ul className="flex flex-row justify-between items-center text-green-950 ">
          <li className="mx-8 font-bold text-3xl hover:underline cursor-pointer">
            About
          </li>
          <li className="mx-8 font-bold text-3xl hover:underline cursor-pointer">
            Profile
          </li>
        </ul>
      </div>
  )
}
