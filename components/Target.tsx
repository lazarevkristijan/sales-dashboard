import { useState, useContext } from "react"
import { RectBtn } from "."
import { monthlySales } from "../constants"
import { DarkMode, TargetSales } from "./Contexts"

const Target = () => {
  const [isInput, setIsInput] = useState(false)
  const handleIsInput = () => {
    setIsInput((prev) => !prev)
  }

  const { isDarkMode } = useContext(DarkMode)
  const targetSales = useContext(TargetSales)

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
          {!isInput && (
            <RectBtn
              text={targetSales}
              onClick={() => handleIsInput}
            />
          )}

          {isInput && (
            <input
              type="text"
              value={targetSales}
              onChange={() => {}}
              className="w-[80px] light-blue3 rou p-1 text-center"
            />
          )}
          <div
            className="ml-2 w-[30px] h-[30px] light-blue3 rou hover:cursor-pointer"
            onClick={handleIsInput}
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
          <RectBtn text="All months" />
          <div className="flex flex-wrap justify-between pt-[10px]">
            {monthlySales.map((month, index) => (
              <RectBtn
                key={index}
                text={`${month.month} ${month.sales}`}
                color={`
                ${
                  isDarkMode && month.sales >= Number(targetSales)
                    ? "dark-success"
                    : `${
                        isDarkMode && month.sales <= Number(targetSales)
                          ? "dark-danger"
                          : `${
                              !isDarkMode && month.sales >= Number(targetSales)
                                ? "light-success"
                                : `${
                                    !isDarkMode &&
                                    month.sales <= Number(targetSales) &&
                                    "light-danger"
                                  }`
                            }`
                      }`
                }
                ${
                  month.sales >= Number(targetSales)
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

export default Target
