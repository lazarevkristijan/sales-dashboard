import "chart.js/auto"
import { Chart } from "react-chartjs-2"
const PieChart = () => {
  const data = {
    labels: ["Aug", "Jul", "Jun", "May", "Apr", "Mar"],
    datasets: [
      {
        label: "Delivered",
        data: [100, 120, 90, 80, 100, 95],
      },
    ],
  }

  const options = {
    plugins: {
      legend: {
        labels: {
          color: "#000",
          font: {
            size: 15,
            weight: "500",
            family: "Montserrat",
          },
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#000",
          font: {
            size: 15,
            weight: "500",
            family: "Montserrat",
          },
        },
      },
      y: {
        ticks: {
          color: "#000",
          font: {
            size: 15,
            weight: "500",
            family: "Montserrat",
          },
        },
      },
    },
  }
  return (
    <Chart
      type="pie"
      options={options}
      data={data}
    />
  )
}

export default PieChart
