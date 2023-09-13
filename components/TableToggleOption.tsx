import { useContext } from "react"
import { DarkModeContext } from "../src/App"

const TableToggleOption = ({
  title,
  toggleFunction,
  state,
}: {
  title: string
  state: boolean
  toggleFunction: () => void
}) => {
  const { isDarkMode } = useContext(DarkModeContext)

  return (
    <div
      className="w-[150px] h-[40px] mx-auto mb-[10px] smText flex hover:cursor-pointer"
      onClick={toggleFunction}
    >
      <div
        className={`${
          isDarkMode ? "dark-blue3" : "light-blue1"
        } w-[110px] h-full flex justify-center items-center rou-l`}
      >
        {title}
      </div>
      <div
        className={`w-[40px] h-[40px] 
        ${isDarkMode && state && "dark-success"}
        ${isDarkMode && !state && "dark-danger"}
        ${!isDarkMode && state && "light-success"}
        ${!isDarkMode && !state && "light-danger"}
        
        flex rou-r`}
      >
        <img
          src={` ${state ? "tick" : "cross"}.svg`}
          alt={` ${state ? "tick" : "cross"} icon`}
          className="w-[20px] h-[20px] m-auto"
        />
      </div>
    </div>
  )
}

export default TableToggleOption
