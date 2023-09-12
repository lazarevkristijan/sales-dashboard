const TopIcon = ({
  name,
  onClick,
  extraStyles,
}: {
  name: string
  onClick?: React.MouseEventHandler
  extraStyles?: string
}) => {
  return (
    <img
      src={`${name}.svg`}
      alt={`${name} icon`}
      className={`${extraStyles} w-[35px] h-[35px] hover:cursor-pointer transition-all hover:scale-105`}
      onClick={onClick}
    />
  )
}

export default TopIcon
