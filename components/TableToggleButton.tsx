import { useState, useContext } from "react"
import { DarkMode } from "./Contexts"

const TableToggleButton = ({ name }: { name: string }) => {
  const [isOptionOn, setIsOptionOn] = useState(true)

  const toggleOption = () => {
    setIsOptionOn((prev) => !prev)
  }

  const { isDarkMode } = useContext(DarkMode)

  return (
    <div className="w-[150px] h-[40px] flex smText mx-auto mb-[10px]">
      <div
        className={`w-[110px] h-full ${
          isDarkMode ? "dark-blue3" : "light-blue1"
        } flex justify-center items-center rou-l`}
      >
        {name}
      </div>
      <div
        className={`w-[40px] h-[40px] 
        ${
          isDarkMode
            ? isOptionOn
              ? "dark-success"
              : "dark-danger"
            : isOptionOn
            ? "light-success"
            : "light-danger"
        }

        
        ${
          isOptionOn ? "light-success" : "light-danger"
        } hover:cursor-pointer flex rou-r`}
        onClick={toggleOption}
      >
        <img
          src={`${isOptionOn ? "tick" : "cross"}.svg`}
          alt={`${isOptionOn ? "tick" : "cross"} icon`}
          className="w-[20px] h-[20px] m-auto"
        />
      </div>
    </div>
  )
}

export default TableToggleButton
