const LineDot = ({ left, height }: { left: number; height: number }) => {
  return (
    <div
      className="w-[10px] h-[10px] absolute light-blue4 rounded-full -translate-x-1/2"
      style={{ left: left + 25, bottom: height }}
    ></div>
  )
}

export default LineDot
