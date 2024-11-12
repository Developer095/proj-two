import React from "react";
import ThemeChangeButton from "@/components/molecules/navbarcomponents/ThemeChangeButton";
import { ChevronRight } from "lucide-react";

export const RightSidebar = () => {
  return (
    <div className="fixed right-0 top-0 h-screen w-[20%] bg-[#0f1117] dark:bg-white">
      <div className="absolute right-5 top-3 flex items-center justify-center gap-2 dark:text-black">
        <ThemeChangeButton />
      </div>
      <div className="absolute left-5 top-32">
        <p className="font-bold text-white dark:text-black">Top Questions</p>
        <ul className="items-left mt-3 flex flex-col gap-3 text-xs">
          <li>
            <span className="group flex flex-row items-center hover:cursor-pointer">
              <p className="dark:text-black">How to center a div?</p>
              <ChevronRight className="absolute left-48 transition-transform group-hover:translate-x-2 dark:fill-black dark:stroke-black" />
            </span>
          </li>
          <li>
            <span className="group flex flex-row items-center hover:cursor-pointer">
              <p className="dark:text-black">
                How to handle asynchronous Operations
              </p>
              <ChevronRight className="absolute left-48 transition-transform group-hover:translate-x-2 dark:fill-black dark:stroke-black" />
            </span>
          </li>
          <li>
            <span className="group flex flex-row items-center hover:cursor-pointer">
              <p className="dark:text-black">NextJs + TypeSCript</p>
              <ChevronRight className="absolute left-48 transition-transform group-hover:translate-x-2 dark:fill-black dark:stroke-black" />
            </span>
          </li>
          <li>
            <span className="group flex flex-row items-center hover:cursor-pointer">
              <p className="dark:text-black">
                How to open a link in new tab in NextJs
              </p>
              <ChevronRight className="absolute left-48 transition-transform group-hover:translate-x-2 dark:fill-black dark:stroke-black" />
            </span>
          </li>
          <li>
            <span className="group flex flex-row items-center hover:cursor-pointer">
              <p className="dark:text-black">Loop inside REACT JSX</p>
              <ChevronRight className="absolute left-48 transition-transform group-hover:translate-x-2 dark:fill-black dark:stroke-black" />
            </span>
          </li>
        </ul>
      </div>

      <div className="absolute left-5 top-[70%]">
        <p className="font-bold text-white dark:text-black">Popular Tags</p>

        <ul className="flex flex-col gap-2 text-[#335ca8] dark:text-orange-500">
          <li className="mt-3 inline-block rounded-md bg-[#151821] px-2 py-1 text-xs">
            JAVASCRIPT
          </li>
          <li className="inline-block rounded-md bg-[#151821] px-2 py-1 text-xs">
            NEXTJS
          </li>
          <li className="inline-block rounded-md bg-[#151821] px-2 py-1 text-xs">
            CSS
          </li>
          <li className="inline-block rounded-md bg-[#151821] px-2 py-1 text-xs">
            HTML
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RightSidebar;
