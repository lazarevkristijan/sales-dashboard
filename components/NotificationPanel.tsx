import { Notification } from "."
import { topDropDownStyles } from "../constants"
import { useContext } from "react"
import { DarkMode } from "./ContDarkMode"

const NotificationPanel = () => {
  const isDarkMode = useContext(DarkMode)
  return (
    <div
      className={`${topDropDownStyles} ${
        isDarkMode ? "dark-blue1" : "light-blue3"
      } pb-0 max-w-[300px] right-[20px]`}
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
