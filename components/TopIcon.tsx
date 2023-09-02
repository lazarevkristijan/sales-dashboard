import { topIconStyles } from "../constants"

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
    <>
      <img
        src={`${name}.svg`}
        alt={`${name} icon`}
        className={`${topIconStyles} ${extraStyles}`}
        onClick={onClick}
      />
    </>
  )
}

export default TopIcon
