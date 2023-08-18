import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["2023", "2022"],
  datasets: [
    {
      label: "Jun",
      data: [12, 2],
      backgroundColor: ["rgba(53, 162, 235, 0.5)", "rgba(255, 99, 132, 0.5)"],
      borderColor: ["rgba(255, 255, 255, 0.2)"],
      borderWidth: 1,
    },
    
  ],
};


const options = {
  cutout: "75%",
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
    },
  },
  maintainAspectRatio: false,
  
};



const DoughnutChart = () => {
  return (
    <div className="mx-auto w-[200px] h-[200px]" >
      <Doughnut data={data} options={options} />;
    </div>
  );
};

export default DoughnutChart;
