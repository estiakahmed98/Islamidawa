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
import ReportTable from "./ReportTableMonthly";
import ReportTableYearly from "./ReportTableYearly";

const Dashboard = () => {
  const currentDate = new Date().toISOString().split("T")[0];
  return (
    <>
      <Tabs defaultValue="daily" className="w-full p-4">
        <div className="flex justify-between">
          <TabsList>
            <TabsTrigger value="daily">দৈনিক</TabsTrigger>
            <TabsTrigger value="monthly">মাসিক</TabsTrigger>
            <TabsTrigger value="yearly">বাঁৎসরিক</TabsTrigger>
          </TabsList>
          <div>
            <form className="border px-4 py-1 rounded-lg">
              <input type="date" defaultValue={currentDate}></input>
            </form>
          </div>
        </div>
        <TabsContent value="daily">
          <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-8 pb-4 pt-2">
            <AmoliChart
              data={AmoliChartData}
              innerRadius={70}
              outerRadius={115}
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
            <Tally data={DawatiBisoyData} />
            <Tally data={DawatiMoslishData} />
            <Tally data={JamatBisoyData} />
            <Tally data={DineFeraData} />
            <Tally data={SoforBisoyData} />
            <Tally data={DayeBisoyData} />
          </div>
        </TabsContent>
        <TabsContent value="monthly">
          <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-8 pb-4 pt-2">
            <AmoliChart
              data={AmoliChartData}
              innerRadius={70}
              outerRadius={115}
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
            <Tally data={DawatiBisoyData} />
            <Tally data={DawatiMoslishData} />
            <Tally data={JamatBisoyData} />
            <Tally data={DineFeraData} />
            <Tally data={SoforBisoyData} />
            <Tally data={DayeBisoyData} />
          </div>
        </TabsContent>
        <TabsContent value="yearly">
          <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-8 pb-4 pt-2">
            <AmoliChart
              data={AmoliChartData}
              innerRadius={70}
              outerRadius={115}
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
            <Tally data={DawatiBisoyData} />
            <Tally data={DawatiMoslishData} />
            <Tally data={JamatBisoyData} />
            <Tally data={DineFeraData} />
            <Tally data={SoforBisoyData} />
            <Tally data={DayeBisoyData} />
          </div>
        </TabsContent>
      </Tabs>
    </>
  );
};

export default Dashboard;
