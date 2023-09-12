import { useContext } from "react"
import { DarkMode, TopOpenMenu } from "../components/Contexts"
import {
  NotificationPanel,
  ProfilePanel,
  TopIcon,
  SidePanel,
} from "../components"
import { sectionStyles } from "../constants"

const Top = () => {
  // Contexts
  const { isDarkMode } = useContext(DarkMode)

  const {
    notificationMenu,
    toggleNotificationMenu,
    profileMenu,
    toggleProfileMenu,
    sidePanelMenu,
    toggleSidePanelMenu,
  } = useContext(TopOpenMenu)

  return (
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
  )
}

export default Top
