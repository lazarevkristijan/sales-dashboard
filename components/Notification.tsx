import { useContext } from "react"
import { DarkMode } from "./ContDarkMode"

const Notification = ({ evaluation }: { evaluation: boolean }) => {
  const isDarkMode = useContext(DarkMode)
  return (
    <div
      className={`
      ${isDarkMode && evaluation && "dark-success"}
      ${isDarkMode && !evaluation && "dark-danger"}
      ${!isDarkMode && evaluation && "light-success"}
      ${!isDarkMode && !evaluation && "light-danger"}

     rou flex justify-between mb-[20px] p-[20px] smText`}
    >
      <div className="bg-black p-[10px] rou mr-[10px] w-1/3 my-auto">
        <img
          src="phone.svg"
          alt="phone"
        />
      </div>
      <div className="w-2/3 my-auto">
        <p>
          {evaluation ? "New order" : "Cancelled order"} by User Name, item
          name, quantity, price
        </p>
      </div>
    </div>
  )
}

export default Notification
