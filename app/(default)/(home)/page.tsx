import { House } from "lucide-react";
import React from "react";
import { Search } from "lucide-react";

const Home = () => {
  return (
    <div className="m-6">
      <div className="flex w-[676px] items-center justify-between gap-2">
        <p className="text-xl font-bold">All Questions</p>
        <button className="rounded-md bg-gradient-to-r from-orange-500 via-orange-400 via-80% to-orange-300 px-1 py-2 text-xs">
          Ask a question
        </button>
      </div>
      <div className="mt-6 flex items-center justify-center">
        <Search className="absolute left-16 p-1 text-[#335ca8]" />
        <input
          type="text"
          placeholder="Search for questions"
          className="w-[600px] rounded-md border-2 border-[#0c111b] bg-[#0c111b] px-2 py-1 pl-8 text-sm"
        />
      </div>

      <div>
        <ul className="mt-6 flex flex-row gap-2">
          <li>
            <button className="rounded-md bg-[#151821] px-2 py-2 text-xs text-[#618ec8] hover:cursor-pointer hover:bg-[#212734]">
              Newest
            </button>
          </li>
          <li>
            <button className="rounded-md bg-[#151821] px-2 py-2 text-xs text-[#618ec8] hover:cursor-pointer hover:bg-[#212734]">
              Recommended
            </button>
          </li>
          <li>
            <button className="rounded-md bg-[#151821] px-2 py-2 text-xs text-[#618ec8] hover:cursor-pointer hover:bg-[#212734]">
              Frequent
            </button>
          </li>
          <li>
            <button className="rounded-md bg-[#151821] px-2 py-2 text-xs text-[#618ec8] hover:cursor-pointer hover:bg-[#212734]">
              Unanswered
            </button>
          </li>
        </ul>
      </div>

      <div className="w-[600px] bg-[#0c111b]">
        <div className="m-6">
          <p id="heading"></p>
          <ul id="language"></ul>
          <div className="border border-b-white border-t-white">
            <span id="user"></span>
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
