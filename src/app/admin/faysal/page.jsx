import AmoliChart from "@/components/AmoliChart";
import TalimDonutChart from "@/components/TalimBisoyChart";
import Tally from "@/components/Tally";
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
              data={AmoliChartData_faysal}
              innerRadius={70}
              outerRadius={115}
              startAngle={90}
              endAngle={450}
            />
            <TalimDonutChart
              data1={TalimDonutChartData1_faysal}
              data2={TalimDonutChartData2_faysal}
              innerRadius={50}
              outerRadius={90}
              startAngle={90}
              endAngle={450}
            />
            <Tally data={moktobData_faysal} />
            <Tally data={DawatiBisoyData_faysal} />
            <Tally data={DawatiMoslishData_faysal} />
            <Tally data={JamatBisoyData_faysal} />
            <Tally data={DineFeraData_faysal} />
            <Tally data={SoforBisoyData_faysal} />
            <Tally data={DayeBisoyData_faysal} />
          </div>
        </TabsContent>
        <TabsContent value="monthly">
          <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-8 pb-4 pt-2">
            <AmoliChart
              data={AmoliChartData_faysal}
              innerRadius={70}
              outerRadius={115}
              startAngle={90}
              endAngle={450}
            />
            <TalimDonutChart
              data1={TalimDonutChartData1_faysal}
              data2={TalimDonutChartData2_faysal}
              innerRadius={60}
              outerRadius={100}
              startAngle={90}
              endAngle={450}
            />
            <Tally data={moktobData_faysal} />
            <Tally data={DawatiBisoyData_faysal} />
            <Tally data={DawatiMoslishData_faysal} />
            <Tally data={JamatBisoyData_faysal} />
            <Tally data={DineFeraData_faysal} />
            <Tally data={SoforBisoyData_faysal} />
            <Tally data={DayeBisoyData_faysal} />
          </div>
        </TabsContent>
        <TabsContent value="yearly">
          <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-8 pb-4 pt-2">
            <AmoliChart
              data={AmoliChartData_faysal}
              innerRadius={70}
              outerRadius={115}
              startAngle={90}
              endAngle={450}
            />
            <TalimDonutChart
              data1={TalimDonutChartData1_faysal}
              data2={TalimDonutChartData2_faysal}
              innerRadius={60}
              outerRadius={100}
              startAngle={90}
              endAngle={450}
            />
            <Tally data={moktobData_faysal} />
            <Tally data={DawatiBisoyData_faysal} />
            <Tally data={DawatiMoslishData_faysal} />
            <Tally data={JamatBisoyData_faysal} />
            <Tally data={DineFeraData_faysal} />
            <Tally data={SoforBisoyData_faysal} />
            <Tally data={DayeBisoyData_faysal} />
          </div>
        </TabsContent>
      </Tabs>
    </>
  );
};

export default Dashboard;
