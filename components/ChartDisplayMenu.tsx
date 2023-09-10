import { PanelButton } from "."
import { useContext } from "react"
import { DarkMode, ActiveChart } from "./Contexts"

const ChartDisplayMenu = () => {
  const { isDarkMode } = useContext(DarkMode)
  const { setChart } = useContext(ActiveChart)
  return (
    <div
      className={`absolute ${
        isDarkMode ? "dark-blue3" : "light-blue1"
      } left-0 sm:left-[300px] top-[355px] sm:top-0 rou smText border-black border-[1px]`}
    >
      <div className="m-[10px] w-[200px]">
        <PanelButton
          title="Bar Chart"
          color={isDarkMode ? "dark-blue4" : "light-blue2"}
          onClick={() => setChart({ value: "bar" })}
        >
          <img
            src={`${isDarkMode ? "dark-bar-chart" : "light-bar-chart"}.svg`}
            alt={`bar chart icon`}
          />
        </PanelButton>
        <PanelButton
          title="Line Graph"
          color={isDarkMode ? "dark-blue4" : "light-blue2"}
          onClick={() => setChart({ value: "line" })}
        >
          <img
            src={`${isDarkMode ? "dark-line-graph" : "light-line-graph"}.svg`}
            alt={`line chart icon`}
          />
        </PanelButton>
        <PanelButton
          title="Pie Chart"
          color={isDarkMode ? "dark-blue4" : "light-blue2"}
          onClick={() => setChart({ value: "pie" })}
        >
          <img
            src={`${isDarkMode ? "dark-pie-chart" : " light-pie-chart"}.svg`}
            alt={`pie chart icon`}
          />
        </PanelButton>
      </div>
    </div>
  )
}

export default ChartDisplayMenu
