import { useContext, useRef, useEffect } from "react"
import { DarkMode, TopOpenMenu } from "./Contexts"
import { ProfileMenuButton, InActiveButton } from "."
import { topDropDownStyles } from "../constants"

const Profile = () => {
  // Contexts
  const { isDarkMode } = useContext(DarkMode)
  const { profileMenu, toggleProfileMenu } = useContext(TopOpenMenu)

  // Functions
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

  // Refs
  const profileRef = useRef<HTMLDivElement | null>(null)

  return (
    <div
      className={`${topDropDownStyles} ${
        isDarkMode ? "dark-blue1" : "light-blue4"
      } max-w-[350px] smText right-0 drop-shadow-2xl`}
      ref={profileRef}
    >
      {/* Arrow that points to icon */}
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
          {/* Profile image */}
          <img
            src="profile.svg"
            alt="profile icon"
            className="w-[55px] h-[55px] mb-[65px]"
          />

          {/* Logout icon */}
          <span className="hover:cursor-pointer">
            <ProfileMenuButton
              src={`${isDarkMode ? "dark" : "light"}-logout.svg`}
            />
          </span>
        </div>
        <div className="min-w-fit ml-[40px] text-right">
          {/* Name tag */}
          <InActiveButton
            text="Bill Gates"
            color={`${isDarkMode ? "bg-black" : "bg-white"}`}
          />

          {/* Profile icon */}
          <div className="mt-[5px] flex justify-between items-center hover:cursor-pointer">
            <span className=" text-black">Profile</span>
            <ProfileMenuButton
              src={`${isDarkMode ? "dark" : "light"}-user.svg`}
            />
          </div>

          {/* Settings icon */}
          <div className="mt-[5px] flex justify-between items-center hover:cursor-pointer">
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
