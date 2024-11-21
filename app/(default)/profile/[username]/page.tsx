import React from "react";
import { Calendar, Medal } from "lucide-react";

const page = ({ params }: { params: { username: string } }) => {
  return (
    <div className="bg-[#020817] dark:bg-[#ffffff]">
      <div className="mb-8 flex flex-row">
        <div className="ml-8 mt-12 h-[150px] w-[150px] rounded-md bg-gray-200"></div>
        <div className="flex flex-col">
          <span className="ml-8 mt-16 text-xl text-[#ffffff] dark:text-[#020817]">
            Name
          </span>
          <span className="ml-8 mt-4 text-lg text-[#ffffff] dark:text-[#020817]">
            Field
          </span>

          <div className="mt-4 flex flex-row items-center">
            <Calendar className="ml-8 inline text-[#ffffff] dark:text-[#020817]" />
            <span className="ml-2 text-[#ffffff] dark:text-[#020817]">
              Join date
            </span>
          </div>
        </div>
      </div>
      <span className="ml-6 mt-12 text-xl font-bold text-[#ffffff] dark:text-[#020817]">
        Stats
      </span>
      <div className="ml-6 mt-2 flex flex-row">
        <div className="flex h-[90px] w-[160px] items-center justify-center bg-black">
          <div className="flex h-full w-full flex-row border-none bg-[#151821] px-2 py-3 text-center shadow-lg dark:border-[#19202e] dark:bg-[#f3f4f6]">
            <div className="ml-[1px] mr-[9px] flex flex-col items-center justify-center">
              <span className="text-[#5d88bf] dark:text-[#000000]">0</span>
              <span className="text-sm text-[#5d88bf] text-gray-400 dark:text-[#000000]">
                Questions
              </span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <span className="text-[#5d88bf] text-white dark:text-[#000000]">
                0
              </span>
              <span className="text-sm text-[#5d88bf] text-gray-400 dark:text-[#000000]">
                Answers
              </span>
            </div>
          </div>
        </div>

        <div className="ml-4 mr-4">
          <div className="flex h-[90px] w-[162px] flex-row items-center justify-center border-none bg-[#151821] shadow-lg dark:border-[#19202e] dark:bg-[#f3f4f6]">
            <Medal className="mr-2 text-yellow-400" />
            <div className="items-center justify-center">
              <span className="flex flex-col items-center text-[#5d88bf] dark:text-[#000000]">
                0
              </span>
              <span className="text-sm text-[#5d88bf] dark:text-[#000000]">
                Gold medal
              </span>
            </div>
          </div>
        </div>

        <div className="mr-4">
          <div className="flex h-[90px] w-[162px] flex-row items-center justify-center border-none bg-[#151821] shadow-lg dark:border-[#19202e] dark:bg-[#f3f4f6]">
            <Medal className="mr-2 text-gray-300" />
            <div className="items-center justify-center">
              <span className="flex flex-col items-center text-[#5d88bf] dark:text-[#000000]">
                0
              </span>
              <span className="text-sm text-[#5d88bf] dark:text-[#000000]">
                Silver medal
              </span>
            </div>
          </div>
        </div>

        <div className="">
          <div className="flex h-[90px] w-[162px] flex-row items-center justify-center border-none bg-[#151821] shadow-lg dark:border-[#19202e] dark:bg-[#f3f4f6]">
            <Medal className="mr-2 text-yellow-700" />
            <div className="items-center justify-center">
              <span className="flex flex-col items-center text-[#5d88bf] dark:text-[#000000]">
                0
              </span>
              <span className="text-sm text-[] dark:text-[#000000]">
                Bronze medal
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="ml-6 mt-6">
        <div className="flex h-[28px] w-40 items-center justify-center rounded-md bg-[#1e293b] dark:bg-[#f1f5f9]">
          <button className="h-6 w-[70px] rounded-md bg-[#ffedd5] text-xs text-[#f9763e]">
            Top Posts
          </button>
          <button className="h-6 w-[80px] text-xs text-[#5d88bf] dark:text-[#000000]">
            Answers
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
