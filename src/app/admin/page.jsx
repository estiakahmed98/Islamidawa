import Dashboard from "@/components/Dashboard";
import React from "react";
import UsersTable from "./users/page";

const page = () => {
  return (
    <div className="flex flex-col min-h-screen gap-4">
      <div className="max-h-[500px] border border-[#155E75] overflow-y-auto">
        <Dashboard />
      </div>

      <div className="max-h-[500px] border border-[#155E75] overflow-y-auto">
        <UsersTable />
      </div>
    </div>
  );
};

export default page;
