import { topIconStyles } from "./../constants/index"

const Top = () => {
  return (
    <div className="flex mb-[30px] mx-[10px] max-w-[1040px] lg:mx-auto">
      <img
        src="light-menu.svg"
        alt="menu icon"
        className={`${topIconStyles}`}
      />
      <img
        src="light-notification-bell.svg"
        alt="notification icon"
        className={`${topIconStyles} ml-auto mr-0`}
      />
      <img
        src="profile.svg"
        alt="profile icon"
        className={`${topIconStyles} ml-[5px]`}
      />
    </div>
  )
}

export default Top
