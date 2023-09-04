import { PanelButton } from "."
import { displayPeriodsOptions } from "../constants"

const DisplayPeriodsMenu = () => {
  return (
    <div className="absolute light-blue1 left-0 sm:left-[300px] top-[355px] sm:top-0 rou smText border-black border-[1px]">
      {displayPeriodsOptions.map((option, index) => (
        <div
          key={index}
          className="m-[10px] w-[200px] bg-[#fff] rou"
        >
          <PanelButton title={`${option.title}`}>
            <span className="mx-auto">{`${option.label}`}</span>
          </PanelButton>
        </div>
      ))}
    </div>
  )
}

export default DisplayPeriodsMenu
