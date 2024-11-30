import AmoliChart from "@/components/AmoliChart";
import TalimDonutChart from "@/components/TalimBisoyChart";
import Tally from "@/components/Tally";
import {
  DayeBisoyData,
  moktobData,
  AmoliChartData,
  TalimDonutChartData1,
  TalimDonutChartData2,
  DawatiBisoyData,
  DawatiMoslishData,
  JamatBisoyData,
  DineFeraData,
  SoforBisoyData,
} from "@/app/data/data";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-3 gap-8 pb-4">
      <AmoliChart
        data={AmoliChartData}
        innerRadius={80}
        outerRadius={120}
        startAngle={90}
        endAngle={450}
      />
      <TalimDonutChart
        data1={TalimDonutChartData1}
        data2={TalimDonutChartData2}
        innerRadius={60}
        outerRadius={100}
        startAngle={90}
        endAngle={450}
      />
      <Tally data={moktobData} />
      <Tally data={DayeBisoyData} />
      <Tally data={DawatiBisoyData} />
      <Tally data={DawatiMoslishData} />
      <Tally data={JamatBisoyData} />
      <Tally data={DineFeraData} />
      <Tally data={SoforBisoyData} />
    </div>
  );
};

export default Dashboard;
