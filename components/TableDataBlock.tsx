import { useContext } from "react"
import { DarkMode } from "./Contexts"

const TableDataBlock = ({
  index,
  children,
  border = true,
}: {
  index: number
  children: React.ReactNode
  border?: boolean
}) => {
  // Constants
  const { isDarkMode } = useContext(DarkMode)

  return (
    <td
      className={`${
        isDarkMode
          ? border
            ? "border-white"
            : "border-none"
          : border
          ? "border-black"
          : "border-none"
      }
  ${
    isDarkMode
      ? `${index % 2 === 0 ? "bg-[#000]" : "bg-[#333]"} text-white`
      : `${index % 2 === 0 ? "bg-[#fff]" : "bg-[#ddd]"} text-black`
  } border-r-[1px]`}
    >
      {children}
    </td>
  )
}

export default TableDataBlock
