const Pillar = ({ left, week }: { left: number; week: string }) => {
  return (
    <div
      className={`h-[100px] sm:h-[132px] md:h-[164px] lg:h-[196px] w-[40px] sm:w-[50px] md:w-[60px] bg-[#CAF0F8] absolute top-[8px] left-[50px] left-[${left}px]`}
      style={{ left: left }}
    >
      <span className="absolute top-[100px] sm:top-[132px] md:top-[164px] lg:top-[196px] sm:left-[5px] md:left-[10px]">
        {week}
      </span>
    </div>
  )
}

export default Pillar
