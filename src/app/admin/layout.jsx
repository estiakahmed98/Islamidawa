"use client";

import Header from "@/components/Header";
import ImpersonateSidebar from "@/components/impersonateSidebar";
import { useState, useEffect } from "react";

const Page = ({ children }) => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const userEmail = localStorage.getItem("userEmail");
    setUserName(userEmail);
  }, []);

  return (
    <div className="h-screen">
      <Header />
      <div className="flex h-[calc(100vh-104px)] overflow-hidden">
        <ImpersonateSidebar />

        <div className="p-6 grow overflow-y-auto">{children}</div>
      </div>
    </div>
  );
};

export default Page;
