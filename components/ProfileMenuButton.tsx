import { useContext } from "react"
import { DarkModeContext } from "../src/App"

const ProfileMenuButton = ({ src }: { src: string }) => {
  // Contexts
  const { isDarkMode } = useContext(DarkModeContext)

  return (
    <div
      className={`${
        isDarkMode ? "bg-black" : "bg-white"
      } w-[40px] h-[40px] rou hover:scale-105 transition-all`}
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
