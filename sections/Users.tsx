import { RectBtn } from "../components"

const Users = () => {
  return (
    <div className="light-blue1 py-[30px] rou mb-[50px] w-[500px]">
      <div className="mx-[20px]">
        <div className="bg-[#fff] text-center py-[20px] rou mb-[20px]">
          <span className="block mb-[15px]">Registered users</span>
          <RectBtn
            text="2173"
            color="#CAF0F8"
          />
        </div>
        <div className="bg-[#fff] text-center py-[20px] rou">
          <span className="block mb-[15px]">Daily visits (Avg)</span>
          <RectBtn
            text="160"
            color="#CAF0F8"
          />
        </div>
      </div>
    </div>
  )
}

export default Users
