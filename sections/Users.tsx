import { UsersRect } from "../components"
import { smSectionStyles } from "../constants"
import { useContext } from "react"
import { DarkMode } from "../components/ContDarkMode"

const Users = () => {
  const isDarkMode = useContext(DarkMode)

  return (
    <div
      className={`${smSectionStyles} ${
        isDarkMode ? "dark-blue3" : "light-blue1"
      }`}
    >
      <div className="mx-[20px]">
        <UsersRect
          title="Registered users"
          rectText="2173"
          extraStyles="mb-[20px]"
        />

        <UsersRect
          title="Daily visits (avg)"
          rectText="160"
        />
      </div>
    </div>
  )
}

export default Users
