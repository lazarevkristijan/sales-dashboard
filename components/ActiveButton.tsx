import React, { useContext, useState } from "react"
import { DarkMode } from "./Contexts"
import { DropDownButton } from "."

const ActiveButton = ({
  text,
  dropDown,
  onClick,
  extraStyles,
}: {
  text: string
  dropDown?: boolean
  onClick?: React.MouseEventHandler
  extraStyles?: string
}) => {
  // Contexts
  const { isDarkMode } = useContext(DarkMode)
  // States
  const [isHovered, setIsHovered] = useState(false)
  // Functions
  const handleHover = () => {
    setIsHovered((prev) => !prev)
  }

  return (
    <span
      className={`${extraStyles}
      ${
        isDarkMode
          ? isHovered
            ? "dark-blue2"
            : "dark-blue1"
          : isHovered
          ? "dark-blue2"
          : "light-blue3"
      } w-fit min-w-[80px] mx-auto mb-[20px] xs:mb-0 xs:mx-0 py-1 px-2 light-text text-center flex items-center rou hover:cursor-pointer selection:bg-transparent hover:scale-105 transition-all`}
      onClick={onClick}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      {text}
      {/* Optional dropdown icon if button is a menu toggler */}
      {dropDown && <DropDownButton />}
    </span>
  )
}

export default ActiveButton
