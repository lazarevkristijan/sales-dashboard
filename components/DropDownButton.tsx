import { useContext } from "react"
import { DarkModeContext } from "../src/App"

const DropDownButton = () => {
  // Contexts
  const { isDarkMode } = useContext(DarkModeContext)

  return (
    <span className={`${isDarkMode ? "bg-[#000]" : "bg-[#fff]"} ml-2 rou`}>
      <img
        src={`${isDarkMode ? "dark" : "light"}-drop-down-icon.svg`}
        alt="Drop down icon"
        className="w-[30px] h-[30px] inline"
      />
    </span>
  )
}
export default DropDownButton
