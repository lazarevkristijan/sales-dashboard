import { useState } from "react"

const OrdersToggleButton = ({ name }: { name: string }) => {
  const [isOn, setIsOn] = useState(true)

  const handleToggle = () => {
    setIsOn(!isOn)
  }

  return (
    <div className="w-[150px] h-[40px] flex smText  mx-auto mb-[10px]">
      <div className="w-[110px] h-full light-blue1 flex justify-center items-center rou-l">
        {name}
      </div>
      <div
        className={`w-[40px] h-full ${
          isOn ? "light-success" : "light-danger"
        } hover:cursor-pointer flex rou-r`}
        onClick={handleToggle}
      >
        <img
          src={`${isOn ? "tick" : "cross"}.svg`}
          alt={`${isOn ? "tick" : "cross"} icon`}
          className="w-[20px] mx-auto"
        />
      </div>
    </div>
  )
}

export default OrdersToggleButton
