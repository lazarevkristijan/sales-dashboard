import { useState, useContext } from "react"
import { DarkModeContext } from "../src/App"
import { OrdersTableContext } from "../sections/Orders"

const OrderPageNo = ({
  page,
  onClick,
}: {
  page: number
  onClick: React.MouseEventHandler
}) => {
  // Contexts
  const { isDarkMode } = useContext(DarkModeContext)
  const { pageNumber } = useContext(OrdersTableContext)

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
        ? isHovered || pageNumber === page
          ? "dark-blue2 dark-text"
          : "bg-black dark-text"
        : isHovered || pageNumber === page
        ? "light-blue3 light-text"
        : "bg-white light-text"
    } w-[30px] mx-1 rou hover:cursor-pointer selection:bg-transparent hover:scale-105 transition-all`}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      onClick={onClick}
    >
      {page}
    </div>
  )
}

export default OrderPageNo
