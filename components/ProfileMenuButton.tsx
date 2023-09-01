import React from "react"

const ProfileMenuButton = ({ src }: { src: string }) => {
  return (
    <div className="w-[40px] h-[40px] rou bg-[#fff]">
      <img
        src={src}
        alt={src.slice(0, src.length - 4) + " icon"}
        className="p-[5px]"
      />
    </div>
  )
}

export default ProfileMenuButton
