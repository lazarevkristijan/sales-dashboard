import { useState, useContext } from "react"
import { sectionStyles } from "../constants"
import {
  NotificationPanel,
  Profile,
  TopIcon,
  SidePanel,
  ContDarkMode,
} from "../components"
import { DarkMode } from "../components/ContDarkMode"

const Top = () => {
  const [notificationMenu, setNotificationMenu] = useState(false)
  const [profileMenu, setProfileMenu] = useState(false)
  const [sidePanelMenu, setSidePanelMenu] = useState(false)

  const isDarkMode = useContext(DarkMode)

  const handleBellClick = () => {
    if (profileMenu || sidePanelMenu) {
      setProfileMenu(false)
      setSidePanelMenu(false)
    }
    setNotificationMenu(!notificationMenu)
  }

  const handleProfileClick = () => {
    if (notificationMenu || sidePanelMenu) {
      setNotificationMenu(false)
      setSidePanelMenu(false)
    }
    setProfileMenu(!profileMenu)
  }

  const handlePanelClick = () => {
    if (notificationMenu || profileMenu) {
      setNotificationMenu(false)
      setProfileMenu(false)
    }
    setSidePanelMenu(!sidePanelMenu)
  }

  return (
    <div className={`${sectionStyles} py-0 flex relative`}>
      <TopIcon
        name={`${isDarkMode ? "dark" : "light"}-menu`}
        onClick={handlePanelClick}
      />
      <TopIcon
        name={`${isDarkMode ? "dark" : "light"}-notification-bell`}
        extraStyles="ml-auto mr-0"
        onClick={handleBellClick}
      />
      <TopIcon
        name="profile"
        extraStyles="ml-[5px]"
        onClick={handleProfileClick}
      />
      {notificationMenu && <NotificationPanel />}
      {profileMenu && <Profile />}
      {sidePanelMenu && <SidePanel handlePanelClick={handlePanelClick} />}
    </div>
  )
}

export default Top
