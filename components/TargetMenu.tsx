import { useState, useContext } from "react"
import { DarkModeContext, SalesContext } from "../src/App"
import { InActiveButton } from "."
import { monthlySales } from "../constants"

const TargetMenu = () => {
  // Contexts
  const { isDarkMode } = useContext(DarkModeContext)
  const { targetSales, setTarget } = useContext(SalesContext)

  // States
  const [isInput, setIsInput] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  // Functions
  const toggleIsInput = () => {
    setIsInput((prev) => !prev)
  }

  const handleHover = () => {
    setIsHovered((prev) => !prev)
  }

  return (
    <div
      className={`${
        isDarkMode ? "dark-blue1" : "light-blue4"
      } w-[350px] smText absolute left-0 sm:left-[300px] top-[355px] sm:top-0 rou border-black border-[1px]`}
    >
      <div
        className={`${
          isDarkMode ? "bg-black" : "bg-white"
        } m-[20px] text-center`}
      >
        <p className="py-[10px]">Monthly target sales</p>
        <div className="mb-[30px] flex justify-center items-center">
          {isInput ? (
            <input
              type="text"
              value={targetSales}
              onChange={(e) => setTarget({ value: Number(e.target.value) })}
              className={`${
                isDarkMode ? "dark-blue2" : "light-blue2"
              } w-[80px] p-1 text-center rou`}
            />
          ) : (
            <InActiveButton text={String(targetSales)} />
          )}
          <div
            className={`${
              isDarkMode
                ? isHovered
                  ? "dark-blue2"
                  : "dark-blue1"
                : isHovered
                ? "dark-blue2"
                : "light-blue3"
            } w-[30px] h-[30px] ml-2 rou hover:cursor-pointer hover:scale-105 transition-all`}
            onClick={toggleIsInput}
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
          >
            <img
              src={`${isInput ? "tick" : "edit"}.svg`}
              alt="tick"
              className="p-[5px]"
            />
          </div>
        </div>
        <div className="mx-[10px] flex flex-col">
          <InActiveButton text="All months" />

          <div className="pt-[10px] flex flex-wrap justify-between">
            {monthlySales.map((month, index) => (
              <InActiveButton
                key={index}
                text={`${month.month} ${month.sales}`}
                color={`${
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
