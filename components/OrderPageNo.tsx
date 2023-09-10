import { useState, useContext } from "react"
import { DarkMode } from "./Contexts"

const OrderPageNo = ({
  page,
  onClick,
}: {
  page: number
  onClick: React.MouseEventHandler
}) => {
  const [isHovered, setIsHovered] = useState(false)

  const handleHover = () => {
    setIsHovered((prev) => !prev)
  }

  const { isDarkMode } = useContext(DarkMode)

  return (
    <div
      className={`
    ${isDarkMode && isHovered ? "dark-blue2 text-white" : ""}
    ${isDarkMode && !isHovered ? "bg-black text-white" : ""}
    ${!isDarkMode && isHovered ? "light-blue3 text-black" : ""}
    ${!isDarkMode && !isHovered ? "bg-white text-black" : ""}
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
