import { useState, useContext } from "react"
import { DarkMode } from "./Contexts"
import { CustomPeriodMenu, PanelButton } from "."
import { displayPeriodsOptions } from "../constants"

const DisplayPeriodsMenu = () => {
  // Contexts
  const { isDarkMode } = useContext(DarkMode)

  // States
  const [isCustomMenuOpen, setIsCustomMenuOpen] = useState(false)

  // Functions
  const toggleCustomMenu = () => {
    setIsCustomMenuOpen((prev) => !prev)
  }

  return (
    <div
      className={`${
        isDarkMode ? "dark-blue1" : "light-blue4"
      } smText absolute left-0 sm:left-[300px] top-[355px] sm:top-0 rou border-black border-[1px]`}
    >
      {displayPeriodsOptions.map((option, index) => (
        <div
          key={index}
          className="w-[200px] m-[10px] bg-[#fff] rou"
        >
          <PanelButton
            title={`${option.title}`}
            color={`${isDarkMode ? "dark-blue4" : "light-blue2"}`}
            onClick={
              index === displayPeriodsOptions.length - 1
                ? toggleCustomMenu
                : undefined
            }
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
