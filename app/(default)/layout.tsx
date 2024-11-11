import ThemeChangeButton from "@/components/molecules/navbarcomponents/ThemeChangeButton";
import "../globals.css";
import Image from "next/image";
import ResponsiveTester from "@/lib/ResponsiveTester";
import { House } from "lucide-react";
import LeftSidebar from "@/components/molecules/LeftSidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="mx-auto flex h-full min-h-screen max-w-7xl justify-center">
      <LeftSidebar />

      <section className="mx-[245px] h-[200vh] w-[60%] flex-1">
        <div className="fixed right-20 top-0 ml-[19%] mr-[13%] flex h-10 w-[61%] justify-center bg-[#0f1117] pb-3 dark:bg-white">
          <div className="relative top-2 flex flex-row gap-3 text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-search absolute left-4 top-1/2 z-10 -translate-y-1/2 transform text-[#335ca8] dark:stroke-orange-500"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <input
              type="text"
              id="Search_Bar"
              placeholder="Search for anything..."
              className="w-80 rounded-xl border border-[#1e293b] bg-[#0f1117] px-4 py-2 pl-10 text-[#335ca8] dark:border-[#335ca8] dark:bg-white dark:text-red-500"
            />
          </div>
        </div>
        <div className="mt-10 bg-blue-500">{children}</div>
      </section>

      {/* ##############################################
      ##################################################


                  POPULAR TAGS SECTION
      
      
      ###################################################
      ################################################### */}

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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-arrow-right absolute left-48 transition-transform group-hover:translate-x-2 dark:fill-black dark:stroke-black"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </span>
            </li>
            <li>
              <span className="group flex flex-row items-center hover:cursor-pointer">
                <p className="dark:text-black">
                  How to handle asynchronous Operations
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-arrow-right absolute left-48 transition-transform group-hover:translate-x-2 dark:fill-black dark:stroke-black"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </span>
            </li>
            <li>
              <span className="group flex flex-row items-center hover:cursor-pointer">
                <p className="dark:text-black">NextJs + TypeSCript</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-arrow-right absolute left-48 transition-transform group-hover:translate-x-2 dark:fill-black dark:stroke-black"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </span>
            </li>
            <li>
              <span className="group flex flex-row items-center hover:cursor-pointer">
                <p className="dark:text-black">
                  How to open a link in new tab in NextJs
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-arrow-right absolute left-48 transition-transform group-hover:translate-x-2 dark:fill-black dark:stroke-black"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </span>
            </li>
            <li>
              <span className="group flex flex-row items-center hover:cursor-pointer">
                <p className="dark:text-black">Loop inside REACT JSX</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-arrow-right absolute left-48 transition-transform group-hover:translate-x-2 dark:fill-black dark:stroke-black"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
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
      {/* <ResponsiveTester /> */}
    </section>
  );
}
