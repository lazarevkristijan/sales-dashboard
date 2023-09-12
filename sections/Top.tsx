import { useContext } from "react"
import { sectionStyles } from "../constants"
import {
  NotificationPanel,
  ProfilePanel,
  TopIcon,
  SidePanel,
} from "../components"
import { DarkMode, TopOpenMenu } from "../components/Contexts"

const Top = () => {
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
