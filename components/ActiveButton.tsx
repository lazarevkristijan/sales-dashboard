import { DropDownButton } from "."

const ActiveButton = ({
  text,
  dropDown,
}: {
  text: string
  dropDown?: boolean
}) => {
  return (
    <span className="light-blue3 py-1 px-2 w-fit rou min-w-[80px] text-center flex mx-auto mb-[20px] xs:mb-0 xs:mx-0 items-center">
      {text}
      {dropDown && <DropDownButton />}
    </span>
  )
}

export default ActiveButton
