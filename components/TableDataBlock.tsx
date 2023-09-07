import { tableBorderStyle } from "../constants"
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
  const isDarkMode = useContext(DarkMode)

  return (
    <td
      className={`${tableBorderStyle} ${!border && "border-none"}  ${
        isDarkMode
          ? `${index % 2 === 0 ? "bg-[#000]" : "bg-[#444]"}`
          : `${index % 2 === 0 ? "bg-[#fff]" : "bg-[#eee]"}`
      }  ${isDarkMode ? "text-white" : "text-black"} ${index - index === 0}`}
    >
      {children}
    </td>
  )
}

export default TableDataBlock
