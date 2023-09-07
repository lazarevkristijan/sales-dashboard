import { pieColors } from "../constants"
import { useContext } from "react"
import { DarkMode } from "./Contexts"

const PieColorBox = ({
  sliceFrom,
  sliceTo,
}: {
  sliceFrom: number
  sliceTo: number
}) => {
  const isDarkMode = useContext(DarkMode)

  return (
    <>
      {pieColors.slice(sliceFrom, sliceTo).map((sliceInfo, index) => (
        <div
          key={index}
          className={`${
            isDarkMode ? "text-white" : "text-black"
          } w-[120px] flex justify-between items-center `}
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

export default PieColorBox
