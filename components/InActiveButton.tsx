import { useContext } from "react"
import { DarkMode } from "./Contexts"

const InActiveButton = ({
  text,
  color,
  extraStyles,
}: {
  text: string
  color?: string
  extraStyles?: string
}) => {
  const { isDarkMode } = useContext(DarkMode)

  return (
    <p
      className={`${
        (isDarkMode && color) ||
        (isDarkMode && "dark-blue3") ||
        (!isDarkMode && color) ||
        (!isDarkMode && "light-blue1")
      }
      py-1 px-2 rou min-w-[80px] text-center ${extraStyles}`}
    >
      {text}
    </p>
  )
}

export default InActiveButton
