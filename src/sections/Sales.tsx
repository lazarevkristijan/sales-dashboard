import React from "react"
import { ProgressLine, Pillar } from "../components/"

const Sales = () => {
  return (
    <div className="mx-[10px] bg-[#caf0f8]">
      <div className="bg-[#fff] mx-[20px] py-[30px] rounded-[10px] mb-[25px]">
        <p className="text-center">Delivered</p>
        <div className="relative">
          <ProgressLine value={150} />
          <ProgressLine value={120} />
          <ProgressLine value={90} />
          <ProgressLine value={60} />
          <ProgressLine value={30} />
          <ProgressLine value={0} />
          <Pillar left={25} />
          <Pillar left={10} />
        </div>
      </div>
      <div className="bg-[#fff] w-[200px] mx-auto rounded-t-[10px]">
        <div className="h-[30px] text-center">Not delivered</div>
        <div className="bg-[#F0FF96] h-[200px] flex flex-col text-center">
          <span>7</span>
          <span>Valued</span>
          <span className="bg-[#fff] py-2 px-3 rounded-[10px] w-fit mx-auto">
            $3500
          </span>
        </div>
      </div>
    </div>
  )
}

export default Sales
