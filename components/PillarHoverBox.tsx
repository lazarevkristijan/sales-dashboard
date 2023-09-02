const PillarHoverBox = ({
  visibility,
  week,
  items,
}: {
  visibility: string
  week: string
  items: number
}) => {
  return (
    <div
      className={`${visibility} w-[100px] h-[100px] border-black border-[1px] light-blue2 -translate-x-[100%] rou text-center`}
    >
      Week {week.slice(1, 3)} <br />
      {items} Items <br />
      (${items * 500})
    </div>
  )
}

export default PillarHoverBox
