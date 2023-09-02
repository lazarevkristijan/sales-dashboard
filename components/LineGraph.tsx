import { pillarValues, progressLineNumbers, chartStyles } from "../constants"
import { LineDot, Pillar, ProgressLine } from "."

const LineGraph = ({
  dataPoints,
}: {
  dataPoints: { left: number; height: number }[]
}) => {
  return (
    <div className={`${chartStyles}`}>
      <p className="text-center">Delivered Line</p>
      <div className="relative ml-[20px] w-[960px]">
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
            <svg className="absolute inset-0 w-full h-full">
              <line
                key={index}
                x1={prevDot.left}
                y1={prevDot.height}
                x2={dot.left}
                y2={dot.height}
                stroke="#000"
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
