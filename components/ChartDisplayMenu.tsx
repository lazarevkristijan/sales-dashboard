import { useContext } from "react"
import { DarkMode, ActiveChart } from "./Contexts"
import { PanelButton } from "."
import { chartSetterComponents } from "../constants"

const ChartDisplayMenu = () => {
  // Contexts
  const { isDarkMode } = useContext(DarkMode)
  const { setChart } = useContext(ActiveChart)

  return (
    <div
      className={`${
        isDarkMode ? "dark-blue1" : "light-blue4"
      } smText absolute left-0 sm:left-[300px] top-[355px] sm:top-0 rou border-black border-[1px]`}
    >
      <div className="w-[200px] m-[10px]">
        {chartSetterComponents.map((chart, index) => (
          <PanelButton
            key={index}
            title={chart.title}
            color={isDarkMode ? "dark-blue4" : "light-blue2"}
            onClick={() => setChart({ value: `${chart.chartValue}` })}
          >
            <img
              src={`${
                isDarkMode
                  ? `dark-${chart.chartValue}-chart`
                  : `light-${chart.chartValue}-chart`
              }.svg`}
              alt={`${chart.title} icon`}
            />
          </PanelButton>
        ))}
      </div>
    </div>
  )
}

export default ChartDisplayMenu
