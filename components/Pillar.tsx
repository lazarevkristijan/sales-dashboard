const Pillar = ({ left, week }: { left: number; week: string }) => {
  return (
    <div
      className={`h-[132px] sm:h-[164px] md:h-[196px] lg:h-[196px] w-[40px] sm:w-[50px] bg-[#CAF0F8] absolute top-[8px] left-[50px] left-[${left}px]`}
      style={{ left: left }}
    >
      <span className="absolute top-[132px] sm:top-[164px] md:top-[196px] lg:top-[196px] sm:left-[5px]">
        {week}
      </span>
    </div>
  )
}

export default Pillar
