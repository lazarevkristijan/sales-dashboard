import { Notification } from "."
import { topDropDownStyles } from "../constants"
import { useContext, useEffect, useRef } from "react"
import { DarkMode } from "./Contexts"
import { OpenMenu } from "../sections/Top"

const NotificationPanel = () => {
  const { isDarkMode } = useContext(DarkMode)
  const { notificationMenu, toggleNotificationMenu } = useContext(OpenMenu)
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
        isDarkMode ? "dark-blue1" : "light-blue3"
      } pb-0 max-w-[300px] right-[20px]`}
      ref={notificationRef}
    >
      <div
        className=" w-0 h-0 absolute -top-[20px] right-[7.5px]"
        style={{
          borderLeft: "30px solid transparent",
          borderRight: "30px solid transparent",
          borderBottom: `30px solid ${isDarkMode ? "#00C0FF" : "#48CAE4"}`,
        }}
      ></div>
      <Notification evaluation={true} />
      <Notification evaluation={false} />
    </div>
  )
}

export default NotificationPanel
