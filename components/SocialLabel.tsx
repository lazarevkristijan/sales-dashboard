import { useContext } from "react"
import { DarkMode } from "./Contexts"

const SocialLabel = ({ label, top }: { label: string; top: string }) => {
  const isDarkMode = useContext(DarkMode)

  return (
    <p
      className={`${
        isDarkMode ? "text-white" : "text-black"
      } absolute -translate-x-[50%] ${top}`}
    >
      {label}
    </p>
  )
}

export default SocialLabel
