import { RectBtn } from "../components"
import { smSectionStyles } from "../constants"
const Users = () => {
  return (
    <div className={`${smSectionStyles}`}>
      <div className="mx-[20px]">
        <div className="bg-[#fff] text-center py-[30px] rou mb-[30px]">
          <span className="block mb-[15px]">Registered users</span>
          <RectBtn
            text="2173"
            color="light-blue1"
          />
        </div>
        <div className="bg-[#fff] text-center py-[30px] rou">
          <span className="block mb-[15px]">Daily visits (Avg)</span>
          <RectBtn
            text="160"
            color="light-blue1"
          />
        </div>
      </div>
    </div>
  )
}

export default Users
