import { HoveredSales } from "."
import { useState } from "react"
const Pillar = ({
  left,
  height,
  week,
}: {
  left: number
  height: number
  week: string
}) => {
  const [pillarColor, setPillarColor] = useState("#CAF0F8")
  const [additionalHoverInfo, setAdditionalHoverInfo] = useState("hidden")
  const [hoverBorder, setHoverBorder] = useState("")
  function handlePillarHover() {
    setPillarColor("#48CAE4")
    setAdditionalHoverInfo("block")
    setHoverBorder("border-black border-[1px]")
  }

  function handlePillarLeave() {
    setPillarColor("#CAF0F8")
    setAdditionalHoverInfo("hidden")
    setHoverBorder("")
  }

  return (
    <div
      className={`w-[50px] absolute bottom-[7px] ${hoverBorder}`}
      style={{ left: left, height: height, backgroundColor: pillarColor }}
      onMouseEnter={handlePillarHover}
      onMouseLeave={handlePillarLeave}
    >
      <HoveredSales
        visibility={additionalHoverInfo}
        week={week}
        items={height}
      />

      <span
        className="absolute sm:left-[5px]"
        style={{ top: height }}
      >
        {week}
      </span>
    </div>
  )
}

export default Pillar
