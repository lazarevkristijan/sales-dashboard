import { useState } from "react"
import { CustomPeriodMenu, PanelButton } from "."
import { displayPeriodsOptions } from "../constants"

const DisplayPeriodsMenu = () => {
  const [isCustomMenu, setIsCustomMenu] = useState(false)

  const handleCustomMenu = () => {
    setIsCustomMenu(true)
  }

  return (
    <div className="absolute light-blue1 left-0 sm:left-[300px] top-[355px] sm:top-0 rou smText border-black border-[1px]">
      {displayPeriodsOptions.map((option, index) => (
        <div
          key={index}
          className="m-[10px] w-[200px] bg-[#fff] rou"
        >
          <PanelButton
            title={`${option.title}`}
            onClick={handleCustomMenu}
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
