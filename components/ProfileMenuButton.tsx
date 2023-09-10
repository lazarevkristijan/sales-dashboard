import { useContext } from "react"
import { DarkMode } from "./Contexts"

const ProfileMenuButton = ({ src }: { src: string }) => {
  const { isDarkMode } = useContext(DarkMode)

  return (
    <div
      className={`w-[40px] h-[40px] rou ${
        isDarkMode ? "bg-black" : "bg-white"
      } hover:scale-105 transition-all`}
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
