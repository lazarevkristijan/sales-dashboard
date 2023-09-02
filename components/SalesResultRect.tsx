import { RectBtn } from "."

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
    <div className={`mx-[20px] flex items-center ${extraStyles}`}>
      <span>{title}</span>
      <RectBtn text={rectText} />
    </div>
  )
}

export default SalesResultRect
