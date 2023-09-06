import { useState, useContext } from "react"
import { PanelButton } from "."
import { DarkMode } from "./ContDarkMode"

const CustomPeriodMenu = () => {
  const [fromDate, setFromDate] = useState("2023-09-05")
  const [toDate, setToDate] = useState("2024-09-05")

  const handleFromChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFromDate(e.target.value)
  }

  const handleToChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setToDate(e.target.value)
  }

  const isDarkMode = useContext(DarkMode)

  return (
    <div
      className={`absolute ${
        isDarkMode ? "dark-blue3" : "light-blue1"
      } left-0 sm:left-[220px] top-[430px] sm:top-0 rou smText border-black border-[1px]`}
    >
      <div className="m-[10px] w-[300px]">
        <PanelButton
          title="From Date"
          iconWidth="150"
          color={`${isDarkMode ? "dark-blue1" : "light-blue3"}`}
        >
          <input
            type="date"
            value={fromDate}
            onChange={handleFromChange}
            className={`${isDarkMode ? "dark-blue3" : "light-blue1"}`}
          />
        </PanelButton>

        <PanelButton
          title="To Date"
          iconWidth="150"
          color={`${isDarkMode ? "dark-blue1" : "light-blue3"}`}
        >
          <input
            type="date"
            value={toDate}
            onChange={handleToChange}
            className={`${isDarkMode ? "dark-blue3" : "light-blue1"}`}
          />
        </PanelButton>

        <div
          className={`${
            isDarkMode ? "dark-blue1" : "light-blue3"
          } p-[20px] flex justify-center items-center rou mb-[10px] hover:cursor-pointer`}
        >
          <p className="">Set Custom Period</p>
        </div>
      </div>
    </div>
  )
}

export default CustomPeriodMenu
