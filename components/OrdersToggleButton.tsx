import { useState, useContext } from "react"
import { DarkMode } from "./Contexts"

const OrdersToggleButton = ({ name }: { name: string }) => {
  const [isOn, setIsOn] = useState(true)

  const handleToggle = () => {
    setIsOn(!isOn)
  }

  const { isDarkMode } = useContext(DarkMode)

  return (
    <div className="w-[150px] h-[40px] flex smText  mx-auto mb-[10px]">
      <div
        className={`w-[110px] h-full ${
          isDarkMode ? "dark-blue3" : "light-blue1"
        } flex justify-center items-center rou-l`}
      >
        {name}
      </div>
      <div
        className={`w-[40px] h-[40px] 
        ${isDarkMode && isOn && "dark-success"}
        ${isDarkMode && !isOn && "dark-danger"}
        ${!isDarkMode && isOn && "light-success"}
        ${!isDarkMode && !isOn && "light-danger"}

        
        ${
          isOn ? "light-success" : "light-danger"
        } hover:cursor-pointer flex rou-r`}
        onClick={handleToggle}
      >
        <img
          src={`${isOn ? "tick" : "cross"}.svg`}
          alt={`${isOn ? "tick" : "cross"} icon`}
          className="w-[20px] h-[20px] m-auto"
        />
      </div>
    </div>
  )
}

export default OrdersToggleButton
