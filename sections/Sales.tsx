import { useContext, useState } from "react"
import {
  SalesInfoBox,
  TotalInfo,
  BarChart,
  PieChart,
  LineGraph,
  SalesResultRect,
  PieChartDark,
  InActiveButton,
  BarChartDark,
  LineGraphDark,
} from "../components/"
import { salesResultStyles, sectionStyles } from "../constants"
import {
  DarkMode,
  DeliveredSales,
  ReturnedSales,
  InCart,
  TargetSales,
  ActiveChart,
} from "../components/Contexts"

const Sales = () => {
  const [infoPopUp, setInfoPopUp] = useState(false)

  const deliveredSales = useContext(DeliveredSales)
  const returnedSales = useContext(ReturnedSales)
  const inCart = useContext(InCart)
  const { targetSales } = useContext(TargetSales)
  const { isDarkMode } = useContext(DarkMode)
  const notDeliveredSales = Math.round(deliveredSales / 20)
  const { activeChart } = useContext(ActiveChart)

  function handleInfoHover(value: boolean) {
    setInfoPopUp(value)
  }

  return (
    <div
      className={`${sectionStyles} pt-[20px] pb-0 sm:py-[20px] ${
        isDarkMode ? "dark-blue3" : "light-blue1"
      }`}
    >
      <div
        className={`mb-[30px] ${activeChart !== "pie" && "sm:mx-[100px]"}  ${
          activeChart === "pie" && "w-[500px] mx-auto"
        } `}
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
        ) : activeChart === "line" ? (
          isDarkMode ? (
            <LineGraphDark />
          ) : (
            <LineGraph />
          )
        ) : null}
      </div>

      <div className="flex flex-wrap justify-center">
        <div className="w-full flex justify-center mb-[20px]">
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
      <div className="flex flex-wrap justify-center items-center">
        <div
          className={`${salesResultStyles} ${
            isDarkMode ? "bg-black text-white" : "bg-white text-black"
          } mb-[20px]`}
        >
          <SalesResultRect
            title="Gross profits"
            rectText={`€${(deliveredSales * 500).toLocaleString("en-US")}`}
            extraStyles="mb-[10px]"
          />

          <SalesResultRect
            title="Net profits"
            rectText={`€${Math.round((deliveredSales * 500) / 3).toLocaleString(
              "en-US"
            )}`}
          />
        </div>
        <div
          className={`${salesResultStyles} ${
            isDarkMode ? "bg-black text-white" : "bg-white text-black"
          } mb-[20px] relative`}
        >
          <SalesResultRect
            title="Target progress"
            rectText={`${Math.round((deliveredSales / targetSales) * 100)}%`}
            extraStyles="mb-[10px]"
          />
          <SalesResultRect
            title="Total calculated"
            rectText={`€${(
              (deliveredSales + notDeliveredSales - returnedSales) *
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
