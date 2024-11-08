import ThemeChangeButton from "@/components/molecules/navbarcomponents/ThemeChangeButton";
import "../globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="mx-auto flex h-full min-h-screen max-w-7xl justify-center">
      <div className="fixed left-0 top-0 mt-28 flex h-screen w-[20%] justify-center bg-[#0f1117] text-white dark:bg-white dark:text-black">
        <ul className="absolute left-14 top-5 flex flex-col gap-4 font-semibold">
          <li className="w-56 rounded-md bg-gradient-to-r from-orange-500 via-orange-400 via-70% to-orange-300 py-4 pl-3 hover:cursor-pointer">
            <span className="flex flex-row gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
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
                height="24"
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
                height="24"
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
                height="24"
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
                height="24"
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

        <div className="absolute bottom-32 flex flex-col gap-3">
          <button className="h-12 w-64 rounded-md bg-[#212734] px-8 text-orange-500 dark:bg-orange-300">
            Login
          </button>
          <button className="h-12 w-64 rounded-md bg-[#151821] px-8">
            Sign up
          </button>
        </div>
      </div>

      <section className="mx-[245px] h-[200vh] w-[60%] flex-1">
        <div className="fixed left-0 right-0 top-0 ml-[20%] mr-[20%] bg-yellow-900">
          <ThemeChangeButton />
        </div>
        <div className="mt-10 bg-blue-500">{children}</div>
      </section>

      <div className="fixed right-0 top-0 h-screen w-[20%] bg-green-900/20">
        right
      </div>
    </section>
  );
}
