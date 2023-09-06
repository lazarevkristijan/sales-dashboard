import { tableBorderStyle } from "../constants"
import { useContext } from "react"
import { DarkMode } from "./ContDarkMode"

const TableDataBlock = ({
  index,
  children,
}: {
  index: number
  children: React.ReactNode
}) => {
  const isDarkMode = useContext(DarkMode)

  return (
    <td
      className={`${tableBorderStyle} ${
        isDarkMode
          ? `${index % 2 === 0 ? "bg-[#000]" : "bg-[#444]"}`
          : `${index % 2 === 0 ? "bg-[#fff]" : "bg-[#eee]"}`
      }  ${isDarkMode ? "text-white" : "text-black"}`}
    >
      {children}
    </td>
  )
}

export default TableDataBlock
