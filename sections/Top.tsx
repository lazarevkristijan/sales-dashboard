import { useState } from "react"
import { topIconStyles } from "./../constants/index"
import { NotificationPanel, Profile } from "../components"

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
    <div className="flex mb-[30px] mx-[10px] max-w-[1040px] lg:mx-auto relative">
      <img
        src="light-menu.svg"
        alt="menu icon"
        className={`${topIconStyles}`}
      />
      <img
        src="light-notification-bell.svg"
        alt="notification icon"
        className={`${topIconStyles} ml-auto mr-0`}
        onClick={handleBellClick}
      />
      {notificationMenu && <NotificationPanel />}
      <img
        src="profile.svg"
        alt="profile icon"
        className={`${topIconStyles} ml-[5px]`}
        onClick={handleProfileClick}
      />
      {profileMenu && <Profile />}
    </div>
  )
}

export default Top
