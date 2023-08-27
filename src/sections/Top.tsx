import React from "react"
import { topIconStyles } from "./../constants/index"

const Top = () => {
  return (
    <div className="flex mb-[80px]">
      <img
        src="light-menu.svg"
        alt="menu icon"
        className={`${topIconStyles}`}
      />
      <img
        src="light-notification-bell.svg"
        alt="notification icon"
        className={`${topIconStyles} ml-auto mr-1 light-icon`}
      />
      <img
        src="profile.svg"
        alt="profile icon"
        className={`${topIconStyles} ml-[40px]`}
      />
    </div>
  )
}

export default Top
