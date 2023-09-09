import { useState, useContext } from "react"
import { sectionStyles } from "../constants"
import { NotificationPanel, Profile, TopIcon, SidePanel } from "../components"
import { DarkMode } from "../components/Contexts"

const Top = () => {
  const [notificationMenu, setNotificationMenu] = useState(false)
  const [profileMenu, setProfileMenu] = useState(false)
  const [sidePanelMenu, setSidePanelMenu] = useState(false)

  const { isDarkMode } = useContext(DarkMode)

  const handleBellClick = () => {
    if (profileMenu || sidePanelMenu) {
      setProfileMenu(false)
      setSidePanelMenu(false)
    }
    setNotificationMenu((prev) => !prev)
  }

  const handleProfileClick = () => {
    if (notificationMenu || sidePanelMenu) {
      setNotificationMenu(false)
      setSidePanelMenu(false)
    }
    setProfileMenu((prev) => !prev)
  }

  const handlePanelClick = () => {
    if (notificationMenu || profileMenu) {
      setNotificationMenu(false)
      setProfileMenu(false)
    }
    setSidePanelMenu((prev) => !prev)
  }

  return (
    <div className={``}>
      <div className={`${sectionStyles} flex relative`}>
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
      <div className="flex justify-center bg-red-600 text-white font-bold">
        <p className="mx-auto text-center">
          THIS IS A DEMO PREVIEW AND MAY HAVE FUNCTIONALITY ISSUES
        </p>
      </div>
    </div>
  )
}

export default Top
