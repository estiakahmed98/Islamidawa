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
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/TabButton";

const Dashboard = () => {
  return (
    <>
      <Tabs defaultValue="daily" className="w-full p-4">
        <TabsList>
          <TabsTrigger value="daily">দৈনিক</TabsTrigger>
          <TabsTrigger value="monthly">মাসিক</TabsTrigger>
          <TabsTrigger value="yearly">বাঁৎসরিক</TabsTrigger>
        </TabsList>
        <TabsContent value="daily">
          <div className="grid grid-cols-3 gap-8 pb-4 pt-2">
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
        </TabsContent>
        <TabsContent value="monthly">
          <div className="grid grid-cols-3 gap-8 pb-4 pt-2">
            <AmoliChart
              data={AmoliChartData}
              innerRadius={90}
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
        </TabsContent>
        <TabsContent value="yearly">
          <div className="grid grid-cols-3 gap-8 pb-4 pt-2">
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
        </TabsContent>
      </Tabs>
    </>
  );
};

export default Dashboard;
