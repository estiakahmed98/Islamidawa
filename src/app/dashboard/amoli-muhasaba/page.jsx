"use client";

import AmoliMuhasabaForm from "@/components/AmoliMuhasabaForm";
import ReportTable from "@/components/ReportTableMonthly";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/TabButton";

export default function AmoliMuhasaba() {
  return (
    <Tabs defaultValue="dataForm" className="w-full p-4">
      <TabsList>
        <TabsTrigger value="dataForm">তথ্য দিন</TabsTrigger>
        <TabsTrigger value="report">প্রতিবেদন</TabsTrigger>
      </TabsList>
      <TabsContent value="dataForm">
        <div className=" bg-gray-50 rounded shadow">
          <AmoliMuhasabaForm />
        </div>
      </TabsContent>
      <TabsContent value="report">
        <div className=" bg-gray-50 rounded shadow">
          <ReportTable />
        </div>
      </TabsContent>
    </Tabs>
  );
}

// import AmoliMuhasabaForm from "@/components/AmoliMuhasabaForm";
// import ButtonsGroup from "@/components/ButtonsGroup";

// const AmoliMuhasaba = () => {
//   return (
//     <>

//     তথ্য দিন
//       <ButtonsGroup />
//       <AmoliMuhasabaForm />
//     </>
//   );
// };

// export default AmoliMuhasaba;
