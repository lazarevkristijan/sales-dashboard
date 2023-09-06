import { useContext } from "react"

import { ProfileMenuButton, RectBtn } from "."
import { topDropDownStyles } from "../constants"
import { DarkMode } from "./ContDarkMode"

const Profile = () => {
  const isDarkMode = useContext(DarkMode)

  return (
    <div
      className={`${topDropDownStyles} ${
        isDarkMode ? "dark-blue1" : "light-blue3"
      } smText max-w-[350px] right-0`}
    >
      <div
        className="w-0 h-0 absolute -top-[20px] right-0"
        style={{
          borderLeft: "30px solid transparent",
          borderRight: "30px solid transparent",
          borderBottom: `30px solid ${isDarkMode ? "#00C0FF" : "#48CAE4"}`,
          rotate: "15deg",
        }}
      ></div>
      <div className="flex justify-between">
        <div className="w-1/2 flex flex-col justify-between">
          <img
            src="profile.svg"
            alt="profile icon"
            className="w-[55px] h-[55px] mb-[65px]"
          />
          <span className="hover:cursor-pointer">
            <ProfileMenuButton
              src={`${isDarkMode ? "dark" : "light"}-logout.svg`}
            />
          </span>
        </div>
        <div className="min-w-fit ml-[40px] text-right">
          <RectBtn
            text="John Doe"
            color={`${isDarkMode ? "bg-black" : "bg-white"}`}
          />
          <div className="flex justify-between mt-[5px] items-center hover:cursor-pointer">
            <span className=" text-black">Profile</span>
            <ProfileMenuButton
              src={`${isDarkMode ? "dark" : "light"}-user.svg`}
            />
          </div>
          <div className="flex justify-between mt-[5px] items-center hover:cursor-pointer">
            <span className="mr-[10px] text-black">Settings</span>
            <ProfileMenuButton
              src={`${isDarkMode ? "dark" : "light"}-gear.svg`}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
