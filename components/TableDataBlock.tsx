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
  const { isDarkMode } = useContext(DarkMode)

  return (
    <td
      className={`border-r-[1px]
      ${isDarkMode && border && "border-white"}
      ${!isDarkMode && border && "border-black"}
      ${isDarkMode && !border && "border-none"}
      ${!isDarkMode && !border && "border-none"}

      
  ${
    isDarkMode
      ? `${index % 2 === 0 ? "bg-[#000]" : "bg-[#444]"}`
      : `${index % 2 === 0 ? "bg-[#fff]" : "bg-[#ddd]"}`
  } 
   ${isDarkMode ? "text-white" : "text-black"}`}
    >
      {children}
    </td>
  )
}

export default TableDataBlock
