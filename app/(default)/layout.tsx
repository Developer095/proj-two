import ThemeChangeButton from "@/components/molecules/navbarcomponents/ThemeChangeButton";
import "../globals.css";
import ResponsiveTester from "@/lib/ResponsiveTester";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="mx-auto flex h-full min-h-screen max-w-7xl justify-center">
      <div className="fixed left-0 top-0 h-screen w-[20%] bg-red-900/20">
        left
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
      <ResponsiveTester />
    </section>
  );
}
