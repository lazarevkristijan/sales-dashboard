import { useContext } from "react"
import { DarkMode } from "./ContDarkMode"

const RectBtn = ({
  text,
  color,
  onClick,
  extraStyles,
}: {
  text: string
  color?: string
  onClick?: React.MouseEventHandler
  extraStyles?: string
}) => {
  const isDarkMode = useContext(DarkMode)

  return (
    <span
      className={`${
        isDarkMode ? "dark-blue3" : "light-blue1"
      } ${color} py-1 px-2 rou min-w-[80px] text-center ${extraStyles}`}
      onClick={onClick}
    >
      {text}
    </span>
  )
}

export default RectBtn
