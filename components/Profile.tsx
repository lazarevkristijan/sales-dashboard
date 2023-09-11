import { useContext, useRef, useEffect } from "react"

import { ProfileMenuButton, InActiveButton } from "."
import { topDropDownStyles } from "../constants"
import { DarkMode, TopOpenMenu } from "./Contexts"

const Profile = () => {
  const { isDarkMode } = useContext(DarkMode)
  const { profileMenu, toggleProfileMenu } = useContext(TopOpenMenu)

  const profileRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const isMenuIconClicked =
        e.target instanceof HTMLElement &&
        e.target.classList.contains("menuButtonProfile")

      if (
        profileRef.current &&
        !profileRef.current.contains(e.target as Node) &&
        !isMenuIconClicked
      ) {
        toggleProfileMenu()
      }
    }

    if (profileMenu) {
      document.addEventListener("mousedown", handleClickOutside)
    } else {
      document.removeEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [profileMenu, toggleProfileMenu])

  return (
    <div
      className={`${topDropDownStyles} ${
        isDarkMode ? "dark-blue1" : "light-blue4"
      } smText max-w-[350px] right-0 drop-shadow-2xl`}
      ref={profileRef}
    >
      <div
        className="w-0 h-0 absolute -top-[20px] right-0"
        style={{
          borderLeft: "30px solid transparent",
          borderRight: "30px solid transparent",
          borderBottom: `30px solid ${isDarkMode ? "#00C0FF" : "#00b4d8"}`,
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
          <InActiveButton
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
