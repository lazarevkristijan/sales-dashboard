import { useState, useContext } from "react"
import { DarkMode } from "./Contexts"

const PerPageOption = ({ number }: { number: number }) => {
  const [isHovered, setIsHovered] = useState(false)

  const handleIsHovered = () => {
    setIsHovered(!isHovered)
  }

  const { isDarkMode } = useContext(DarkMode)
  return (
    <div
      className={`
      ${isDarkMode && isHovered && "dark-blue1"}
      ${isDarkMode && !isHovered && "bg-[#000]"}
      
      ${!isDarkMode && isHovered && "light-blue3"}
      ${!isDarkMode && !isHovered && "bg-[#fff]"}
      
 text-center py-[5px] rou hover:cursor-pointer`}
      onMouseEnter={handleIsHovered}
      onMouseLeave={handleIsHovered}
    >
      {number}
    </div>
  )
}

export default PerPageOption
