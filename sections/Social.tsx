import { useContext } from "react"
import { DarkModeContext } from "../src/App"
import { SocialStat, SocialLabel } from "../components"
import { smSectionStyles } from "../constants"
import React from "react"

const Social = () => {
  // Contexts
  const { isDarkMode } = useContext(DarkModeContext)

  return (
    <div
      className={`${smSectionStyles} ${
        isDarkMode ? "dark-blue3" : "light-blue1"
      } text-center`}
    >
      <p className={`${isDarkMode ? "dark-text" : "light-text"} text-center`}>
        Social stats
      </p>
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

const MemoizedSocial = React.memo(Social)
export default MemoizedSocial
