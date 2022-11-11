import DashboardNav from "@/components/dashboard-nav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex overflow-hidden h-screen">
        <aside className="bg-white w-72 border-r">
          <div className="bg-white h-full p-10">
            <DashboardNav />
          </div>
        </aside>

        <main>{children}</main>
      </div>
    </>
  );
}
