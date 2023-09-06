import { smSectionStyles } from "../constants"
import { SocialStat, SocialLabel } from "../components"
import { useContext } from "react"
import { DarkMode } from "../components/ContDarkMode"

const Social = () => {
  const isDarkMode = useContext(DarkMode)

  return (
    <div
      className={`${smSectionStyles} ${
        isDarkMode ? "dark-blue3" : "light-blue1"
      } text-center`}
    >
      <p>Social stats</p>
      <div className="mx-[20px] flex justify-between">
        <SocialStat
          media="instagram"
          followers={1666}
          growth={0.7}
        />
        <div className="relative">
          <SocialLabel
            label="Followers"
            top="top-[110px]"
          />
          <SocialLabel
            label="Growth"
            top="top-[140px]"
          />
        </div>
        <SocialStat
          media="facebook"
          followers={2730}
          growth={1}
        />
      </div>
    </div>
  )
}

export default Social
