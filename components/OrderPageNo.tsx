import { useState, useContext } from "react"
import { DarkMode } from "./Contexts"

const OrderPageNo = ({ page }: { page: number }) => {
  const [isHovered, setIsHovered] = useState(false)

  const handleHover = () => {
    setIsHovered(!isHovered)
  }

  const { isDarkMode } = useContext(DarkMode)

  return (
    <div
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      className={`
      ${isDarkMode && isHovered && "dark-blue1 text-white"}
      ${isDarkMode && !isHovered && "bg-black text-white"}
      ${!isDarkMode && isHovered && "light-blue3 text-black"}
      ${!isDarkMode && !isHovered && "bg-white text-black"}
w-[30px] mx-1 rou hover:cursor-pointer`}
    >
      {page}
    </div>
  )
}

export default OrderPageNo
