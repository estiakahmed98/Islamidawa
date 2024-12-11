import AmoliChart from "@/components/AmoliChart";
import TalimDonutChart from "@/components/TalimBisoyChart";
import Tally from "@/components/Tally";
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
              data={AmoliChartData_jewel}
              innerRadius={70}
              outerRadius={115}
              startAngle={90}
              endAngle={450}
            />
            <TalimDonutChart
              data1={TalimDonutChartData1_jewel}
              data2={TalimDonutChartData2_jewel}
              innerRadius={50}
              outerRadius={90}
              startAngle={90}
              endAngle={450}
            />
            <Tally data={moktobData_jewel} />
            <Tally data={DawatiBisoyData_jewel} />
            <Tally data={DawatiMoslishData_jewel} />
            <Tally data={JamatBisoyData_jewel} />
            <Tally data={DineFeraData_jewel} />
            <Tally data={SoforBisoyData_jewel} />
            <Tally data={DayeBisoyData_jewel} />
          </div>
        </TabsContent>
        <TabsContent value="monthly">
          <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-8 pb-4 pt-2">
            <AmoliChart
              data={AmoliChartData_jewel}
              innerRadius={70}
              outerRadius={115}
              startAngle={90}
              endAngle={450}
            />
            <TalimDonutChart
              data1={TalimDonutChartData1_jewel}
              data2={TalimDonutChartData2_jewel}
              innerRadius={60}
              outerRadius={100}
              startAngle={90}
              endAngle={450}
            />
            <Tally data={moktobData_jewel} />
            <Tally data={DawatiBisoyData_jewel} />
            <Tally data={DawatiMoslishData_jewel} />
            <Tally data={JamatBisoyData_jewel} />
            <Tally data={DineFeraData_jewel} />
            <Tally data={SoforBisoyData_jewel} />
            <Tally data={DayeBisoyData_jewel} />
          </div>
        </TabsContent>
        <TabsContent value="yearly">
          <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-8 pb-4 pt-2">
            <AmoliChart
              data={AmoliChartData_jewel}
              innerRadius={70}
              outerRadius={115}
              startAngle={90}
              endAngle={450}
            />
            <TalimDonutChart
              data1={TalimDonutChartData1_jewel}
              data2={TalimDonutChartData2_jewel}
              innerRadius={60}
              outerRadius={100}
              startAngle={90}
              endAngle={450}
            />
            <Tally data={moktobData_jewel} />
            <Tally data={DawatiBisoyData_jewel} />
            <Tally data={DawatiMoslishData_jewel} />
            <Tally data={JamatBisoyData_jewel} />
            <Tally data={DineFeraData_jewel} />
            <Tally data={SoforBisoyData_jewel} />
            <Tally data={DayeBisoyData_jewel} />
          </div>
        </TabsContent>
      </Tabs>
    </>
  );
};

export default Dashboard;
