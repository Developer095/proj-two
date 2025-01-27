"use client";
import { House, Users, ShieldQuestion, Tag, User2 } from "lucide-react";
import Image from "next/image";
import React from "react";
import logo from "../../Images/logo.png";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";

const LeftSidebar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const sessionToken = localStorage.getItem("sessionToken");

  return (
    <div className="fixed left-0 top-0 flex h-screen w-[120px] min-w-[4rem] flex-shrink-0 justify-center bg-[#0f1117] text-white dark:bg-white dark:text-black sm:w-[150px] md:w-[200px] lg:w-[250px]">
      <Image
        src={logo}
        className="absolute left-4 top-5 h-6 w-16 rounded-md bg-white hover:cursor-pointer dark:bg-orange-500 sm:h-8 sm:w-24 md:h-12 md:w-32"
        alt="LOGO"
        onClick={() => router.push("/")}
      />
      <ul className="absolute left-8 top-32 flex flex-col gap-2 text-sm font-semibold">
        {NavLinks.map((Item, i) => {
          return (
            <Link
              key={i}
              href={Item.url}
              className={cn(
                "w-24 rounded-md py-2 pl-2 hover:cursor-pointer sm:w-28 md:w-32",
                Item.url === pathname &&
                  "bg-gradient-to-r from-orange-500 via-orange-400 via-70% to-orange-300",
              )}
            >
              <span className="flex flex-row gap-2">
                <Item.img />
                <p>{Item.name}</p>
              </span>
            </Link>
          );
        })}
      </ul>

      <div className="absolute bottom-3 left-8 flex flex-col gap-3 dark:text-white">
        {sessionToken ? (
          <button
            className="flex h-6 w-28 items-center justify-center rounded-md bg-[#212734] px-8 text-xs font-medium text-orange-500 dark:bg-orange-500 dark:text-white sm:h-6 sm:w-36 sm:px-4 sm:text-lg lg:h-8 lg:w-44"
            onClick={() => {
              localStorage.setItem("sessionToken", "");
              router.refresh();
            }}
          >
            Logout
          </button>
        ) : (
          <>
            <Link
              href={"/login"}
              className="flex h-6 w-28 items-center justify-center rounded-md bg-[#212734] px-8 text-xs text-orange-500 dark:bg-orange-500 dark:text-white sm:h-6 sm:w-36 sm:px-4 sm:text-lg lg:h-8 lg:w-40"
            >
              Login
            </Link>
            <Link
              href={"/signup"}
              className="flex h-6 w-28 items-center justify-center rounded-md bg-[#151821] px-8 text-xs sm:h-6 sm:w-36 sm:px-4 sm:text-lg lg:h-8 lg:w-40"
            >
              Sign up
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default LeftSidebar;

const NavLinks = [
  { name: "Home", url: "/", img: House },
  { name: "Community", url: "/community", img: Users },
  { name: "Tags", url: "/tags", img: Tag },
  { name: "Profile", url: "/profile", img: User2 },
  { name: "Ask a Question", url: "/post-question", img: ShieldQuestion },
];
