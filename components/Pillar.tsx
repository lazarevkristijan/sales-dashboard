import { PillarHoverBox } from "."
import { useState, useContext } from "react"
import { DarkMode } from "./Contexts"

const Pillar = ({
  left,
  height,
  week,
}: {
  left: number
  height: number
  week: string
}) => {
  const { isDarkMode } = useContext(DarkMode)
  const [additionalHoverInfo, setAdditionalHoverInfo] = useState("hidden")
  const [hoverBorder, setHoverBorder] = useState("")
  const [pillarColor, setPillarColor] = useState(
    `${isDarkMode ? "dark-blue3" : "light-blue1"}`
  )

  function handlePillarHover() {
    setPillarColor(`${isDarkMode ? "dark-blue1" : "light-blue3"}`)
    setAdditionalHoverInfo("block")
    setHoverBorder("border-black border-[1px]")
  }

  function handlePillarLeave() {
    setPillarColor(`${isDarkMode ? "dark-blue3" : "light-blue1"}`)
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
