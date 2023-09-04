import {
  tableData,
  tableHeadings,
  sectionStyles,
  tableBorderStyle,
  orderPageNumbers,
} from "../constants"
import {
  ActiveButton,
  ToggleTableData,
  ResultsPerPage,
  OrderPageNo,
} from "../components"
import { useState } from "react"

const Orders = () => {
  const [isTableMenuOpen, setIsTableMenuOpen] = useState(false)
  const [isPerPageOpen, setIsPerPageOpen] = useState(false)

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
    <div className={`${sectionStyles} light-blue1`}>
      <div className="mx-[20px] mb-[25px] overflow-x-scroll rou text-center">
        <table className="w-[1000px]">
          <thead>
            <tr className="h-[50px]">
              {tableHeadings.map((heading, index) => (
                <th
                  key={index}
                  className="light-blue2 font-normal"
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
                <td className={`${tableBorderStyle}`}>#{order.orderNo}</td>
                <td className={`${tableBorderStyle}`}>{order.name}</td>
                <td className={`${tableBorderStyle}`}>{order.date}</td>
                <td className={`${tableBorderStyle}`}>{order.amount}</td>
                <td className={`${tableBorderStyle}`}>{order.item}</td>
                <td>{order.status}</td>
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

        <span className="hidden sm:inline my-auto">
          {orderPageNumbers.map((number, index) => (
            <OrderPageNo
              key={index}
              page={number.page}
            />
          ))}
        </span>

        <ActiveButton
          text="Per page"
          dropDown={true}
          onClick={handlePerPageMenu}
        />

        {isPerPageOpen && <ResultsPerPage />}
      </div>
      <div className="sm:hidden text-center mt-[10px]">
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
