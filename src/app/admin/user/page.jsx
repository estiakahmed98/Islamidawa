"use client";

import React, { useState } from "react";
import AmoliChart from "@/components/AmoliChart";
import TalimDonutChart from "@/components/TalimBisoyChart";
import Tally from "@/components/Tally";
import OnItemClick from "@/components/MuiTreeView";

// Import data for Faysal and Jewel
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
  allData,
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
import { useSelectedUser } from "@/providers/treeProvider";

const Dashboard = () => {
  const { selectedUser } = useSelectedUser();

  if (!selectedUser) return null;

  // Determine dashboard data based on selected user
  const dashboardData = allData[selectedUser];
  // selectedUser === "faysal"
  //   ? {
  //       AmoliChartData: AmoliChartData_faysal,
  //       TalimDonutChartData1: TalimDonutChartData1_faysal,
  //       TalimDonutChartData2: TalimDonutChartData2_faysal,
  //       TallyData: [
  //         moktobData_faysal,
  //         DayeBisoyData_faysal,
  //         DawatiBisoyData_faysal,
  //         DawatiMoslishData_faysal,
  //         JamatBisoyData_faysal,
  //         DineFeraData_faysal,
  //         SoforBisoyData_faysal,
  //       ],
  //     }
  //   : {
  //       AmoliChartData: AmoliChartData_jewel,
  //       TalimDonutChartData1: TalimDonutChartData1_jewel,
  //       TalimDonutChartData2: TalimDonutChartData2_jewel,
  //       TallyData: [
  //         moktobData_jewel,
  //         DayeBisoyData_jewel,
  //         DawatiBisoyData_jewel,
  //         DawatiMoslishData_jewel,
  //         JamatBisoyData_jewel,
  //         DineFeraData_jewel,
  //         SoforBisoyData_jewel,
  //       ],
  //     };

  return (
    <div className="flex">
      {/* Sidebar with Tree View */}

      {/* Dashboard Main Content */}
      <div className="grow grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-8 pb-4 pt-2">
        <AmoliChart
          data={dashboardData.AmoliChartData}
          innerRadius={70}
          outerRadius={115}
          startAngle={90}
          endAngle={450}
        />

        <TalimDonutChart
          data1={dashboardData.TalimDonutChartData1}
          data2={dashboardData.TalimDonutChartData2}
          innerRadius={50}
          outerRadius={90}
          startAngle={90}
          endAngle={450}
        />

        {dashboardData.TallyData.map((data, index) => (
          <Tally key={index} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
