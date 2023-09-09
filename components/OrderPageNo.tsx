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
      className={`
      ${
        isDarkMode
          ? isHovered
            ? active
              ? "dark-blue2 text-white"
              : "bg-black text-white"
            : active
            ? "bg-black text-white"
            : "bg-black text-white"
          : isHovered
          ? active
            ? "light-blue3 text-black"
            : "bg-white text-black"
          : active
          ? "light-blue3 text-black"
          : "bg-white text-black"
      }
    
    w-[30px] mx-1 rou hover:cursor-pointer`}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      {page}
    </div>
  )
}

export default OrderPageNo
