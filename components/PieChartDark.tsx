import "chart.js/auto"
import { Chart } from "react-chartjs-2"
import { monthlySales } from "../constants"
const PieChartDark = () => {
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
      },
    ],
  }

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
      type="pie"
      options={options}
      data={data}
    />
  )
}

export default PieChartDark
