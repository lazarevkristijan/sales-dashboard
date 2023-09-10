import { useContext } from "react"
import { DarkMode } from "./Contexts"

const SocialLabel = ({ label, top }: { label: string; top: string }) => {
  const { isDarkMode } = useContext(DarkMode)

  return (
    <p
      className={`${
        isDarkMode ? "text-white" : "text-black"
      } absolute -translate-x-[50%] text-[15px] xs:text-[17.5px] sm:text-[20px] ${top}`}
    >
      {label}
    </p>
  )
}

export default SocialLabel
