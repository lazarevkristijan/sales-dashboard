import { useContext } from "react"
import { DarkModeContext } from "../src/App"
import { InActiveButton } from "."

const UsersRect = ({
  title,
  rectText,
  extraStyles,
}: {
  title: string
  rectText: string
  extraStyles?: string
}) => {
  // Contexts
  const { isDarkMode } = useContext(DarkModeContext)

  return (
    <div
      className={`${
        isDarkMode ? "bg-black dark-text" : "bg-white light-text"
      } ${extraStyles} py-[15px] text-center rou `}
    >
      <p className="mb-[15px]">{title}</p>
      <InActiveButton
        text={rectText}
        extraStyles="w-[80px] mx-auto"
      />
    </div>
  )
}

export default UsersRect
