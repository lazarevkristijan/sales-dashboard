import "chart.js/auto"
import { Chart } from "react-chartjs-2"

const BarChartDark = () => {
  const data = {
    labels: ["Aug", "Jul", "Jun", "May", "Apr", "Mar"],
    datasets: [
      {
        label: "Delivered",
        data: [100, 120, 90, 80, 100, 95],
        backgroundColor: ["#00C0FF"],
      },
    ],
  }

  const options = {
    plugins: {
      legend: {
        labels: {
          color: "#fff",
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
          color: "#fff",
          font: {
            size: 18,
            weight: "500",
            family: "Montserrat",
          },
        },
      },
      y: {
        ticks: {
          color: "#fff",
          font: {
            size: 18,
            weight: "500",
            family: "Montserrat",
          },
        },
      },
    },
  }
  return (
    <Chart
      type="bar"
      options={options}
      data={data}
    />
  )
}

export default BarChartDark
