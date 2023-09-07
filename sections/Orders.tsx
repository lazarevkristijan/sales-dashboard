import {
  tableData,
  tableHeadings,
  sectionStyles,
  orderPageNumbers,
} from "../constants"
import {
  ActiveButton,
  ToggleTableData,
  ResultsPerPage,
  OrderPageNo,
  TableDataBlock,
} from "../components"
import { useState, useContext } from "react"
import { DarkMode } from "../components/Contexts"

const Orders = () => {
  const [isTableMenuOpen, setIsTableMenuOpen] = useState(false)
  const [isPerPageOpen, setIsPerPageOpen] = useState(false)

  const { isDarkMode } = useContext(DarkMode)

  const handleTableMenu = () => {
    if (isPerPageOpen) {
      setIsPerPageOpen(!isPerPageOpen)
    }
    setIsTableMenuOpen(!isTableMenuOpen)
  }

  const handlePerPageMenu = () => {
    if (isTableMenuOpen) {
      setIsTableMenuOpen(!isTableMenuOpen)
    }
    setIsPerPageOpen(!isPerPageOpen)
  }

  return (
    <div
      className={`${sectionStyles} ${
        isDarkMode ? "dark-blue3" : "light-blue1"
      }`}
    >
      <div className="mx-[20px] mb-[25px] overflow-x-scroll lg:overflow-hidden rou">
        <table className="w-[1000px] text-center">
          <thead>
            <tr className="h-[50px]">
              {tableHeadings.map((heading, index) => (
                <th
                  key={index}
                  className={`${
                    isDarkMode
                      ? "dark-blue4 text-white"
                      : "light-blue2 text-black"
                  } font-normal`}
                >
                  {heading.text}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.map((order, index) => (
              <tr
                key={index}
                className="h-[50px]"
              >
                <TableDataBlock index={index}>#{order.orderNo}</TableDataBlock>
                <TableDataBlock index={index}>{order.name}</TableDataBlock>
                <TableDataBlock index={index}>{order.date}</TableDataBlock>
                <TableDataBlock index={index}>{order.amount}</TableDataBlock>
                <TableDataBlock index={index}>{order.item}</TableDataBlock>
                <TableDataBlock
                  index={index}
                  border={false}
                >
                  {order.status}
                </TableDataBlock>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mx-[20px] flex justify-between flex-col xs:flex-row relative">
        <ActiveButton
          text="Table data"
          dropDown={true}
          onClick={handleTableMenu}
        />

        {isTableMenuOpen && <ToggleTableData />}

        <div className="hidden my-auto sm:flex text-center">
          {orderPageNumbers.map((number, index) => (
            <OrderPageNo
              key={index}
              page={number.page}
            />
          ))}
        </div>

        <ActiveButton
          text="Per page"
          dropDown={true}
          onClick={handlePerPageMenu}
        />

        {isPerPageOpen && <ResultsPerPage />}
      </div>
      <div className="sm:hidden text-center mt-[10px] flex justify-center">
        {orderPageNumbers.map((number, index) => (
          <OrderPageNo
            key={index}
            page={number.page}
          />
        ))}
      </div>
    </div>
  )
}

export default Orders
