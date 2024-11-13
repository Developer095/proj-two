import "../globals.css";
import { Search } from "lucide-react";
import RightSidebar from "@/components/molecules/navbarcomponents/RightSidebar";
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
            <Search className="absolute left-3 pt-1 text-white dark:text-black" />
            <input
              type="text"
              id="Search_Bar"
              placeholder="Search for anything..."
              className="w-80 rounded-xl border border-[#1e293b] bg-[#0f1117] px-4 py-2 pl-10 text-[#335ca8] dark:border-[#335ca8] dark:bg-white dark:text-red-500"
            />
          </div>
        </div>
        <div className="absolute left-60 top-10 ml-1 min-w-min">{children}</div>
      </section>
      <RightSidebar />
    </section>
  );
}
