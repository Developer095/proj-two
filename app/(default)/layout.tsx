import "../globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="flex min-h-screen justify-center max-w-7xl mx-auto h-full">
      <div className="bg-red-900/20 w-[20%] fixed top-0 h-screen left-0">
        left
      </div>

      <section className="flex-1 h-[200vh] w-[60%] mx-[245px]">
        <div className="bg-yellow-900 left-0 right-0 ml-[20%] mr-[20%] top-0 fixed">
          navbar
        </div>
        <div className="bg-blue-500 mt-10">{children}</div>
      </section>

      <div className="bg-green-900/20 w-[20%] fixed top-0 h-screen right-0">
        right
      </div>
    </section>
  );
}
