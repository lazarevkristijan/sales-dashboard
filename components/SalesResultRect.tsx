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
      <RectBtn
        text={rectText}
        color="light-blue1"
      />
    </div>
  )
}

export default SalesResultRect
