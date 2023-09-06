import { useContext } from "react"
import { DarkMode } from "./ContDarkMode"

const PillarHoverBox = ({
  visibility,
  week,
  items,
}: {
  visibility: string
  week: string
  items: number
}) => {
  const isDarkMode = useContext(DarkMode)

  return (
    <div
      className={`${visibility} smText text-black w-[100px] p-1 ${
        isDarkMode ? "border-white" : "border-black"
      } border-[2px] ${
        isDarkMode ? "dark-blue1" : "light-blue2"
      } -translate-x-[100%] rou text-center`}
    >
      Week {week.slice(1, 3)} <br />
      {items} Items <br />
      (${items * 500})
    </div>
  )
}

export default PillarHoverBox
