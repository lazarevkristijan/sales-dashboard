import { useState, useContext } from "react"
import { InActiveButton } from "."
import { monthlySales } from "../constants"
import { DarkMode, SalesContext } from "./Contexts"

const TargetMenu = () => {
  const [isInput, setIsInput] = useState(false)
  const toggleIsInput = () => {
    setIsInput((prev) => !prev)
  }

  const [isHovered, setIsHovered] = useState(false)

  const handleHover = () => {
    setIsHovered((prev) => !prev)
  }

  const { isDarkMode } = useContext(DarkMode)
  const { targetSales, setTarget } = useContext(SalesContext)

  return (
    <div
      className={`absolute w-[350px] ${
        isDarkMode ? "dark-blue3" : "light-blue1"
      } left-0 sm:left-[300px] top-[355px] sm:top-0 rou smText border-black border-[1px]`}
    >
      <div
        className={`m-[20px] ${
          isDarkMode ? "bg-black" : "bg-white"
        } text-center`}
      >
        <p>Monthly target sales</p>
        <div className="flex justify-center items-center mb-[30px]">
          {!isInput && <InActiveButton text={String(targetSales)} />}

          {isInput && (
            <input
              type="text"
              value={targetSales}
              onChange={(e) => setTarget({ value: Number(e.target.value) })}
              className={`w-[80px] ${
                isDarkMode ? "dark-blue2" : "light-blue2"
              } rou p-1 text-center`}
            />
          )}
          <div
            className={`ml-2 w-[30px] h-[30px]
             ${
               isDarkMode
                 ? isHovered
                   ? "dark-blue2"
                   : "dark-blue1"
                 : isHovered
                 ? "dark-blue2"
                 : "light-blue3"
             }
             rou hover:cursor-pointer hover:scale-105 transition-all`}
            onClick={toggleIsInput}
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
          >
            {isInput ? (
              <img
                src="tick.svg"
                alt="tick"
                className="p-[5px]"
              />
            ) : (
              <img
                src="edit.svg"
                alt="edit"
                className="p-[5px]"
              />
            )}
          </div>
        </div>
        <div className="flex flex-col mx-[10px]">
          <InActiveButton text="All months" />
          <div className="flex flex-wrap justify-between pt-[10px]">
            {monthlySales.map((month, index) => (
              <InActiveButton
                key={index}
                text={`${month.month} ${month.sales}`}
                color={`
                ${
                  isDarkMode
                    ? month.sales >= Number(targetSales)
                      ? "dark-success"
                      : "dark-danger"
                    : month.sales >= Number(targetSales)
                    ? "light-success"
                    : "light-danger"
                }`}
                extraStyles="mb-[10px]"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TargetMenu
