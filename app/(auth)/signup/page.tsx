"use client";
import React, { FormEvent, useState } from "react";
import Image from "next/image";
import logo from "../../../Images/logo.png";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import Link from "next/link";

const SignUp = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    uname: "",
    email: "",
    pass: "",
  });
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch("http://127.0.0.1:5000/register", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      console.log("1. Data: ", data);
      if (data.error) {
        toast.error(data.error);
      } else {
        toast.success(`User with email: ${data.Email} successfully created`);
        setFormData({ fname: "", lname: "", uname: "", email: "", pass: "" });
        router.push("/login");
      }
    } catch (error) {
      console.error("2. Error: ", error);
    }
  };

  return (
    <div className="flex items-center justify-center bg-[#020817]">
      <div className="absolute top-20 h-[520px] w-[350px] rounded-md bg-white">
        <form className="top-4 pl-2 pt-3" onSubmit={handleSubmit}>
          <div className="pl-4">
            <Image
              src={logo}
              alt="logo"
              className="mt-2 h-12 w-32 rounded-md bg-orange-500 hover:cursor-pointer"
            />
          </div>
          <div className="mt-4 pl-4 font-semibold text-black">Sign Up</div>
          <div className="pl-4 text-xs text-gray-600">
            to become a part of Whatever
          </div>

          <div className="mt-2 pl-4">
            <span>
              <label className="text-xs font-semibold text-black">
                First Name
              </label>
              <input
                type="text"
                name="fname"
                className="h-[30px] w-[300px] rounded-sm border px-2 text-sm text-orange-500"
                required
                value={formData.fname}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, fname: e.target.value }))
                }
              />
            </span>
          </div>

          <div className="mt-2 pl-4">
            <span>
              <label className="text-xs font-semibold text-black">
                Last Name
              </label>
              <input
                type="text"
                name="lname"
                className="h-[30px] w-[300px] rounded-sm border px-2 text-sm text-orange-500"
                required
                value={formData.lname}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, lname: e.target.value }))
                }
              />
            </span>
          </div>

          <div className="mt-2 pl-4">
            <span>
              <label className="text-xs font-semibold text-black">
                UserName
              </label>
              <input
                type="text"
                name="uname"
                className="h-[30px] w-[300px] rounded-sm border px-2 text-sm text-orange-500"
                required
                value={formData.uname}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, uname: e.target.value }))
                }
              />
            </span>
          </div>
          <div className="mt-2 pl-4">
            <span>
              <label className="text-xs font-semibold text-black">
                Email address
              </label>
              <input
                type="email"
                name="email"
                className="h-[30px] w-[300px] rounded-sm border px-2 text-sm text-orange-500"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, email: e.target.value }))
                }
              />
            </span>
          </div>
          <div className="mt-2 pl-4">
            <span>
              <label className="text-xs font-semibold text-black">
                Password
              </label>
              <input
                type="text"
                name="password"
                className="h-[30px] w-[300px] rounded-sm border px-2 text-sm text-orange-500"
                required
                value={formData.pass}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, pass: e.target.value }))
                }
              />
            </span>
          </div>
          <div className="mt-3 flex items-center justify-center">
            <button
              type="submit"
              className="mr-3 h-[30px] w-[300px] rounded-md bg-orange-500 bg-gradient-to-r from-orange-500 via-orange-400 via-70% to-orange-200 text-sm font-semibold"
            >
              continue
            </button>
          </div>
          <div>
            <span className="mt-3 flex gap-1 pl-4 text-xs">
              <p className="text-gray-600">Already Have An Account?</p>
              <Link
                href={"/login"}
                className="text-orange-500 hover:cursor-pointer"
              >
                Login
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
