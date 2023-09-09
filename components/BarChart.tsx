import "chart.js/auto"
import { Chart } from "react-chartjs-2"
import { monthlySales } from "../constants"

const BarChart = () => {
  const sales: number[] = []
  const months: string[] = []
  {
    monthlySales.map((month) => {
      sales.push(month.sales)
      months.push(month.month)
    })
  }
  const data = {
    labels: [months[0], months[1], months[2], months[3], months[4], months[5]],
    datasets: [
      {
        label: "Delivered",
        data: [sales[0], sales[1], sales[2], sales[3], sales[4], sales[5]],
        backgroundColor: ["#48CAE4"],
        hoverBackgroundColor: ["#0077B6"],
      },
    ],
  }

  const maxDataValue = Math.max(...data.datasets[0].data)
  const buffer = 10
  const dynamicMax = maxDataValue + buffer

  const options = {
    plugins: {
      legend: {
        labels: {
          color: "#000",
          font: {
            size: 20,
            weight: "500",
            family: "Montserrat",
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          color: "rgba(0,0,0,0.2)",
        },
        ticks: {
          color: "#000",
          font: {
            size: 18,
            weight: "500",
            family: "Montserrat",
          },
        },
      },
      y: {
        grid: {
          color: "rgba(0,0,0,0.2)",
        },
        suggestedMin: 0,
        suggestedMax: dynamicMax,
        ticks: {
          color: "#000",
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

export default BarChart
