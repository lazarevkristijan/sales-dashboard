import { useState, useContext } from "react"
import { DarkMode } from "./ContDarkMode"

const OrderPageNo = ({ page }: { page: number }) => {
  const [isHovered, setIsHovered] = useState(false)

  const handleHover = () => {
    setIsHovered(!isHovered)
  }

  const isDarkMode = useContext(DarkMode)

  return (
    <div
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      className={`
s       ${
        isDarkMode ? "text-white" : "text-black"
      }  w-[30px] mx-1 rou hover:cursor-pointer`}
    >
      {page}
    </div>
  )
}

export default OrderPageNo
