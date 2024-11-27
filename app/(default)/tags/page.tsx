"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

const tags = () => {
  const [tagsData, setTagsData] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/get-tags")
      .then((res) => {
        if (!res.ok) {
          toast.error("Failed to fetch Tags");
        }
        return res.json();
      })
      .then((data) => {
        setTagsData(data);
        // console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="bg-[#020817] dark:bg-[#ffffff]">
      <div className="pb-16 pl-2 pt-8">
        <span className="ml-8 text-[25px] font-bold uppercase text-[#ffffff] dark:text-[#020817]">
          ALL Tags
        </span>
      </div>

      <div className="mb-10 grid grid-cols-3 gap-4 pl-8 pr-8">
        {tagsData.map((type: any, index) => {
          return (
            <div key={index}>
              <div className="h-28 w-52 rounded-[10px] border-none bg-[#0c111b] shadow-lg dark:bg-[#f3f4f6]">
                <div className="flex justify-center">
                  <Link href={`/tags/${type.QTagID}`}>
                    <button className="font-sm mt-6 block h-8 rounded-sm bg-[#131b2b] px-3 text-sm font-semibold text-[#94a3b8] dark:bg-[#dce3f1]">
                      {type.Tag}
                    </button>
                  </Link>
                </div>
                <div className="mt-6 flex justify-center">
                  <span className="font-sm mr-2 text-[12px] text-[#f47f23]">
                    {type.TotalQuestions}
                  </span>
                  <span className="font-sm text-[12px] text-[#94a3b8]">
                    Questions
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

export default tags;
