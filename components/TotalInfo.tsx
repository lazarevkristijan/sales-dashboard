import { useContext } from "react"
import { DarkMode } from "./Contexts"

const TotalInfo = () => {
  const { isDarkMode } = useContext(DarkMode)

  return (
    <div
      className={`w-[300px] ${
        isDarkMode ? "dark-blue3" : "light-blue3"
      } absolute top-[100%] left-0 border-black border-[1px] rou`}
    >
      <div
        className={`m-[20px] p-[20px] text-center ${
          isDarkMode ? "bg-black" : "bg-white"
        } rou smText`}
      >
        Total calculated from Delivered + Not delivered - Reteturned
      </div>
    </div>
  )
}

export default TotalInfo
