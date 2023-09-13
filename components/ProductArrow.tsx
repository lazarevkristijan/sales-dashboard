import { useContext } from "react"
import { DarkModeContext } from "../src/App"

const ProductArrow = ({
  direction,
  onClick,
}: {
  direction: string
  onClick: React.MouseEventHandler
}) => {
  // Constants
  const { isDarkMode } = useContext(DarkModeContext)

  return (
    <div
      className={`${
        direction === "left" ? "ml-2" : direction === "right" && "mr-2"
      } w-[30px] hover:cursor-pointer hover:scale-110 transition-all`}
      onClick={onClick}
    >
      <img
        src={`${isDarkMode ? "dark" : "light"}-arrow-${direction}.svg`}
        alt={`${direction} arrow`}
      />
    </div>
  )
}

export default ProductArrow
