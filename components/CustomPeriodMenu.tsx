import { useState } from "react"
import { PanelButton } from "."

const CustomPeriodMenu = () => {
  const [fromDate, setFromDate] = useState("2023-09-05")
  const [toDate, setToDate] = useState("2024-09-05")

  const handleFromChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFromDate(e.target.value)
  }

  const handleToChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setToDate(e.target.value)
  }

  return (
    <div className="absolute light-blue1 left-0 sm:left-[300px] top-[355px] sm:top-0 rou smText border-black border-[1px]">
      <div className="m-[10px] w-[300px]">
        <PanelButton
          title="From Date"
          iconWidth="150"
        >
          <input
            type="date"
            value={fromDate}
            onChange={handleFromChange}
          />
        </PanelButton>

        <PanelButton
          title="To Date"
          iconWidth="150"
        >
          <input
            type="date"
            value={toDate}
            onChange={handleToChange}
          />
        </PanelButton>

        <div className="p-[20px] light-blue3 flex justify-center items-center rou mb-[10px] hover:cursor-pointer">
          <p className="">Set Custom Period</p>
        </div>
      </div>
    </div>
  )
}

export default CustomPeriodMenu
