import { useState, useContext, createContext } from "react"
import { sectionStyles } from "../constants"
import { NotificationPanel, Profile, TopIcon, SidePanel } from "../components"
import { DarkMode } from "../components/Contexts"

export const OpenMenu = createContext({
  sidePanelMenu: false,
  toggleSidePanelMenu: () => {},

  notificationMenu: false,
  toggleNotificationMenu: () => {},

  profileMenu: false,
  toggleProfileMenu: () => {},
})

const Top = () => {
  const [notificationMenu, setNotificationMenu] = useState(false)
  const [profileMenu, setProfileMenu] = useState(false)
  const [sidePanelMenu, setSidePanelMenu] = useState(false)

  const { isDarkMode } = useContext(DarkMode)

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
    <div>
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
        <OpenMenu.Provider
          value={{
            profileMenu,
            toggleProfileMenu,
            notificationMenu,
            toggleNotificationMenu,
            sidePanelMenu,
            toggleSidePanelMenu,
          }}
        >
          {profileMenu && <Profile />}
          {notificationMenu && <NotificationPanel />}
          {sidePanelMenu && (
            <SidePanel handlePanelClick={toggleSidePanelMenu} />
          )}
        </OpenMenu.Provider>
      </div>
      <p className="bg-red-600 text-center font-bold opacity-20">
        PROJECT UNDER DEVELEOPMENT <br className="sm:hidden" /> & MAY HAVE BUGS
      </p>
    </div>
  )
}

export default Top
