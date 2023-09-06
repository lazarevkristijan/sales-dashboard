import { useContext } from "react"
import { DarkMode } from "./ContDarkMode"

const SocialStat = ({
  media,
  followers,
  growth,
}: {
  media: string
  followers: number
  growth: number
}) => {
  const isDarkMode = useContext(DarkMode)
  return (
    <div
      className={`${
        isDarkMode ? "bg-black text-white" : "bg-white text-black"
      } rou w-1/3 pb-[20px] smText`}
    >
      <img
        src={`${media}.svg`}
        alt={`${media} logo`}
        className="w-[60px] py-[20px] mx-auto"
      />
      <hr
        className={`border-[1px]${
          isDarkMode ? "border-white" : "border-black"
        } mb-[10px]`}
      />
      <span className="mb-[10px]">{followers}</span>
      <p>
        <span className="text-[#38da38] font-bold">+{growth}</span>
        %/ <br className="hidden xs:visible" /> month <br />
        Avg.
      </p>
    </div>
  )
}

export default SocialStat
