"use client";
import React, { useState } from "react";
import AmoliChart from "@/components/AmoliChart";
import TalimDonutChart from "@/components/TalimBisoyChart";
import Tally from "@/components/Tally";
// import { Tabs, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
// import { TabsContent } from "@radix-ui/react-tabs";

import {
  moktobData_faysal,
  DayeBisoyData_faysal,
  DawatiBisoyData_faysal,
  DawatiMoslishData_faysal,
  JamatBisoyData_faysal,
  DineFeraData_faysal,
  SoforBisoyData_faysal,
  AmoliChartData_faysal,
  TalimDonutChartData1_faysal,
  TalimDonutChartData2_faysal,
} from "@/app/data/data_faysal";
import {
  moktobData_jewel,
  DayeBisoyData_jewel,
  DawatiBisoyData_jewel,
  DawatiMoslishData_jewel,
  JamatBisoyData_jewel,
  DineFeraData_jewel,
  SoforBisoyData_jewel,
  AmoliChartData_jewel,
  TalimDonutChartData1_jewel,
  TalimDonutChartData2_jewel,
} from "@/app/data/data_jewel";

import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/TabButton";

const NewDashboard = () => {
  const [activeTab, setActiveTab] = useState("daily");

  // Function to combine Faysal and Jewel data
  const combineData = (faysalData, jewelData) => {
    return faysalData.map((faysalItem, index) => {
      const jewelItem = jewelData[index];

      // Combine the values and max values
      const combinedValue = (faysalItem.value || 0) + (jewelItem.value || 0);
      const combinedMax = (faysalItem.max || 0) + (jewelItem.max || 0);

      return {
        label: faysalItem.label,
        value: combinedValue,
        max: combinedMax,
      };
    });
  };

  const combinedMoktobData = combineData(
    moktobData_faysal.data,
    moktobData_jewel.data
  );
  const combinedDayeBisoyData = combineData(
    DayeBisoyData_faysal.data,
    DayeBisoyData_jewel.data
  );
  const combinedDawatiBisoyData = combineData(
    DawatiBisoyData_faysal.data,
    DawatiBisoyData_jewel.data
  );
  const combinedDawatiMoslishData = combineData(
    DawatiMoslishData_faysal.data,
    DawatiMoslishData_jewel.data
  );
  const combinedJamatBisoyData = combineData(
    JamatBisoyData_faysal.data,
    JamatBisoyData_jewel.data
  );
  const combinedDineFeraData = combineData(
    DineFeraData_faysal.data,
    DineFeraData_jewel.data
  );
  const combinedSoforBisoyData = combineData(
    SoforBisoyData_faysal.data,
    SoforBisoyData_jewel.data
  );

  const combineChartData = (faysalData, jewelData) => {
    if (!Array.isArray(faysalData) || !Array.isArray(jewelData)) {
      throw new Error("Input data must be arrays.");
    }

    return faysalData.map((faysalItem, index) => {
      const jewelItem = jewelData[index];

      if (!faysalItem || !jewelItem) {
        throw new Error("Mismatch in data structure.");
      }
      const combinedValue =
        ((faysalItem.value || 0) + (jewelItem.value || 0)) / 2;

      const newClosedValue =
        faysalItem.name === "Closed" || jewelItem.name === "Closed"
          ? combinedValue
          : undefined;

      return {
        ...faysalItem,
        value: combinedValue,
        name: faysalItem.name,
        color: faysalItem.color,
        ...(newClosedValue !== undefined && { closedValue: newClosedValue }),
      };
    });
  };

  // Example Usage:
  const combinedAmoliChartData = combineChartData(
    AmoliChartData_faysal,
    AmoliChartData_jewel
  );

  const combinedTalimDonutChartData1 = combineChartData(
    TalimDonutChartData1_faysal,
    TalimDonutChartData1_jewel
  );

  const combinedTalimDonutChartData2 = combineChartData(
    TalimDonutChartData2_faysal,
    TalimDonutChartData2_jewel
  );

  const currentDate = new Date().toISOString().split("T")[0];

  return (
    <Tabs defaultValue="daily" className="w-full p-4">
      <div className="flex justify-between">
        <TabsList>
          <TabsTrigger value="daily">Daily</TabsTrigger>
          <TabsTrigger value="monthly">Monthly</TabsTrigger>
          <TabsTrigger value="yearly">Yearly</TabsTrigger>
        </TabsList>
        <div>
          <form className="border px-4 py-1 rounded-lg">
            <input type="date" defaultValue={currentDate}></input>
          </form>
        </div>
      </div>

      {/* Daily Tab Content */}
      <TabsContent value="daily">
        <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-8 pb-4 pt-2">
          {/* Render Combined Data */}
          <AmoliChart
            data={combinedAmoliChartData} // Combine Data
            innerRadius={70}
            outerRadius={115}
            startAngle={90}
            endAngle={450}
          />
          <TalimDonutChart
            data1={combinedTalimDonutChartData1} // Combine Data
            data2={combinedTalimDonutChartData2} // Combine Data
            innerRadius={60}
            outerRadius={100}
            startAngle={90}
            endAngle={450}
          />
          <Tally data={{ title: "মক্তব বিষয়", data: combinedMoktobData }} />
          <Tally data={{ title: "দা’য়ী বিষয়", data: combinedDayeBisoyData }} />
          <Tally
            data={{ title: "দাওয়াতি বিষয়", data: combinedDawatiBisoyData }}
          />
          <Tally
            data={{ title: "দাওয়াতি মজলিশ", data: combinedDawatiMoslishData }}
          />
          <Tally data={{ title: "জামাত বিষয়", data: combinedJamatBisoyData }} />
          <Tally
            data={{ title: "দ্বীনে ফিরে এসেছে", data: combinedDineFeraData }}
          />
          <Tally data={{ title: "সফর বিষয়", data: combinedSoforBisoyData }} />
        </div>
      </TabsContent>

      {/* Monthly Tab Content */}
      <TabsContent value="monthly">
        <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-8 pb-4 pt-2">
          {/* Render Combined Data */}
          <AmoliChart
            data={combinedAmoliChartData} // Combine Data
            innerRadius={70}
            outerRadius={115}
            startAngle={90}
            endAngle={450}
          />
          <TalimDonutChart
            data1={combinedTalimDonutChartData1} // Combine Data
            data2={combinedTalimDonutChartData2} // Combine Data
            innerRadius={60}
            outerRadius={100}
            startAngle={90}
            endAngle={450}
          />
          <Tally data={{ title: "মক্তব বিষয়", data: combinedMoktobData }} />
          <Tally data={{ title: "দা’য়ী বিষয়", data: combinedDayeBisoyData }} />
          <Tally
            data={{ title: "দাওয়াতি বিষয়", data: combinedDawatiBisoyData }}
          />
          <Tally
            data={{ title: "দাওয়াতি মজলিশ", data: combinedDawatiMoslishData }}
          />
          <Tally data={{ title: "জামাত বিষয়", data: combinedJamatBisoyData }} />
          <Tally
            data={{ title: "দ্বীনে ফিরে এসেছে", data: combinedDineFeraData }}
          />
          <Tally data={{ title: "সফর বিষয়", data: combinedSoforBisoyData }} />
        </div>
      </TabsContent>

      {/* Yearly Tab Content - Combine Faysal and Jewel Data */}
      <TabsContent value="yearly">
        <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-8 pb-4 pt-2">
          {/* Render Combined Data */}
          <AmoliChart
            data={combinedAmoliChartData} // Combine Data
            innerRadius={70}
            outerRadius={115}
            startAngle={90}
            endAngle={450}
          />
          <TalimDonutChart
            data1={combinedTalimDonutChartData1} // Combine Data
            data2={combinedTalimDonutChartData2} // Combine Data
            innerRadius={60}
            outerRadius={100}
            startAngle={90}
            endAngle={450}
          />
          <Tally data={{ title: "মক্তব বিষয়", data: combinedMoktobData }} />
          <Tally data={{ title: "দা’য়ী বিষয়", data: combinedDayeBisoyData }} />
          <Tally
            data={{ title: "দাওয়াতি বিষয়", data: combinedDawatiBisoyData }}
          />
          <Tally
            data={{ title: "দাওয়াতি মজলিশ", data: combinedDawatiMoslishData }}
          />
          <Tally data={{ title: "জামাত বিষয়", data: combinedJamatBisoyData }} />
          <Tally
            data={{ title: "দ্বীনে ফিরে এসেছে", data: combinedDineFeraData }}
          />
          <Tally data={{ title: "সফর বিষয়", data: combinedSoforBisoyData }} />
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default NewDashboard;
