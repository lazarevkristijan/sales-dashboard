import { useContext } from "react"
import { DarkModeContext } from "../src/App"

const TotalInfo = () => {
  // Contexts
  const { isDarkMode } = useContext(DarkModeContext)

  return (
    <div
      className={`${
        isDarkMode ? "dark-blue3" : "light-blue3"
      } w-[300px] absolute top-[100%] left-0 border-black border-[1px] rou`}
    >
      <div
        className={`${
          isDarkMode ? "bg-black" : "bg-white"
        } m-[20px] p-[20px] text-center smText rou`}
      >
        Total calculated from Delivered + Not delivered - Reteturned
      </div>
    </div>
  )
}

export default TotalInfo
