import { House, Users, Star, Tags, ShieldQuestion } from "lucide-react";
import Image from "next/image";
import React from "react";
import logo from "../../Images/logo.png";

const LeftSidebar = () => {
  return (
    <div className="fixed left-0 top-0 flex h-screen w-[20%] justify-center bg-[#0f1117] text-white dark:bg-white dark:text-black">
      <Image
        src={logo}
        className="absolute top-5 h-12 w-32 rounded-md bg-white hover:cursor-pointer dark:bg-orange-500"
        alt="LOGO"
      />

      <ul className="absolute left-8 top-32 flex flex-col gap-2 text-sm font-semibold">
        <li className="w-44 rounded-md bg-gradient-to-r from-orange-500 via-orange-400 via-70% to-orange-300 py-2 pl-2 hover:cursor-pointer">
          <span className="flex flex-row gap-2">
            <House />
            <p>Home</p>
          </span>
        </li>

        <li className="py-3 hover:cursor-pointer">
          <span className="flex flex-row gap-3">
            <Users />
            <p>Community</p>
          </span>
        </li>
        <li className="py-3 hover:cursor-pointer">
          <span className="flex flex-row gap-3">
            <Star />
            <p>Collections</p>
          </span>
        </li>
        <li className="py-3 hover:cursor-pointer">
          <span className="flex flex-row gap-3">
            <Tags />
            <p>Tags</p>
          </span>
        </li>
        <li className="py-3 hover:cursor-pointer">
          <span className="flex flex-row gap-3">
            <ShieldQuestion />
            <p>Ask a Question</p>
          </span>
        </li>
      </ul>

      <div className="absolute bottom-3 left-8 flex flex-col gap-3 dark:text-white">
        <button className="h-8 w-44 rounded-md bg-[#212734] px-8 text-orange-500 dark:bg-orange-500 dark:text-white">
          Login
        </button>
        <button className="h-8 w-44 rounded-md bg-[#151821] px-8">
          Sign up
        </button>
      </div>
    </div>
  );
};

export default LeftSidebar;
