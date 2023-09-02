import { ProgressLine, Pillar } from "."
import { progressLineNumbers, pillarValues, chartStyles } from "../constants"

const BarChart = () => {
  return (
    <div className={`${chartStyles}`}>
      <p className="text-center">Delivered</p>
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
      </div>
    </div>
  )
}

export default BarChart
