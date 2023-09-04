import { PanelButton } from "."
import { displayChartsOptions } from "../constants"

const ChartDisplayMenu = () => {
  return (
    <div className="absolute light-blue1 left-0 sm:left-[300px] top-[355px] sm:top-0 rou smText border-black border-[1px]">
      <div className="m-[10px] w-[200px]">
        {displayChartsOptions.map((option, index) => (
          <PanelButton
            key={index}
            title={option.title}
          >
            <img
              src={`${option.icon}.svg`}
              alt={`${option.title} icon`}
            />
          </PanelButton>
        ))}
      </div>
    </div>
  )
}

export default ChartDisplayMenu
