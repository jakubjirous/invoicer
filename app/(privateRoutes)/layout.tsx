import Navbar from "@/app/ui/navbar";

export default function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex min-h-screen flex-col lg:flex-row">
      <Navbar />
      <div className="container mx-auto flex min-h-full flex-1 px-6 py-8 md:px-12 md:py-14 lg:px-20 lg:py-16">
        {children}
      </div>
    </main>
  );
}
