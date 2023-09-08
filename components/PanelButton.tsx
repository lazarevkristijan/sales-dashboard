import { useState, useContext } from "react"
import { DarkMode } from "./Contexts"

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
  const [isHovered, setIsHovered] = useState(false)

  const handleHover = () => {
    setIsHovered((prev) => !prev)
  }

  const { isDarkMode } = useContext(DarkMode)

  return (
    <div
      className={`
      ${isDarkMode ? "bg-black" : "bg-white"}
 ${
   isHovered && `${color}`
 } p-[10px] flex justify-between items-center rou mb-[10px] hover:cursor-pointer`}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      onClick={onClick}
    >
      <span>{title}</span>
      <div
        className={`${
          isDarkMode ? "dark-blue3" : "light-blue1"
        } w-[${iconWidth}px] h-[40px] rou flex items-center p-1`}
      >
        {children}
      </div>
    </div>
  )
}

export default PanelButton
