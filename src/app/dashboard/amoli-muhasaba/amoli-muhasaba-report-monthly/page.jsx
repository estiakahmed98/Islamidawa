"use client";
import { useRouter } from "next/navigation";
import ButtonsGroup from "@/components/ButtonsGroup";
import ReportTableMonthly from "@/components/ReportTableMonthly";

const AmoliMuhasabaReport = () => {
  const router = useRouter();
  return (
    <>
      <div className="flex gap-4">
        <ButtonsGroup />
        <button
          onClick={() =>
            router.push(
              "/dashboard/amoli-muhasaba/amoli-muhasaba-report-yearly"
            )
          }
          className="px-4 py-2 text-teal-700 font-medium border border-teal-700  rounded-md"
        >
          Yearly Report
        </button>
      </div>
      <ReportTableMonthly />
    </>
  );
};

export default AmoliMuhasabaReport;
