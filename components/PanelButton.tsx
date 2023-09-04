import { useState } from "react"

const PanelButton = ({
  title,
  iconWidth = "40",
  children,
  active,
  color = "light-blue3",
  onClick,
}: {
  title: string
  iconWidth?: string
  children?: React.ReactNode
  active?: boolean
  color?: string
  onClick?: React.MouseEventHandler
}) => {
  const [isHovered, setIsHovered] = useState(false)

  const handleHover = () => {
    setIsHovered(!isHovered)
  }

  return (
    <div
      className={`${active && `${color}`} ${
        isHovered && `${color}`
      } p-[10px] bg-[#fff] flex justify-between items-center rou mb-[10px] hover:cursor-pointer`}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      onClick={onClick}
    >
      <span>{title}</span>
      <div
        className={`light-blue1 w-[${iconWidth}px] h-[40px] rou flex items-center p-1`}
      >
        {children}
      </div>
    </div>
  )
}

export default PanelButton
