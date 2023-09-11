import { useState, useContext } from "react"
import { DarkMode } from "./Contexts"

const OrderPageNo = ({
  page,
  onClick,
}: {
  page: number
  onClick: React.MouseEventHandler
}) => {
  // Contexts
  const { isDarkMode } = useContext(DarkMode)

  // States
  const [isHovered, setIsHovered] = useState(false)

  // Functions
  const handleHover = () => {
    setIsHovered((prev) => !prev)
  }

  return (
    <div
      className={`
    ${
      isDarkMode
        ? isHovered
          ? "dark-blue2 text-white"
          : "bg-black text-white"
        : isHovered
        ? "light-blue3 text-black"
        : "bg-white text-black"
    }
    w-[30px] mx-1 rou hover:cursor-pointer selection:bg-transparent hover:scale-105 transition-all`}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      onClick={onClick}
    >
      {page}
    </div>
  )
}

export default OrderPageNo
