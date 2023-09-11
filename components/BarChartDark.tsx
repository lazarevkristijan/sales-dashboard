import "chart.js/auto"
import { Chart } from "react-chartjs-2"
import { monthlySales } from "../constants"

const BarChartDark = () => {
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
        backgroundColor: ["#00C0FF"],
        hoverBackgroundColor: ["#03045E"],
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
          color: "#fff",
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
          color: "rgba(255,255,255,0.5)",
        },
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
        grid: {
          color: "rgba(255,255,255,0.5)",
        },
        suggestedMin: 0,
        suggestedMax: dynamicMax,
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
