import ThemeChangeButton from "@/components/molecules/navbarcomponents/ThemeChangeButton";
import "../globals.css";
import Image from "next/image";
import logo from "../../Images/logo.png";
import ResponsiveTester from "@/lib/ResponsiveTester";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="mx-auto flex h-full min-h-screen max-w-7xl justify-center">
      <div className="fixed left-0 top-0 flex h-screen w-[20%] justify-center bg-[#0f1117] text-white dark:bg-white dark:text-black">
        <Image
          src={logo}
          className="absolute top-5 h-12 w-32 rounded-md bg-white hover:cursor-pointer dark:bg-orange-500"
          alt="LOGO"
        />

        <ul className="absolute left-8 top-32 flex flex-col gap-2 text-sm font-semibold">
          <li className="w-44 rounded-md bg-gradient-to-r from-orange-500 via-orange-400 via-70% to-orange-300 py-2 pl-2 hover:cursor-pointer">
            <span className="flex flex-row gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-house"
              >
                <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
                <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              </svg>
              <p>Home</p>
            </span>
          </li>

          <li className="py-3 hover:cursor-pointer">
            <span className="flex flex-row gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-users-round"
              >
                <path d="M18 21a8 8 0 0 0-16 0" />
                <circle cx="10" cy="8" r="5" />
                <path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3" />
              </svg>
              <p>Community</p>
            </span>
          </li>
          <li className="py-3 hover:cursor-pointer">
            <span className="flex flex-row gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-star"
              >
                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
              </svg>
              <p>Collections</p>
            </span>
          </li>
          <li className="py-3 hover:cursor-pointer">
            <span className="flex flex-row gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-tag"
              >
                <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" />
                <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
              </svg>
              <p>Tags</p>
            </span>
          </li>
          <li className="py-3 hover:cursor-pointer">
            <span className="flex flex-row gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-shield-question"
              >
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                <path d="M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3" />
                <path d="M12 17h.01" />
              </svg>
              <p>Ask a Question</p>
            </span>
          </li>
        </ul>

        <div className="absolute bottom-3 left-8 flex flex-col gap-3 dark:text-white">
          <button className="h-8 w-44 rounded-md bg-[#212734] px-8 text-orange-500 dark:bg-orange-500 dark:text-white">
            Login
          </button>
          <button className="h-8 w-44 rounded-md bg-[#151821] px-8">
            Sign up
          </button>
        </div>
      </div>

      {/* ###################################################
          ###################################################

                            SEARCH BAR
      
      ###################################################
      ###################################################*/}

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
