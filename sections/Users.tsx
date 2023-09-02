import { UsersRect } from "../components"
import { smSectionStyles } from "../constants"
const Users = () => {
  return (
    <div className={`${smSectionStyles}`}>
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
