"use client"; // Ensure this is at the top for Next.js
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { useRef } from 'react';

// Register the necessary components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function StudentPerformance() {
  const chartRef = useRef(null);

  const performanceData = {
    month: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    marks: [90, 83, 79, 50, 40],
    totalMarks: 520,
  };

  const lineChartData = {
    labels: performanceData.month,
    datasets: [
      {
        label: "Performance Trends",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "#007bff",
        borderColor: "#007bff",
        data: performanceData.marks,
      },
    ],
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold mb-4">Performance</h1>
      <div className="w-full sm:w-3/4 lg:w-1/2 h-64 md:h-96">
        <Line
          ref={chartRef}
          data={lineChartData}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              y: {
                beginAtZero: true,
                ticks: {
                  color: '#4B5563', // Tailwind Gray-600
                },
              },
              x: {
                ticks: {
                  color: '#4B5563', // Tailwind Gray-600
                },
              },
            },
            plugins: {
              legend: {
                labels: {
                  color: '#4B5563', // Tailwind Gray-600
                },
              },
            },
          }}
        />
      </div>
      <p className="mt-4 text-lg">Total Marks: {performanceData.totalMarks}</p>
    </div>
  );
}
