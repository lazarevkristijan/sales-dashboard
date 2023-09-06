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
  salesInfoBoxes,
  lineDotLocations,
  salesResultStyles,
  sectionStyles,
} from "../constants"
import { DarkMode } from "../components/ContDarkMode"

const Sales = () => {
  const [infoPopUp, setInfoPopUp] = useState(false)
  const [chart, setChart] = useState("bar")

  const isDarkMode = useContext(DarkMode)

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
        {salesInfoBoxes.map((box, index) => (
          <SalesInfoBox
            heading={box.heading}
            qty={box.qty}
            bg={isDarkMode ? box.bgDark : box.bgLight}
            key={index}
          />
        ))}
      </div>
      <div className="flex flex-wrap justify-center items-center">
        <div
          className={`${salesResultStyles} ${
            isDarkMode ? "bg-black text-white" : "bg-white text-black"
          } mb-[20px]`}
        >
          <SalesResultRect
            title="Gross profits"
            rectText="$74,000"
            extraStyles="mb-[10px]"
          />
          <SalesResultRect
            title="Net profits"
            rectText="$21,000"
          />
        </div>
        <div
          className={`${salesResultStyles} ${
            isDarkMode ? "bg-black text-white" : "bg-white text-black"
          } mb-[20px] relative`}
        >
          <SalesResultRect
            title="Target progress"
            rectText="73%"
            extraStyles="mb-[10px]"
          />
          <SalesResultRect
            title="Total calculated"
            rectText="$73,500"
          />
          <img
            src="light-info.svg"
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
