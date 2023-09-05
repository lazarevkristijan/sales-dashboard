import { ProfileMenuButton, RectBtn } from "."
import { topDropDownStyles } from "../constants"
import { UserDataContext } from "../src/App"
import { useContext } from "react"

const Profile = () => {
  const userData = useContext(UserDataContext)

  return (
    <div className={`${topDropDownStyles} smText max-w-[350px] right-0`}>
      <div
        className="w-0 h-0 absolute -top-[20px] right-0"
        style={{
          borderLeft: "30px solid transparent",
          borderRight: "30px solid transparent",
          borderBottom: "30px solid #48CAE4",
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
            <ProfileMenuButton src="light-logout.svg" />
          </span>
        </div>
        <div className="min-w-fit ml-[40px] text-right">
          <RectBtn
            text={`${userData.firstName} ${userData.lastName}`}
            color="bg-white"
          />
          <div className="flex justify-between mt-[5px] items-center hover:cursor-pointer">
            <span>Profile</span>
            <ProfileMenuButton src="light-user.svg" />
          </div>
          <div className="flex justify-between mt-[5px] items-center hover:cursor-pointer">
            <span className="mr-[10px]">Settings</span>
            <ProfileMenuButton src="light-gear.svg" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
