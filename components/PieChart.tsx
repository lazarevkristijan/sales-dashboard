import { monthlySales } from "../constants"
import { Chart } from "react-chartjs-2"
import "chart.js/auto"

const PieChart = () => {
  const sales: number[] = []
  const months: string[] = []

  {
    monthlySales.map((month) => {
      sales.push(month.sales)
      months.push(month.month)
    })
  }

  const data = {
    labels: months.slice(0, months.length),
    datasets: [
      {
        label: "Delivered",
        data: sales.slice(0, sales.length),
      },
    ],
  }

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
      type="pie"
      options={options}
      data={data}
    />
  )
}

export default PieChart
