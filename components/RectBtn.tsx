import { useContext } from "react"
import { DarkMode } from "./Contexts"

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
  const { isDarkMode } = useContext(DarkMode)

  return (
    <span
      className={` ${isDarkMode && color && color} ${
        isDarkMode && !color && "dark-blue3"
      } ${!isDarkMode && color && color} ${
        !isDarkMode && !color && "light-blue1"
      } py-1 px-2 rou min-w-[80px] text-center ${extraStyles}`}
      onClick={onClick}
    >
      {text}
    </span>
  )
}

export default RectBtn
