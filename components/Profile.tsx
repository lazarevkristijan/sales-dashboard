import { ProfileMenuButton, RectBtn } from "."

const Profile = () => {
  return (
    <div className="smText light-blue3 p-[20px] rou max-w-[350px] absolute z-[1] right-0 top-[60px]">
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
          <ProfileMenuButton src="light-logout.svg" />
        </div>
        <div className="min-w-fit ml-[40px] text-right">
          <RectBtn
            text="John Doe"
            color="#fff"
          />
          <div className="flex justify-between mt-[5px]">
            <div className="w-1/2 my-auto">
              <span>Profile</span>
            </div>
            <div>
              <ProfileMenuButton src="light-user.svg" />
            </div>
          </div>
          <div className="flex justify-between mt-[5px]">
            <div className="w-1/2 my-auto mr-[10px]">
              <span>Settings</span>
            </div>
            <div>
              <ProfileMenuButton src="light-gear.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
