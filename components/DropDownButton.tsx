import { useContext } from "react"
import { DarkMode } from "./Contexts"

const DropDownButton = () => {
  // Contexts
  const { isDarkMode } = useContext(DarkMode)

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
