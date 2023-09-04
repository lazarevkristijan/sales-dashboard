import { PillarHoverBox } from "."
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
  const [pillarColor, setPillarColor] = useState("light-blue1")
  const [additionalHoverInfo, setAdditionalHoverInfo] = useState("hidden")
  const [hoverBorder, setHoverBorder] = useState("")
  function handlePillarHover() {
    setPillarColor("light-blue3")
    setAdditionalHoverInfo("block")
    setHoverBorder("border-black border-[1px]")
  }

  function handlePillarLeave() {
    setPillarColor("light-blue1")
    setAdditionalHoverInfo("hidden")
    setHoverBorder("")
  }

  return (
    <div
      className={`w-[50px] absolute bottom-[7px] hover:cursor-pointer ${hoverBorder} ${pillarColor}`}
      style={{ left: left, height: height }}
      onMouseEnter={handlePillarHover}
      onMouseLeave={handlePillarLeave}
    >
      <PillarHoverBox
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
