import { useContext } from "react"
import { DarkMode } from "./Contexts"

const SalesInfoBox = ({
  heading,
  qty,
  bg,
}: {
  heading: string
  qty: number
  bg: string
}) => {
  const isDarkMode = useContext(DarkMode)

  return (
    <div
      className={`${
        isDarkMode ? "bg-black text-white" : "bg-white text-black"
      } w-[200px] mx-[20px] rou mb-[30px] rou`}
    >
      <div className="h-[30px] text-center rou-t">{heading}</div>
      <div
        className={`h-[200px] flex flex-col text-center text-black rou-b`}
        style={{ backgroundColor: bg }}
      >
        <span className="sctOneNumbers mt-[30px]">{qty}</span>
        <span>Valued</span>
        <span
          className={`${
            isDarkMode ? "bg-black text-white" : "bg-white text-black"
          } py-1 px-2 rou w-fit mx-auto`}
        >
          ${qty * 500}
        </span>
      </div>
    </div>
  )
}

export default SalesInfoBox
