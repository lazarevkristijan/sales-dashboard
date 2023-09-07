import { useContext } from "react"
import { DarkMode } from "./Contexts"

import { RectBtn } from "."

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
      <span className="block mb-[15px]">{title}</span>
      <RectBtn text={rectText} />
    </div>
  )
}

export default UsersRect
