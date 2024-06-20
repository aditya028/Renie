"use client"
import { chartjs } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

export default function Piechart({data}) {
    return <div className="flex flex-col gap-5 justify-center w-[300px] h-auto m-auto">
    <Doughnut
      data={{
        labels: ["Plastic", "Can", "Paper", "Bottle"],
        datasets: [
          {
            label: "Units",
            data: [data?.plastic_count, data?.can_count, data?.paper_count, data?.bottle_count],
            backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#FF6360"],
            hoverBackgroundColor: [
              "#FF6384",
              "#36A2EB",
              "#FFCE56",
              "#FF6360",
            ],
            borderRadius: 8,
            borderWidth: 2,
          },
        ],
      }}
    />
      <p className="text-center">Renie's Bin total transaction</p>

  </div>
}