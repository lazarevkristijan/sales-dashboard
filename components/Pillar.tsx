const Pillar = ({ left }: { left: number }) => {
  return (
    <div
      className={`h-[100px] w-[25px] bg-[#CAF0F8] absolute top-[8px] left-[50px] left-[${left}px]`}
    ></div>
  )
}

export default Pillar
