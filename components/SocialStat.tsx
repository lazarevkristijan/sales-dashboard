import { useContext } from "react"
import { DarkMode } from "./Contexts"

const SocialStat = ({
  media,
  followers,
  growth,
}: {
  media: string
  followers: number
  growth: number
}) => {
  // Contexts
  const { isDarkMode } = useContext(DarkMode)

  return (
    <div
      className={`${
        isDarkMode ? "bg-black dark-text" : "bg-white light-text"
      } w-1/3 pb-[20px] smText rou`}
    >
      <img
        src={`${media}.svg`}
        alt={`${media} logo`}
        className="w-[60px] mx-auto py-[20px]"
      />
      <hr
        className={`${
          isDarkMode ? "border-white" : "border-black"
        } mb-[10px] border-[1px]`}
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
