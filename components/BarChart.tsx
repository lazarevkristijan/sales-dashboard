import { ProgressLine, Pillar } from "."
import { progressLineNumbers, pillarValues } from "../constants"

const BarChart = () => {
  return (
    <div className="bg-[#fff] mx-[20px] py-[30px] rou mb-[30px] max-w-[1000px] overflow-x-scroll lg:overflow-hidden">
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
