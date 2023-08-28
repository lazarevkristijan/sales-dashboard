import React from "react"
import {
  ProgressLine,
  Pillar,
  SalesInfoBox,
  SalesAdditionalBox,
} from "../components/"
import { progressLineNumbers, pillarValues, salesInfoBoxes } from "../constants"
const Sales = () => {
  return (
    <div className="mx-[10px] bg-[#caf0f8] py-[30px] rou">
      <div className="bg-[#fff] mx-[20px] py-[30px] rou mb-[30px]">
        <p className="text-center">Delivered</p>
        <div className="relative">
          {progressLineNumbers.map((line, index) => (
            <ProgressLine
              value={line.value}
              key={index}
            />
          ))}
          {pillarValues.map((pillar, index) => (
            <Pillar
              left={pillar.value}
              key={index}
            />
          ))}
        </div>
      </div>
      {salesInfoBoxes.map((box, index) => (
        <SalesInfoBox
          heading={box.heading}
          qty={box.qty}
          bg={box.bg}
          key={index}
        />
      ))}
      <SalesAdditionalBox />
    </div>
  )
}

export default Sales
