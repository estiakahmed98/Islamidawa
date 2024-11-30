"use client";
import { useRouter } from "next/navigation";
import ButtonsGroup from "@/components/ButtonsGroup";
import ReportTableYearly from "@/components/ReportTableYearly";

const AmoliMuhasabaReport = () => {
  const router = useRouter();
  return (
    <>
      <div className="flex gap-4">
        <ButtonsGroup />
        <button
          onClick={() =>
            router.push(
              "/dashboard/amoli-muhasaba/amoli-muhasaba-report-monthly"
            )
          }
          className="px-4 py-2 text-teal-700 font-medium border border-teal-700  rounded-md"
        >
          Monthly Report
        </button>
      </div>
      <ReportTableYearly />
    </>
  );
};

export default AmoliMuhasabaReport;
