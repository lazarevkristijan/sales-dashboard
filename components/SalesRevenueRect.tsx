import { InActiveButton } from "."

const SalesRevenueRect = ({
  title,
  rectText,
  extraStyles,
}: {
  title: string
  rectText: string
  extraStyles?: string
}) => {
  return (
    <div
      className={`${extraStyles} mx-[20px] flex items-center justify-between`}
    >
      <span>{title}</span>
      <InActiveButton text={rectText} />
    </div>
  )
}

export default SalesRevenueRect
