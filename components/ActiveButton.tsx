import React, { useContext, useState } from "react"
import { DropDownButton } from "."
import { DarkMode } from "./Contexts"

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
  const { isDarkMode } = useContext(DarkMode)

  const [isHovered, setIsHovered] = useState(false)

  const handleHover = () => {
    setIsHovered((prev) => !prev)
  }

  return (
    <span
      className={`
${extraStyles}
      ${
        isDarkMode
          ? isHovered
            ? "dark-blue2"
            : "dark-blue1"
          : isHovered
          ? "dark-blue2"
          : "light-blue3"
      }

 py-1 px-2 w-fit text-black rou min-w-[80px] text-center flex mx-auto mb-[20px] xs:mb-0 xs:mx-0 items-center hover:cursor-pointer selection:bg-transparent hover:scale-105 transition-all`}
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
