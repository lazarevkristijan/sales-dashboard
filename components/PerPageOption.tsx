import { useState, useContext } from "react"
import { DarkModeContext } from "../src/App"

const PerPageOption = ({
  number,
  onClick,
}: {
  number: number
  onClick: React.MouseEventHandler
}) => {
  // Contexts
  const { isDarkMode } = useContext(DarkModeContext)

  // States
  const [isHovered, setIsHovered] = useState(false)

  // Functions
  const handleHover = () => {
    setIsHovered((prev) => !prev)
  }

  return (
    <div
      className={`${
        isDarkMode
          ? isHovered
            ? "dark-blue1"
            : "bg-black"
          : isHovered
          ? "light-blue3"
          : "bg-white"
      } py-[5px] text-center rou hover:cursor-pointer`}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      onClick={onClick}
    >
      {number}
    </div>
  )
}

export default PerPageOption
