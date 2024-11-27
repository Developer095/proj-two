"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

const page = ({ params }: { params: { TagID: string } }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`http://127.0.0.1:5000/get-ques-from-tag?QTagID=${params.TagID}`)
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

  if (!data) return <div>Loading...</div>;

  if (data)
    return (
      <div className="bg-[#020817] dark:bg-[#ffffff]">
        <div className="pb-8 pl-2 pt-8">
          <span className="ml-8 text-[25px] font-bold uppercase text-[#ffffff] dark:text-[#020817]">
            ALL Tags
          </span>
        </div>

        <div className="mb-10 flex w-[700px] flex-col pl-5">
          {data.map((item: any, index) => {
            const date = new Date(item.createdAt);

            return (
              <div key={index} className="mt-6 w-full bg-[#0c111b]">
                <div className="flex flex-col gap-3 p-6">
                  <div className="flex items-center justify-between">
                    <Link
                      href={`/question/${item.QuesID}`}
                      id="heading"
                      className="font-bold"
                    >
                      {item.Title}
                    </Link>
                  </div>

                  <div className="flex items-center justify-between border-b border-t border-gray-700 py-1.5">
                    <span
                      id="user"
                      className="flex w-full gap-3 px-2 pl-1 text-sm text-[#94a3b8]"
                    >
                      <p>Posted On: </p>
                      <p>{date.toLocaleDateString()}</p>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
};

export default page;
