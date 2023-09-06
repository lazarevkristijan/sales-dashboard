import { useContext } from "react"
import { DarkMode } from "./ContDarkMode"

const ProgressLine = ({ value }: { value: number }) => {
  const isDarkMode = useContext(DarkMode)
  return (
    <div className="flex h-[20px] mb-7">
      <div className="h-full w-[40px] text-right">{value}</div>
      <div className="w-full h-full">
        <hr
          className={`${
            isDarkMode ? "border-white" : "border-black"
          } border-[1px] mt-[13px] ml-2 w-[893px] lg:w-[913px]`}
        />
      </div>
    </div>
  )
}

export default ProgressLine
