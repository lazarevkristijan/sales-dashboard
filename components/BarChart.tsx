import { useContext } from "react"
import { ProgressLine, Pillar } from "."
import { progressLineNumbers, pillarValues, chartStyles } from "../constants"
import { DarkMode } from "./ContDarkMode"

const BarChart = () => {
  const isDarkMode = useContext(DarkMode)

  return (
    <div className={`${chartStyles} ${isDarkMode ? "bg-[#000]" : "bg-[#fff]"}`}>
      <p className="text-center">Delivered</p>
      <div
        className={`${
          isDarkMode ? "text-white" : "text-black"
        } relative ml-[20px] w-[960px]`}
      >
        {progressLineNumbers.map((line, index) => (
          <ProgressLine
            value={line.value}
            key={index}
          />
        ))}
        {pillarValues.map((pillar, index) => (
          <Pillar
            left={pillar.value}
            week={pillar.week}
            height={pillar.height}
            key={index}
          />
        ))}
      </div>
    </div>
  )
}

export default BarChart
