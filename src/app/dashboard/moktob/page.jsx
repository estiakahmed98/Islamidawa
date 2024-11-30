"use client";
import MoktobBishoyForm from "@/components/MoktobBishoyForm";
import ReportTable from "@/components/ReportTableMonthly";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/TabButton";

const MoktobBishoy = () => {
  return (
    <>
      <Tabs defaultValue="dataForm" className="w-full p-4">
        <TabsList>
          <TabsTrigger value="dataForm">তথ্য দিন</TabsTrigger>
          <TabsTrigger value="report">প্রতিবেদন</TabsTrigger>
        </TabsList>
        <TabsContent value="dataForm">
          <div className=" bg-gray-50 rounded shadow">
            <MoktobBishoyForm />
          </div>
        </TabsContent>
        <TabsContent value="report">
          <div className=" bg-gray-50 rounded shadow">
            <ReportTable />
          </div>
        </TabsContent>
      </Tabs>
    </>
  );
};

export default MoktobBishoy;
