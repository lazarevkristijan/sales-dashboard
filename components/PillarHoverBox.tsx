import { useContext } from "react"
import { DarkMode } from "./Contexts"

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
        isDarkMode
          ? "dark-blue1 border-white border-[3px]"
          : "light-blue2 border-black"
      } border-[3px] -translate-x-[100%] rou text-center`}
    >
      Week {week.slice(1, 3)} <br />
      {items} Items <br />
      (${items * 500})
    </div>
  )
}

export default PillarHoverBox
