import { useContext } from "react"
import { DarkMode } from "./Contexts"

const Notification = ({
  evaluation,
  userName,
  itemName,
  qty,
  ago,
}: {
  evaluation: boolean
  userName: string
  itemName: string
  qty: number
  ago: number
}) => {
  // Constants
  const { isDarkMode } = useContext(DarkMode)

  return (
    <div
      className={`${
        isDarkMode
          ? evaluation
            ? "dark-success"
            : "dark-danger"
          : evaluation
          ? "light-success"
          : "light-danger"
      } mb-[20px] p-[20px] smText flex justify-between rou`}
    >
      <div
        className={`${
          isDarkMode ? "bg-black" : "bg-white"
        } w-1/3 mr-[10px] my-auto p-[10px] rou`}
      >
        <img
          src="iPhone 12.svg"
          alt="phone"
        />
      </div>
      <div className="w-2/3 my-auto">
        <p>
          {userName} {evaluation ? "ordered" : "returned"} {qty}{" "}
          {qty > 1 ? `${itemName}'s` : `${itemName}`} valued ${qty * 500}
        </p>
        {ago <= 60
          ? ago
          : ago > 60
          ? `${Math.floor(ago / 60)}`
          : ago > 1440
          ? `${Math.floor(ago / 1440)}`
          : ago > 43800 && `${Math.floor(ago / 43800)}`}
        {ago <= 60
          ? `m`
          : ago > 60
          ? "h"
          : ago > 1440
          ? "d"
          : ago > 43800 && "m"}
      </div>
    </div>
  )
}

export default Notification
