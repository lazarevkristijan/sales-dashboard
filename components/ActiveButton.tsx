import React, { useContext } from "react"
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

  return (
    <span
      className={`${
        isDarkMode ? "dark-blue1" : "light-blue3"
      } py-1 px-2 w-fit rou min-w-[80px] text-center flex mx-auto mb-[20px] xs:mb-0 xs:mx-0 items-center hover:cursor-pointer selection:bg-transparent`}
      onClick={onClick}
    >
      {text}
      {dropDown && <DropDownButton />}
    </span>
  )
}

export default ActiveButton
