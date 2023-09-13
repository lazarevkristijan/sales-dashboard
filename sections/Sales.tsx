import { useContext, useState } from "react"
import { DarkModeContext, ActiveChartContext, SalesContext } from "../src/App"
import {
  SalesInfoBox,
  TotalInfo,
  BarChart,
  PieChart,
  LineChart,
  SalesRevenueRect,
  PieChartDark,
  InActiveButton,
  BarChartDark,
  LineChartDark,
} from "../components/"
import { salesRevenueStyles, sectionStyles } from "../constants"

const Sales = () => {
  // Contexts
  const { targetSales } = useContext(SalesContext)
  const { isDarkMode } = useContext(DarkModeContext)
  const { activeChart } = useContext(ActiveChartContext)

  // States
  const [isToolTipOn, setIsToolTipOn] = useState(false)

  // Functions
  const handleInfoHover = () => {
    setIsToolTipOn((prev) => !prev)
  }

  // Constants
  const deliveredSales = 97
  const returnedSales = 2
  const inCart = 79
  const notDeliveredSales = Math.round(deliveredSales / 20)

  return (
    <div
      className={`${sectionStyles} ${
        isDarkMode ? "dark-blue3" : "light-blue1"
      } pt-[20px] pb-0 sm:py-[20px]`}
    >
      <div
        className={`${
          activeChart !== "pie" ? "sm:mx-[100px]" : "max-w-[500px] mx-auto"
        } mb-[30px]`}
      >
        {activeChart === "pie" ? (
          isDarkMode ? (
            <PieChartDark />
          ) : (
            <PieChart />
          )
        ) : activeChart === "bar" ? (
          isDarkMode ? (
            <BarChartDark />
          ) : (
            <BarChart />
          )
        ) : (
          activeChart === "line" &&
          (isDarkMode ? <LineChartDark /> : <LineChart />)
        )}
      </div>

      {/* Additional sales info - Not Delivered / In Cart / Returned */}
      <div className="flex flex-wrap justify-center">
        <div className="w-full mb-[20px] flex justify-center">
          <InActiveButton
            text="Current month"
            color={isDarkMode ? "dark-blue4" : "light-blue3"}
            extraStyles="w-[200px]"
          />
        </div>
        <SalesInfoBox
          heading="Not delivered"
          qty={notDeliveredSales}
          bg={isDarkMode ? "dark-neutral" : "light-neutral"}
        />
        <SalesInfoBox
          heading="In Cart"
          qty={inCart}
          bg={isDarkMode ? "dark-neutral" : "light-neutral"}
        />
        <SalesInfoBox
          heading="Returned"
          qty={returnedSales}
          bg={isDarkMode ? "dark-danger" : "light-danger"}
        />
      </div>
      {/* Total revenue calculations */}
      <div className="flex flex-wrap justify-center items-center">
        <div
          className={`${salesRevenueStyles} ${
            isDarkMode ? "bg-black dark-text" : "bg-white light-text"
          } mb-[20px]`}
        >
          <SalesRevenueRect
            title="Gross profits"
            rectText={`€${(
              (deliveredSales + notDeliveredSales) *
              500
            ).toLocaleString("en-US")}`}
            extraStyles="mb-[10px]"
          />

          <SalesRevenueRect
            title="Net profits"
            rectText={`€${Math.round(
              ((deliveredSales + notDeliveredSales) * 500) / 3
            ).toLocaleString("en-US")}`}
          />
        </div>
        <div
          className={`${salesRevenueStyles} ${
            isDarkMode ? "bg-black dark-text" : "bg-white light-text"
          } mb-[20px] relative`}
        >
          <SalesRevenueRect
            title="Target progress"
            rectText={`${Math.round(
              ((deliveredSales + notDeliveredSales) / targetSales) * 100
            )}%`}
            extraStyles="mb-[10px]"
          />
          <SalesRevenueRect
            title="Total calculated"
            rectText={`€${(
              (deliveredSales + notDeliveredSales - returnedSales) *
              500
            ).toLocaleString("en-US")}`}
          />
          <img
            src={`${isDarkMode ? "dark" : "light"}-info.svg`}
            alt="info button"
            className={`w-[20px] absolute top-1 right-1 hover:cursor-pointer hover:scale-105 transition-all `}
            onMouseEnter={handleInfoHover}
            onMouseLeave={handleInfoHover}
          />
          {isToolTipOn && <TotalInfo />}
        </div>
      </div>
    </div>
  )
}

export default Sales
