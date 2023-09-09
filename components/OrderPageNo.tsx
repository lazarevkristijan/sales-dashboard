import { useState, useContext } from "react"
import { DarkMode } from "./Contexts"

const OrderPageNo = ({
  page,
  active = false,
}: {
  page: number
  active?: boolean
}) => {
  const [isHovered, setIsHovered] = useState(false)

  const handleHover = () => {
    setIsHovered((prev) => !prev)
  }

  const { isDarkMode } = useContext(DarkMode)

  return (
    <div
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      className={`
      ${isDarkMode && isHovered && "dark-blue2 text-white"}
      ${isDarkMode && !isHovered && "bg-black text-white"}
      ${!isDarkMode && isHovered && "light-blue3 text-black"}
      ${!isDarkMode && !isHovered && "bg-white text-black"}
      
      ${isDarkMode && active && "dark-blue1 text-white"}
      ${isDarkMode && !active && "bg-black text-white"}
      ${!isDarkMode && active && "light-blue3 text-black"}
      ${!isDarkMode && !active && "bg-white text-black"}

w-[30px] mx-1 rou hover:cursor-pointer`}
    >
      {page}
    </div>
  )
}

export default OrderPageNo
