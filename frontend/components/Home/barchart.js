"use client"
import fetchAnalysis from "@/utils/fetchAnalysis";
import { chartjs } from "chart.js/auto";
import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";

export default function Barchart() {
  const [data , setData] = useState();
  useEffect(() => {
    async function fetchRespData(){
      const res = await fetchAnalysis();
      setData(res);
    }
    fetchRespData();
  },[])

  return (
    <div className="flex flex-col gap-10 justify-center w-[500px] h-auto m-auto">
      <Bar
        data={{
          labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "June",
            "July",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          datasets: [
            {
              label: "Units",
              data: data,
              backgroundColor: "#1677FF",

              borderRadius: 2,
              borderWidth: 1,
            },
          ],
        }}
      />
      <p className="text-center">Renie's Bin monthly transaction</p>
    </div>
  );
}
