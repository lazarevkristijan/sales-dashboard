import { useContext, useState } from "react"
import {
  SalesInfoBox,
  TotalInfo,
  BarChart,
  PieChart,
  LineGraph,
  SalesResultRect,
} from "../components/"
import {
  lineDotLocations,
  salesResultStyles,
  sectionStyles,
} from "../constants"
import {
  DarkMode,
  DeliveredSales,
  ReturnedSales,
  InCart,
  TargetSales,
} from "../components/Contexts"

const Sales = () => {
  const [infoPopUp, setInfoPopUp] = useState(false)
  const [chart, setChart] = useState("bar")

  const deliveredSales = useContext(DeliveredSales)
  const returnedSales = useContext(ReturnedSales)
  const inCart = useContext(InCart)
  const targetSales = useContext(TargetSales)
  const isDarkMode = useContext(DarkMode)
  const notDeliveredSales = String(Math.round(Number(deliveredSales) / 20))

  function handleInfoHover(value: boolean) {
    setInfoPopUp(value)
  }

  function handleChartChange() {
    if (chart === "bar") {
      setChart("pie")
    } else if (chart === "pie") {
      setChart("line")
    } else if (chart === "line") {
      setChart("bar")
    }
  }

  return (
    <div
      className={`${sectionStyles} pt-[20px] pb-0 sm:py-[20px] ${
        isDarkMode ? "dark-blue3" : "light-blue1"
      }`}
    >
      <div onClick={handleChartChange}>
        {chart === "bar" ? (
          <BarChart />
        ) : chart === "pie" ? (
          <PieChart />
        ) : (
          <LineGraph dataPoints={lineDotLocations} />
        )}
      </div>

      <div className="flex flex-wrap justify-center">
        <SalesInfoBox
          heading="Not delivered"
          qty={Number(notDeliveredSales)}
          bg={isDarkMode ? "dark-neutral" : "light-neutral"}
        />
        <SalesInfoBox
          heading="In Cart"
          qty={Number(inCart)}
          bg={isDarkMode ? "dark-neutral" : "light-neutral"}
        />
        <SalesInfoBox
          heading="Returned"
          qty={Number(returnedSales)}
          bg={isDarkMode ? "dark-danger" : "light-danger"}
        />
      </div>
      <div className="flex flex-wrap justify-center items-center">
        <div
          className={`${salesResultStyles} ${
            isDarkMode ? "bg-black text-white" : "bg-white text-black"
          } mb-[20px]`}
        >
          <SalesResultRect
            title="Gross profits"
            rectText={`$${(
              (Number(deliveredSales) + Number(notDeliveredSales)) *
              500
            ).toLocaleString("en-US")}`}
            extraStyles="mb-[10px]"
          />

          <SalesResultRect
            title="Net profits"
            rectText={`$${Math.round(
              ((Number(deliveredSales) + Number(notDeliveredSales)) * 500) / 3
            ).toLocaleString("en-US")}`}
          />
        </div>
        <div
          className={`${salesResultStyles} ${
            isDarkMode ? "bg-black text-white" : "bg-white text-black"
          } mb-[20px] relative`}
        >
          <SalesResultRect
            title="Target progress"
            rectText={`${Math.round(
              ((Number(deliveredSales) + Number(notDeliveredSales)) /
                Number(targetSales)) *
                100
            )}%`}
            extraStyles="mb-[10px]"
          />
          <SalesResultRect
            title="Total calculated"
            rectText={`$${(
              (Number(deliveredSales) +
                Number(notDeliveredSales) -
                Number(returnedSales)) *
              500
            ).toLocaleString("en-US")}`}
          />
          <img
            src={`${isDarkMode ? "dark" : "light"}-info.svg`}
            alt="info button"
            className={`w-[20px] absolute top-1 right-1 hover:cursor-pointer `}
            onMouseEnter={() => handleInfoHover(true)}
            onMouseLeave={() => handleInfoHover(false)}
          />
          {infoPopUp && <TotalInfo />}
        </div>
      </div>
    </div>
  )
}

export default Sales
