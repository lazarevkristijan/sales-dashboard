import { RectBtn } from "."

const UsersRect = ({
  title,
  rectText,
  extraStyles,
}: {
  title: string
  rectText: string
  extraStyles?: string
}) => {
  return (
    <div className={`bg-[#fff] text-center py-[20px] rou ${extraStyles}`}>
      <span className="block mb-[15px]">{title}</span>
      <RectBtn text={rectText} />
    </div>
  )
}

export default UsersRect
