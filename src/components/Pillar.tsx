import React from "react"

const Pillar = ({ left }: { left: number }) => {
  console.log(left)
  return (
    <div
      className={`h-[100px] w-[25px] bg-[#CAF0F8] absolute top-[35px] left-[${left}px]`}
    ></div>
  )
}

export default Pillar
