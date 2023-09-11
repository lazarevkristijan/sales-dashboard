import { Notification } from "."
import { notifications, topDropDownStyles } from "../constants"
import { useContext, useEffect, useRef } from "react"
import { DarkMode, TopOpenMenu } from "./Contexts"

const NotificationPanel = () => {
  const { isDarkMode } = useContext(DarkMode)
  const { notificationMenu, toggleNotificationMenu } = useContext(TopOpenMenu)
  const notificationRef = useRef<HTMLDivElement | null>(null)

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

  return (
    <div
      className={`${topDropDownStyles} ${
        isDarkMode ? "dark-blue1" : "light-blue4"
      } pb-0 max-w-[300px] right-[20px] drop-shadow-2xl`}
      ref={notificationRef}
    >
      <div
        className=" w-0 h-0 absolute -top-[20px] right-[7.5px]"
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
