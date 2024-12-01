"use client";

import fileDownload from "js-file-download";
import jsPDF from "jspdf";
import React from "react";
import "jspdf-autotable";

const convertToCSV = (data) => {
  const header = Object.keys(data[0]).join(",") + "\n";
  const rows = data.map((row) => Object.values(row).join(",")).join("\n");
  return header + rows;
};

const convertToPDF = (data) => {
  const doc = new jsPDF();
  doc.text("Table Data", 14, 10);

  const headers = [Object.keys(data[0])];
  const rows = data.map((row) => Object.values(row));

  doc.autoTable({
    head: headers,
    body: rows,
    startY: 20,
    theme: "striped",
    headStyles: { fillColor: [22, 160, 133] },
  });

  return doc;
};

const ReportTableYearly = () => {
  const handleDownloadCSV = () => {
    const csv = convertToCSV(rows);
    fileDownload(csv, "table-data.csv");
  };

  const handleDownloadPDF = () => {
    const pdf = convertToPDF(rows);
    pdf.save("table-data.pdf");
  };

  //   const months = Array.from({ length: 12 }, (months, i) => ` ${i + 1}`);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const rows = [
    {
      id: 1,
      name: "তাহাজ্জুদ",
      data: Array(12).fill(0),
    },
    { id: 2, name: "সকাল-সন্ধ্যা দোয়া ও জিকির", data: Array(12).fill(0) },
    { id: 3, name: "জামাতে সালাত", data: Array(12).fill(0) },
    {
      id: 4,
      name: "দু’আ আনাস ইবনে মালেক",
      data: Array(12).fill(0),
    },
    { id: 5, name: "তিন তাসবীহ (সকাল- সন্ধ্যা)", data: Array(12).fill(0) },
    { id: 6, name: "দৈনিক হিজবুল বাহার পাঠ", data: Array(12).fill(0) },
    { id: 7, name: "তিলাওয়াতুল কোরয়আন তাদাব্বুর", data: Array(12).fill(0) },
    { id: 8, name: "ইশরাক-আওয়াবীন-চাশ্ত", data: Array(12).fill(0) },
    { id: 9, name: "সিরাত ও মাগফিরাত কিতাব পাঠ", data: Array(12).fill(0) },
    { id: 10, name: "ইলমী ও আমলী কিতাব পাঠ", data: Array(12).fill(0) },
    { id: 11, name: "দা’য়ীদের আমলী কিতাব পাঠ", data: Array(12).fill(0) },
    {
      id: 12,
      name: "আজ সোমবার আইয়্যামে বীজের রোজা রেখেছেন তো?",
      data: Array(12).fill(0),
    },
  ];

  return (
    <div className="overflow-x-auto p-2 grow">
      <table className="table-auto border-collapse border border-gray-300 w-full text-xl">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-2">আ’মলি মুহাসাবা</th>
            {months.map((month, index) => (
              <th
                key={index}
                className="border border-gray-300 p-2 text-center"
              >
                {month}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              <td className="border border-gray-300 p-2 font-medium">
                {row.name}
              </td>
              {row.data.map((value, index) => (
                <td
                  key={index}
                  className="border border-gray-300 p-2 text-center"
                >
                  {value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-end gap-4 pt-4">
        <button
          className="p-2 text-white border-2 bg-teal-700 rounded-md"
          onClick={handleDownloadCSV}
        >
          Download CSV
        </button>
        <button
          className="p-2 text-white border-2 bg-teal-700 rounded-md"
          onClick={handleDownloadPDF}
        >
          Download PDF
        </button>
      </div>
    </div>
  );
};

export default ReportTableYearly;
