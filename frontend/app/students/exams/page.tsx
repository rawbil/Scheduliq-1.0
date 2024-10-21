"use client"
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'; // Import necessary components
import { useRef } from 'react';

// Register the components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function StudentExams() {
  const chartRef = useRef(null);

  const examData = {
    subjects: ["Math", "English", "Kiswahili", "Geography"],
    results: [90, 85, 88, 80], // Use numerical values for chart data
  };

  const barChartData = {
    labels: examData.subjects,
    datasets: [
      {
        label: "Exam Results", // Changed 'labels' to 'label'
        backgroundColor: "#007bff",
        borderColor: "#007bff",
        borderWidth: 1, // Correct borderWidth to a number
        hoverBackgroundColor: "#0056b3",
        data: examData.results, // Data should be numerical
      },
    ],
  };

  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true, // Corrected the scales structure
        max: 100,
      },
    },
  };

  return (
    <div className="max-768px:mt-10">
      {examData.subjects.map((subject, index) => (
        <div key={index}>
          <p>{subject}</p>
          <p>Score: {examData.results[index]}</p>
        </div>
      ))}

<div className="w-full lg:w-2/3 xl:w-1/2 h-64 sm:h-72 md:h-80 lg:h-96 relative">
        <Bar ref={chartRef} data={barChartData} options={chartOptions} />
      </div>
    </div>
  );
}
