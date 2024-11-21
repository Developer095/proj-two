import React from "react";
import Image from "next/image";
import logo from "../../../Images/logo.png";
import { ScanFace } from "lucide-react";

function login() {
  return (
    <div className="flex items-center justify-center bg-[#020817]">
      <div className="absolute top-20 h-[400px] w-[350px] rounded-md bg-white">
        <ul className="top-4 pl-2">
          <li className="pl-4">
            <Image
              src={logo}
              alt="logo"
              className="mt-2 h-12 w-32 rounded-md bg-orange-500 hover:cursor-pointer"
            />
          </li>
          <li className="mt-4 pl-4 font-semibold text-black">Login</li>
          <li className="pl-4 text-xs text-gray-600">
            to become a part of Whatever
          </li>
          <li className="mt-3 pl-4">
            <div className="flex w-[300px] items-center gap-3 rounded-sm border border-black bg-white p-1 transition-all duration-1000 hover:cursor-pointer hover:bg-orange-500">
              <ScanFace className="rounded-md bg-black p-1" />
              <p className="text-sm text-black">Continue with Github</p>
            </div>
          </li>
          <li className="mt-3 pl-4">
            <div className="flex w-[300px] items-center gap-3 rounded-sm border border-black bg-white p-1 transition-all duration-1000 hover:cursor-pointer hover:bg-orange-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22 "
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chrome rounded-md bg-black p-1"
              >
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="4" />
                <line x1="21.17" x2="12" y1="8" y2="8" />
                <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
                <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
              </svg>
              <p className="text-sm text-black">Continue with Github</p>
            </div>
          </li>
          <li className="mt-3 flex items-center justify-center text-gray-600">
            or
          </li>
          <li className="mt-2 pl-4">
            <span>
              <label className="text-xs font-semibold text-black">
                Email address or username
              </label>
              <input
                type="email"
                className="h-[30px] w-[300px] rounded-sm border"
              />
            </span>
          </li>
          <li className="mt-3 flex items-center justify-center">
            <button className="mr-3 h-[30px] w-[300px] rounded-md bg-orange-500 bg-gradient-to-r from-orange-500 via-orange-400 via-70% to-orange-200 text-sm font-semibold">
              continue
            </button>
          </li>
          <li>
            <span className="mt-3 flex gap-1 pl-4 text-xs">
              <p className="text-gray-600">No account?</p>
              <p className="text-orange-500 hover:cursor-pointer">Sign in</p>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default login;
