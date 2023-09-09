import { InActiveButton } from "."

const SalesResultRect = ({
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
      className={`mx-[20px] flex items-center justify-between ${extraStyles}`}
    >
      <span>{title}</span>
      <InActiveButton text={rectText} />
    </div>
  )
}

export default SalesResultRect
