const RectBtn = ({
  text,
  color = "light-blue1",
  onClick,
  extraStyles,
}: {
  text: string
  color?: string
  onClick?: React.MouseEventHandler
  extraStyles?: string
}) => {
  return (
    <span
      className={`${color} py-1 px-2 rou min-w-[80px] text-center ${extraStyles}`}
      onClick={onClick}
    >
      {text}
    </span>
  )
}

export default RectBtn
