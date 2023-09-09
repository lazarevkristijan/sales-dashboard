import React, { useContext, useState } from "react"
import { DropDownButton } from "."
import { DarkMode } from "./Contexts"

const ActiveButton = ({
  text,
  dropDown,
  onClick,
}: {
  text: string
  dropDown?: boolean
  onClick?: React.MouseEventHandler
}) => {
  const { isDarkMode } = useContext(DarkMode)

  const [isHovered, setIsHovered] = useState(false)

  const handleHover = () => {
    setIsHovered((prev) => !prev)
  }

  return (
    <span
      className={`
      ${isDarkMode && isHovered && "dark-blue2"}
      ${isDarkMode && !isHovered && "dark-blue1"}
      ${!isDarkMode && isHovered && "dark-blue2"}
      ${!isDarkMode && !isHovered && "light-blue3"}

 py-1 px-2 w-fit rou min-w-[80px] text-center flex mx-auto mb-[20px] xs:mb-0 xs:mx-0 items-center hover:cursor-pointer selection:bg-transparent`}
      onClick={onClick}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      {text}
      {dropDown && <DropDownButton />}
    </span>
  )
}

export default ActiveButton
