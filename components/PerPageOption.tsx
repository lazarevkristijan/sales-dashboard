import { useState } from "react"

const PerPageOption = ({
  number,
  active,
}: {
  number: number
  active?: boolean
}) => {
  const [isHovered, setIsHovered] = useState(false)

  const handleIsHovered = () => {
    setIsHovered(!isHovered)
  }

  return (
    <div
      className={`${isHovered && "light-blue3"} ${
        active && "light-blue3"
      } text-center py-[5px] rou hover:cursor-pointer`}
      onMouseEnter={handleIsHovered}
      onMouseLeave={handleIsHovered}
    >
      {number}
    </div>
  )
}

export default PerPageOption
