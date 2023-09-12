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
  // Contexts
  const { isDarkMode } = useContext(DarkMode)

  return (
    <div
      className={`${
        isDarkMode ? "bg-black text-white" : "bg-white text-black"
      } w-[200px] mx-[20px] mb-[30px] rou`}
    >
      <div className="h-[30px] text-center rou-t">{heading}</div>
      <div
        className={`${bg} h-[200px] text-center flex flex-col text-black rou-b`}
      >
        <span className="mt-[30px] text-[50px] font-light">{qty}</span>
        <span>Valued</span>
        <span
          className={`${
            isDarkMode ? "bg-black text-white" : "bg-white text-black"
          } w-fit mx-auto py-1 px-2 rou`}
        >
          €{qty * 500}
        </span>
      </div>
    </div>
  )
}

export default SalesInfoBox
