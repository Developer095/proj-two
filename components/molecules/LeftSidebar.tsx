"use client";
import {
  House,
  Users,
  Star,
  Tags,
  ShieldQuestion,
  Tag,
  User2,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import logo from "../../Images/logo.png";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const LeftSidebar = () => {
  const pathname = usePathname();
  return (
    <div className="fixed left-0 top-0 flex h-screen w-[20%] justify-center bg-[#0f1117] text-white dark:bg-white dark:text-black">
      <Image
        src={logo}
        className="absolute top-5 h-12 w-32 rounded-md bg-white hover:cursor-pointer dark:bg-orange-500"
        alt="LOGO"
      />

      <ul className="absolute left-8 top-32 flex flex-col gap-2 text-sm font-semibold">
        {NavLinks.map((Item, i) => {
          return (
            <Link
              key={i}
              href={Item.url}
              className={cn(
                "w-44 rounded-md py-2 pl-2 hover:cursor-pointer",
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
        <button className="h-8 w-44 rounded-md bg-[#212734] px-8 text-orange-500 dark:bg-orange-500 dark:text-white">
          Login
        </button>
        <button className="h-8 w-44 rounded-md bg-[#151821] px-8">
          Sign up
        </button>
      </div>
    </div>
  );
};

export default LeftSidebar;

const NavLinks = [
  { name: "Home", url: "/", img: House },
  { name: "Community", url: "/community", img: Users },
  { name: "Collections", url: "/collections", img: Star },
  { name: "Tags", url: "/tags", img: Tag },
  { name: "Profile", url: "/profile", img: User2 },
  { name: "Ask a Question", url: "/post-question", img: ShieldQuestion },
];
