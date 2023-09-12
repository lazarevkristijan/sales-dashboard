import { useContext } from "react"
import { DarkMode } from "./Contexts"

const SocialLabel = ({ label, top }: { label: string; top: string }) => {
  // Contexts
  const { isDarkMode } = useContext(DarkMode)

  return (
    <p
      className={`${
        isDarkMode ? "dark-text" : "light-text"
      } ${top} text-[15px] xs:text-[17.5px] sm:text-[20px] absolute -translate-x-[50%]`}
    >
      {label}
    </p>
  )
}

export default SocialLabel
