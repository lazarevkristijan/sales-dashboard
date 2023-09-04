import { useState } from "react"

const OrderPageNo = ({ page }: { page: number }) => {
  const [isHovered, setIsHovered] = useState(false)

  const handleHover = () => {
    setIsHovered(!isHovered)
  }

  return (
    <span
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      className={`${
        isHovered && "light-blue3"
      } bg-[#fff] px-[10px] py-[6px] mx-1 rou hover:cursor-pointer`}
    >
      {page}
    </span>
  )
}

export default OrderPageNo
