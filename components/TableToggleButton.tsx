import { useState, useContext } from "react"
import { DarkMode } from "./Contexts"

const TableToggleButton = ({ name }: { name: string }) => {
  // Contexts
  const { isDarkMode } = useContext(DarkMode)

  // States
  const [isOptionOn, setIsOptionOn] = useState(true)

  // Functions
  const toggleOption = () => {
    setIsOptionOn((prev) => !prev)
  }

  return (
    <div className="w-[150px] h-[40px] mx-auto mb-[10px] smText flex">
      <div
        className={`${
          isDarkMode ? "dark-blue3" : "light-blue1"
        } w-[110px] h-full flex justify-center items-center rou-l`}
      >
        {name}
      </div>
      <div
        className={`${
          isDarkMode
            ? isOptionOn
              ? "dark-success"
              : "dark-danger"
            : isOptionOn
            ? "light-success"
            : "light-danger"
        } ${
          isOptionOn ? "light-success" : "light-danger"
        } w-[40px] h-[40px] flex rou-r`}
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
