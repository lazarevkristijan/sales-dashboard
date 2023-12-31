import { useContext } from "react"
import { DarkModeContext } from "../src/App"

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
  const { isDarkMode } = useContext(DarkModeContext)

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
      ? `${index % 2 === 0 ? "bg-[#000]" : "bg-[#333]"} dark-text`
      : `${index % 2 === 0 ? "bg-[#fff]" : "bg-[#ddd]"} light-text`
  } border-r-[1px]`}
    >
      {children}
    </td>
  )
}

export default TableDataBlock
