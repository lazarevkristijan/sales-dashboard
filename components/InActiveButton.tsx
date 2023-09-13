import { useContext } from "react"
import { DarkModeContext } from "../src/App"

const InActiveButton = ({
  text,
  color,
  extraStyles,
}: {
  text: string
  color?: string
  extraStyles?: string
}) => {
  // Contexts
  const { isDarkMode } = useContext(DarkModeContext)

  return (
    <p
      className={`${
        isDarkMode
          ? color
            ? color
            : "dark-blue3"
          : color
          ? color
          : "light-blue1"
      } ${extraStyles} min-w-[80px] py-1 px-2 text-center rou`}
    >
      {text}
    </p>
  )
}

export default InActiveButton
