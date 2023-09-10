import { useState, useContext } from "react"
import { CustomPeriodMenu, PanelButton } from "."
import { displayPeriodsOptions } from "../constants"
import { DarkMode } from "./Contexts"

const DisplayPeriodsMenu = () => {
  const [isCustomMenuOpen, setIsCustomMenuOpen] = useState(false)

  const toggleCustomMenu = () => {
    setIsCustomMenuOpen((prev) => !prev)
  }

  const { isDarkMode } = useContext(DarkMode)
  return (
    <div
      className={`absolute ${
        isDarkMode ? "dark-blue1" : "light-blue4"
      } left-0 sm:left-[300px] top-[355px] sm:top-0 rou smText border-black border-[1px]`}
    >
      {displayPeriodsOptions.slice(0, 5).map((option, index) => (
        <div
          key={index}
          className="m-[10px] w-[200px] bg-[#fff] rou"
        >
          <PanelButton
            title={`${option.title}`}
            color={`${isDarkMode ? "dark-blue4" : "light-blue2"}`}
          >
            <span className="mx-auto">{`${option.label}`}</span>
          </PanelButton>
        </div>
      ))}

      {displayPeriodsOptions.slice(5).map((option, index) => (
        <div
          key={index}
          className="m-[10px] w-[200px] bg-[#fff] rou"
        >
          <PanelButton
            title={`${option.title}`}
            onClick={toggleCustomMenu}
            color={`${isDarkMode ? "dark-blue4" : "light-blue3"}`}
          >
            <span className="mx-auto">{`${option.label}`}</span>
          </PanelButton>
        </div>
      ))}
      {isCustomMenuOpen && <CustomPeriodMenu />}
    </div>
  )
}

export default DisplayPeriodsMenu
