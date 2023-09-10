import { useState, useContext } from "react"
import { DarkMode } from "./Contexts"

const PerPageOption = ({
  number,
  onClick,
}: {
  number: number
  onClick: React.MouseEventHandler
}) => {
  const [isHovered, setIsHovered] = useState(false)

  const handleHover = () => {
    setIsHovered((prev) => !prev)
  }

  const { isDarkMode } = useContext(DarkMode)
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
      }
      
 text-center py-[5px] rou hover:cursor-pointer`}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      onClick={onClick}
    >
      {number}
    </div>
  )
}

export default PerPageOption
