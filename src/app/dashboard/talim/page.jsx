"use client";
import TalimForm from "@/components/TalimForm";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/TabButton";
import ReportTable from "@/components/ReportTableMonthly";

const Talim = () => {
  return (
    <>
      <Tabs defaultValue="dataForm" className="w-full p-4">
        <TabsList>
          <TabsTrigger value="dataForm">তথ্য দিন</TabsTrigger>
          <TabsTrigger value="report">প্রতিবেদন</TabsTrigger>
        </TabsList>
        <TabsContent value="dataForm">
          <div className=" bg-gray-50 rounded shadow">
            <TalimForm />
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

export default Talim;
