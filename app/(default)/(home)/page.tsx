import { House } from "lucide-react";
import React from "react";
import { Search, ThumbsUp, MessageCircle, Eye } from "lucide-react";

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

      <div className="mt-6 w-[600px] bg-[#0c111b]">
        <div className="p-6">
          <p id="heading" className="font-bold">
            How to center a div?
          </p>
          <ul
            id="language"
            className="mb-2 mt-2 flex gap-2 text-xs text-[#2567e1]"
          >
            <li className="rounded-md bg-gray-800 px-2 py-1">Html</li>
            <li className="rounded-md bg-gray-800 px-2 py-1">CSS</li>
          </ul>
          <div className="flex items-center justify-between border-b border-t border-gray-700 pb-1 pt-1">
            <span id="user" className="flex gap-2 text-sm text-[#94a3b8]">
              <p>Zubayer Bin Matin</p>
              <p>Date</p>
            </span>
            <ul className="flex gap-3">
              <li>
                <span className="flex items-center text-xs">
                  <ThumbsUp className="h-4" />
                  <p>Vote</p>
                </span>
              </li>
              <li>
                <span className="flex items-center text-xs">
                  <MessageCircle className="h-4" />
                  <p>Comment</p>
                </span>
              </li>
              <li>
                <span className="flex items-center text-xs">
                  <Eye className="h-4" />
                  <p>Views</p>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
