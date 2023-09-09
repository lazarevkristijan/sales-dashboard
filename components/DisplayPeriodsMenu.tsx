import { useState, useContext } from "react"
import { CustomPeriodMenu, PanelButton } from "."
import { displayPeriodsOptions } from "../constants"
import { DarkMode } from "./Contexts"

const DisplayPeriodsMenu = () => {
  const [isCustomMenu, setIsCustomMenu] = useState(false)

  const handleCustomMenu = () => {
    setIsCustomMenu((prev) => !prev)
  }

  const { isDarkMode } = useContext(DarkMode)
  return (
    <div
      className={`absolute ${
        isDarkMode ? "dark-blue3" : "light-blue1"
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
            onClick={handleCustomMenu}
            color={`${isDarkMode ? "dark-blue4" : "light-blue3"}`}
          >
            <span className="mx-auto">{`${option.label}`}</span>
          </PanelButton>
        </div>
      ))}
      {isCustomMenu && <CustomPeriodMenu />}
    </div>
  )
}

export default DisplayPeriodsMenu
