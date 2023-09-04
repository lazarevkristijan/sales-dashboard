const RectBtn = ({
  text,
  color = "light-blue1",
  onClick,
}: {
  text: string
  color?: string
  onClick?: React.MouseEventHandler
}) => {
  return (
    <span
      className={`${color} py-1 px-2 rou min-w-[80px] text-center`}
      onClick={onClick}
    >
      {text}
    </span>
  )
}

export default RectBtn
