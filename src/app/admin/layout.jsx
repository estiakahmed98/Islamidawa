"use client";

import Header from "@/components/Header";
import ImpersonateSidebar from "@/components/impersonateSidebar";
import Sidebar from "@/components/Sidebar";
import SidebarAdmin from "@/components/SidebarAdmin";

const page = ({ children }) => {
  return (
    <div className="h-screen">
      <Header />
      <div className="flex h-[calc(100vh-104px)] overflow-hidden">
        <ImpersonateSidebar />

        {/* <Sidebar /> */}
        <div className="p-6 grow overflow-y-auto">{children}</div>
      </div>
    </div>
  );
};

export default page;
