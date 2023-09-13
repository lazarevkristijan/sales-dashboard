import { useContext, useEffect, useRef } from "react"
import { DarkModeContext } from "../src/App"
import { TopOpenMenuContext } from "../sections/Top"

import { Notification } from "."
import { notifications, topDropDownStyles } from "../constants"

const NotificationPanel = () => {
  // Contexts
  const { isDarkMode } = useContext(DarkModeContext)

  const { notificationMenu, toggleNotificationMenu } =
    useContext(TopOpenMenuContext)

  // Functions
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const isMenuIconClicked =
        e.target instanceof HTMLElement &&
        e.target.classList.contains("menuButtonNotification")

      if (
        notificationRef.current &&
        !notificationRef.current.contains(e.target as Node) &&
        !isMenuIconClicked
      ) {
        toggleNotificationMenu()
      }
    }

    if (notificationMenu) {
      document.addEventListener("mousedown", handleClickOutside)
    } else {
      document.removeEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [notificationMenu, toggleNotificationMenu])

  // Refs
  const notificationRef = useRef<HTMLDivElement | null>(null)

  return (
    <div
      className={`${topDropDownStyles} ${
        isDarkMode ? "dark-blue1" : "light-blue4"
      } max-w-[300px] pb-0 right-[20px] drop-shadow-2xl`}
      ref={notificationRef}
    >
      {/* Arrow that points to icon */}
      <div
        className="w-0 h-0 absolute -top-[20px] right-[7.5px]"
        style={{
          borderLeft: "30px solid transparent",
          borderRight: "30px solid transparent",
          borderBottom: `30px solid ${isDarkMode ? "#00C0FF" : "#00b4d8"}`,
        }}
      ></div>
      <div className="max-h-[400px] overflow-y-scroll ">
        {notifications.map((notification, index) => (
          <Notification
            key={index}
            evaluation={notification.evaluation}
            userName={notification.userName}
            itemName={notification.itemName}
            qty={notification.qty}
            ago={notification.ago}
          />
        ))}
      </div>
    </div>
  )
}

export default NotificationPanel
