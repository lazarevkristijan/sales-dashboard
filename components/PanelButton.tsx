import { useState, useContext } from "react"
import { DarkModeContext } from "../src/App"

const PanelButton = ({
  title,
  iconWidth = "40",
  children,
  color = "light-blue3",
  onClick,
}: {
  title: string
  iconWidth?: string
  children?: React.ReactNode
  active?: boolean
  color?: string
  onClick?: React.MouseEventHandler
}) => {
  // Contexts
  const { isDarkMode } = useContext(DarkModeContext)

  // States
  const [isHovered, setIsHovered] = useState(false)

  // Functions
  const handleHover = () => {
    setIsHovered((prev) => !prev)
  }

  return (
    <div
      className={`
      ${isDarkMode ? "bg-black" : "bg-white"}
 ${
   isHovered && `${color}`
 } mb-[10px] p-[10px] flex justify-between items-center rou hover:cursor-pointer selection:bg-transparent`}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      onClick={onClick}
    >
      <span>{title}</span>
      <div
        className={`${
          isDarkMode ? "dark-blue3" : "light-blue1"
        } w-[${iconWidth}px] h-[40px] p-1 flex items-center rou`}
      >
        {children}
      </div>
    </div>
  )
}

export default PanelButton
