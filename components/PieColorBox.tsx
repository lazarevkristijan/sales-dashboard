import React from "react"
import { pieColors } from "../constants"

const PieColors = ({
  sliceFrom,
  sliceTo,
}: {
  sliceFrom: number
  sliceTo: number
}) => {
  return (
    <>
      {pieColors.slice(sliceFrom, sliceTo).map((sliceInfo, index) => (
        <div
          key={index}
          className="w-[120px] flex justify-between items-center"
        >
          {sliceFrom === 0 ? (
            <>
              {sliceInfo.text}
              <div
                className="w-[20px] h-[20px] inline-block"
                style={{ backgroundColor: sliceInfo.color }}
              ></div>
            </>
          ) : (
            <>
              <div
                className="w-[20px] h-[20px] inline-block"
                style={{ backgroundColor: sliceInfo.color }}
              ></div>
              {sliceInfo.text}
            </>
          )}
        </div>
      ))}
    </>
  )
}

export default PieColors
