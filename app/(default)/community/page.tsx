"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

const Community = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/get-all-users")
      .then((res) => {
        if (!res.ok) {
          toast.error("Failed to fetch Tags");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        // console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="bg-[#020817] dark:bg-[#ffffff]">
      <div className="pb-8 pl-2 pt-8">
        <span className="ml-8 text-[25px] font-bold uppercase text-[#ffffff] dark:text-[#020817]">
          ALL Users
        </span>
      </div>

      <div className="ml-[17px] mr-6 grid w-[700px] gap-4 sm:grid-cols-1 lg:grid-cols-2">
        {data.map((user: any, index) => {
          const date = new Date(user.createdAt);
          return (
            <div
              key={index}
              className="rounded-[12px] border-2 border-none bg-[#323950] pb-6 shadow-lg dark:border-[#19202e] dark:bg-[#f3f4f6]"
            >
              <div className="mt-4 flex justify-center">
                <div
                  className={cn(
                    `flex h-24 w-24 items-center justify-center rounded-full text-5xl font-semibold text-white`,
                    bgColors[Math.floor(Math.random() * 10)],
                  )}
                >
                  {user.UserName[0]?.toUpperCase()}
                </div>
              </div>
              <div className="mt-5 flex flex-col px-7 text-white">
                <span className="text-center text-sm dark:text-[#020817]">
                  <span className="text-gray-400">First Name:</span>{" "}
                  {user.FirstName}
                </span>
                <span className="text-center text-sm dark:text-[#020817]">
                  <span className="text-gray-400">Last Name:</span>{" "}
                  {user.LastName}
                </span>
                <span className="text-center text-sm dark:text-[#020817]">
                  <span className="text-gray-400">Username:</span>{" "}
                  {user.UserName}
                </span>
                <span className="text-center text-sm dark:text-[#020817]">
                  <span className="text-gray-400">User Email:</span>{" "}
                  {user.Email}
                </span>
                <span className="text-center text-sm dark:text-[#020817]">
                  <span className="text-gray-400">Join Date:</span>{" "}
                  {date.toLocaleDateString()}
                </span>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-12 flex justify-center">
        <button className="h-8 w-14 rounded-[4px] border-none bg-[#878b94] text-[#fffff] dark:bg-[#6f7684] dark:text-black">
          Prev
        </button>
        <button className="ml-2 mr-2 h-8 w-8 rounded-[4px] border-none bg-orange-400">
          1
        </button>
        <button className="h-8 w-14 rounded-[4px] border-none bg-[#272e3f] text-[#fffff] dark:bg-[#dce3f1] dark:text-black">
          Next
        </button>
      </div>
    </div>
  );
};

export default Community;

const bgColors = [
  "bg-[#7bb483]",
  "bg-[#ff6347]",
  "bg-[#4b8bbe]",
  "bg-[#f0ad4e]",
  "bg-[#9b59b6]",
  "bg-[#2ecc71]",
  "bg-[#e74c3c]",
  "bg-[#34495e]",
  "bg-[#f39c12]",
  "bg-[#8e44ad]",
];
