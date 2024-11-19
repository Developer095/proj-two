import React from "react";
import Image from "next/image";
import logo from "../../../Images/logo.png";

const Signin = () => {
  return (
    <div className="bg-[#020817]">
      heh hello
      <div>
        <ul>
          <li>
            <span>
              <Image
                src={logo}
                alt="logo"
                className="absolute top-5 h-12 w-32 rounded-md bg-white hover:cursor-pointer dark:bg-orange-500"
              />
            </span>
          </li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default Signin;
