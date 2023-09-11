import { useState, useContext } from "react"
import { PanelButton } from "."
import { DarkMode } from "./Contexts"

const CustomPeriodMenu = () => {
  // Contexts
  const { isDarkMode } = useContext(DarkMode)

  // States
  const [fromDate, setFromDate] = useState("2023-09-05")
  const [toDate, setToDate] = useState("2024-09-05")
  const [isHovered, setIsHovered] = useState(false)

  // Functions
  const handleHover = () => {
    setIsHovered((prev) => !prev)
  }
  const handleFromChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFromDate(e.target.value)
  }

  const handleToChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setToDate(e.target.value)
  }

  return (
    <div
      className={`${
        isDarkMode ? "dark-blue1" : "light-blue4"
      } smText absolute left-0 sm:left-[220px] top-[430px] sm:top-0 rou border-black border-[1px] selection:bg-transparent`}
    >
      <div className="w-[300px] m-[10px]">
        <PanelButton
          title="From Date"
          iconWidth="150"
          color={`${isDarkMode ? "dark-blue4" : "light-blue2"}`}
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
          color={`${isDarkMode ? "dark-blue4" : "light-blue2"}`}
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
            isDarkMode
              ? isHovered
                ? "dark-blue4"
                : "dark-blue3"
              : isHovered
              ? "light-blue3"
              : "light-blue2"
          }
          mb-[10px] p-[20px] flex justify-center items-center rou hover:cursor-pointer`}
          onMouseEnter={handleHover}
          onMouseLeave={handleHover}
        >
          <p>Set Custom Period</p>
        </div>
      </div>
    </div>
  )
}

export default CustomPeriodMenu
