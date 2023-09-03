import React from "react"
import { DropDownButton } from "."

const ActiveButton = ({
  text,
  dropDown,
  onClick,
}: {
  text: string
  dropDown?: boolean
  onClick?: React.MouseEventHandler
}) => {
  return (
    <span
      className="light-blue3 py-1 px-2 w-fit rou min-w-[80px] text-center flex mx-auto mb-[20px] xs:mb-0 xs:mx-0 items-center hover:cursor-pointer"
      onClick={onClick}
    >
      {text}
      {dropDown && <DropDownButton />}
    </span>
  )
}

export default ActiveButton
