import React from "react"

const ProgressLine = ({ value }: { value: number }) => {
  return (
    <div className="flex h-[20px] mx-[20px] mb-1 sm:mb-3 md:mb-5 lg:mb-7">
      <div className="h-full w-[30px] text-right">{value}</div>
      <div className="w-full h-full">
        <hr className="border-black mx-1 mt-[12px]" />
      </div>
    </div>
  )
}

export default ProgressLine
