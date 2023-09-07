import "chart.js/auto"
import { Chart } from "react-chartjs-2"

const LineGraphDark = () => {
  const data = {
    labels: ["Aug", "Jul", "Jun", "May", "Apr", "Mar"],
    datasets: [
      {
        label: "Delivered",
        data: [100, 100, 90, 80, 100, 95],
        backgroundColor: ["rgba(150,242,255,0.5)"],
        pointBackgroundColor: "darkblue",
        pointRadius: 5,
        fill: true,
        tension: 0.3,
      },
    ],
  }

  const maxDataValue = Math.max(...data.datasets[0].data)
  const buffer = 20
  const dynamicMax = maxDataValue + buffer

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
        suggestedMin: 0,
        suggestedMax: dynamicMax,
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
      type="line"
      options={options}
      data={data}
    />
  )
}

export default LineGraphDark
