import { useContext, createContext, useState } from "react"
import { DarkModeContext } from "../src/App"
import {
  NotificationPanel,
  ProfilePanel,
  TopIcon,
  SidePanel,
} from "../components"
import { sectionStyles } from "../constants"

export const TopOpenMenuContext = createContext({
  sidePanelMenu: false,
  toggleSidePanelMenu: () => {},

  notificationMenu: false,
  toggleNotificationMenu: () => {},

  profileMenu: false,
  toggleProfileMenu: () => {},
})

const Top = () => {
  // Contexts
  const { isDarkMode } = useContext(DarkModeContext)

  // Top Open Menu data
  const [notificationMenu, setNotificationMenu] = useState(false)
  const [profileMenu, setProfileMenu] = useState(false)
  const [sidePanelMenu, setSidePanelMenu] = useState(false)

  const toggleNotificationMenu = () => {
    if (profileMenu || sidePanelMenu) {
      setProfileMenu(false)
      setSidePanelMenu(false)
    }
    setNotificationMenu((prev) => !prev)
  }

  const toggleProfileMenu = () => {
    if (notificationMenu || sidePanelMenu) {
      setNotificationMenu(false)
      setSidePanelMenu(false)
    }
    setProfileMenu((prev) => !prev)
  }

  const toggleSidePanelMenu = () => {
    if (notificationMenu || profileMenu) {
      setNotificationMenu(false)
      setProfileMenu(false)
    }
    setSidePanelMenu((prev) => !prev)
  }

  return (
    <TopOpenMenuContext.Provider
      value={{
        sidePanelMenu,
        toggleSidePanelMenu,
        notificationMenu,
        toggleNotificationMenu,
        profileMenu,
        toggleProfileMenu,
      }}
    >
      <div className={`${sectionStyles} flex relative`}>
        <TopIcon
          name={`${isDarkMode ? "dark" : "light"}-menu`}
          extraStyles="menuButtonSide"
          onClick={toggleSidePanelMenu}
        />
        <TopIcon
          name={`${isDarkMode ? "dark" : "light"}-notification-bell`}
          extraStyles="ml-auto mr-0 menuButtonNotification"
          onClick={toggleNotificationMenu}
        />
        <TopIcon
          name="profile"
          extraStyles="ml-[5px] menuButtonProfile"
          onClick={toggleProfileMenu}
        />
        {profileMenu && <ProfilePanel />}
        {notificationMenu && <NotificationPanel />}
        {sidePanelMenu && <SidePanel handlePanelClick={toggleSidePanelMenu} />}
      </div>
    </TopOpenMenuContext.Provider>
  )
}

export default Top
