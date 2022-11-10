import DashboardNav from "@/components/dashboard-nav";
import { Suspense } from "react";
import Loading from "./loading";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex overflow-hidden h-screen">
        <aside className="bg-white w-72 border-r">
          <div className="bg-white h-full p-10">
            <DashboardNav />
          </div>
        </aside>

        <Suspense fallback={<Loading />}>
          <main>{children}</main>
        </Suspense>
      </div>
    </>
  );
}
