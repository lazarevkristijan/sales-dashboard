import { pillarValues, progressLineNumbers, chartStyles } from "../constants"
import { LineDot, Pillar, ProgressLine } from "."
import { useContext } from "react"
import { DarkMode } from "./Contexts"

const LineGraph = ({
  dataPoints,
}: {
  dataPoints: { left: number; height: number }[]
}) => {
  const isDarkMode = useContext(DarkMode)

  return (
    <div className={`${chartStyles} ${isDarkMode ? "bg-[#000]" : "bg-[#fff]"}`}>
      <p className="text-center">Delivered Line</p>
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
        {dataPoints.map((dot, index) => (
          <LineDot
            key={index}
            left={dot.left}
            height={dot.height}
          />
        ))}

        {dataPoints.map((dot, index) => {
          if (index === 0) return null
          const prevDot = dataPoints[index - 1]
          return (
            <svg
              className="absolute left-[25px] inset-0 w-full h-full"
              key={index}
            >
              <line
                x1={prevDot.left}
                y1={prevDot.height}
                x2={dot.left}
                y2={dot.height}
                stroke={`${isDarkMode ? "#fff" : "#000"}`}
                strokeWidth={2}
              />
            </svg>
          )
        })}
      </div>
    </div>
  )
}

export default LineGraph
