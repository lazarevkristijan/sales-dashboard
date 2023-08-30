const LineDot = ({ left, height }: { left: number; height: number }) => {
  return (
    <div
      className="w-[10px] h-[10px] absolute bg-[#00B4D8] rounded-full -translate-x-1/2"
      style={{ left: left + 25, bottom: height }}
    ></div>
  )
}

export default LineDot
