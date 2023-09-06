import { useContext } from "react"
import { DarkMode } from "./ContDarkMode"

const ProfileMenuButton = ({ src }: { src: string }) => {
  const isDarkMode = useContext(DarkMode)

  return (
    <div
      className={`w-[40px] h-[40px] rou ${
        isDarkMode ? "bg-black" : "bg-white"
      }`}
    >
      <img
        src={src}
        alt={src.slice(0, src.length - 4) + " icon"}
        className="p-[5px]"
      />
    </div>
  )
}

export default ProfileMenuButton
