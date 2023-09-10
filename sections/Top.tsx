import { useState, useContext, createContext } from "react"
import { sectionStyles } from "../constants"
import { NotificationPanel, Profile, TopIcon, SidePanel } from "../components"
import { DarkMode } from "../components/Contexts"

export const OpenMenu = createContext({
  sidePanelMenu: false,
  toggleSidePanel: () => {},

  notificationMenu: false,
  toggleNotificationMenu: () => {},

  profileMenu: false,
  toggleProfileMenu: () => {},
})

const Top = () => {
  const [notificationMenu, setNotificationMenu] = useState(false)
  const [profileMenu, setProfileMenu] = useState(false)
  const [sidePanelMenu, setSidePanelMenu] = useState(false)

  const toggleSidePanel = () => {
    setSidePanelMenu((prev) => !prev)
  }

  const toggleNotificationMenu = () => {
    setNotificationMenu((prev) => !prev)
  }

  const toggleProfileMenu = () => {
    setProfileMenu((prev) => !prev)
  }

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
    <div className={`${sectionStyles} flex relative`}>
      <TopIcon
        name={`${isDarkMode ? "dark" : "light"}-menu`}
        extraStyles="menuButtonSide"
        onClick={handlePanelClick}
      />
      <TopIcon
        name={`${isDarkMode ? "dark" : "light"}-notification-bell`}
        extraStyles="ml-auto mr-0 menuButtonNotification"
        onClick={handleBellClick}
      />
      <TopIcon
        name="profile"
        extraStyles="ml-[5px] menuButtonProfile"
        onClick={handleProfileClick}
      />
      <OpenMenu.Provider
        value={{
          profileMenu,
          toggleProfileMenu,
          notificationMenu,
          toggleNotificationMenu,
          sidePanelMenu,
          toggleSidePanel,
        }}
      >
        {profileMenu && <Profile />}
        {notificationMenu && <NotificationPanel />}
        {sidePanelMenu && <SidePanel handlePanelClick={handlePanelClick} />}
      </OpenMenu.Provider>
    </div>
  )
}

export default Top
