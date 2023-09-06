import { useContext } from "react"
import { DarkMode } from "./ContDarkMode"
const LineDot = ({ left, height }: { left: number; height: number }) => {
  const isDarkMode = useContext(DarkMode)
  return (
    <div
      className={`w-[10px] h-[10px] absolute ${
        isDarkMode ? "dark-blue2" : "light-blue4"
      } light-blue4 rounded-full -translate-x-1/2`}
      style={{ bottom: height, left: left + 25 }}
    ></div>
  )
}

export default LineDot
