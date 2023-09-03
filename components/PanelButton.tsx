const PanelButton = ({
  title,
  iconWidth = "40",
}: {
  title: string
  iconWidth?: string
}) => {
  return (
    <div className="p-[10px] bg-[#fff] flex justify-between items-center rou mb-[10px]">
      <span>{title}</span>
      <div
        className={`light-blue1 w-[${iconWidth}px] h-[40px] rou flex items-center p-1`}
      ></div>
    </div>
  )
}

export default PanelButton
