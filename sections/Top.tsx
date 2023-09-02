import { useState } from "react"
import { sectionStyles } from "../constants"
import { NotificationPanel, Profile, TopIcon } from "../components"

const Top = () => {
  const [notificationMenu, setNotificationMenu] = useState(false)
  const [profileMenu, setProfileMenu] = useState(false)

  const handleBellClick = () => {
    if (profileMenu) {
      setProfileMenu(!profileMenu)
    }
    setNotificationMenu(!notificationMenu)
  }

  const handleProfileClick = () => {
    if (notificationMenu) {
      setNotificationMenu(!notificationMenu)
    }
    setProfileMenu(!profileMenu)
  }

  return (
    <div className={`${sectionStyles} flex mb-[30px] relative`}>
      <TopIcon name="light-menu" />
      <TopIcon
        name="light-notification-bell"
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
    </div>
  )
}

export default Top
