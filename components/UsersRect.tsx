import { useContext } from "react"
import { DarkMode } from "./Contexts"

import { InActiveButton } from "."

const UsersRect = ({
  title,
  rectText,
  extraStyles,
}: {
  title: string
  rectText: string
  extraStyles?: string
}) => {
  const { isDarkMode } = useContext(DarkMode)
  return (
    <div
      className={`${
        isDarkMode ? "bg-black text-white" : "bg-white text-black"
      } text-center py-[20px] rou ${extraStyles}`}
    >
      <p className="mb-[15px]">{title}</p>
      <InActiveButton
        text={rectText}
        extraStyles="w-[80px] mx-auto"
      />
    </div>
  )
}

export default UsersRect
