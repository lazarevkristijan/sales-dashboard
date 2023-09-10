import { ordersTableData, sectionStyles, orderPageNumbers } from "../constants"
import {
  ActiveButton,
  TableToggleMenu,
  ResultsPerPage,
  OrderPageNo,
  TableDataBlock,
} from "../components"
import { useState, useContext } from "react"
import { DarkMode, OrdersContext } from "../components/Contexts"

const Orders = () => {
  const [isTableMenuOpen, setIsTableMenuOpen] = useState(false)
  const [isPerPageOpen, setIsPerPageOpen] = useState(false)

  const { isDarkMode } = useContext(DarkMode)
  const {
    isOrderOn,
    toggleOrder,
    isNameOn,
    toggleName,
    isDateOn,
    toggleDate,
    isAmountOn,
    toggleAmount,
    isItemOn,
    toggleItem,
    isStatusOn,
    toggleStatus,
    perPage,
  } = useContext(OrdersContext)

  const toggleTableMenu = () => {
    if (isPerPageOpen) {
      setIsPerPageOpen((prev) => !prev)
    }
    setIsTableMenuOpen((prev) => !prev)
  }

  const togglePerPageMenu = () => {
    if (isTableMenuOpen) {
      setIsTableMenuOpen((prev) => !prev)
    }
    setIsPerPageOpen((prev) => !prev)
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
              {isOrderOn && (
                <th
                  className={`${
                    isDarkMode
                      ? "dark-blue4 text-white"
                      : "light-blue2 text-black"
                  } font-normal`}
                  onClick={toggleOrder}
                >
                  Order #
                </th>
              )}
              {isNameOn && (
                <th
                  className={`${
                    isDarkMode
                      ? "dark-blue4 text-white"
                      : "light-blue2 text-black"
                  } font-normal`}
                  onClick={toggleName}
                >
                  Name
                </th>
              )}
              {isDateOn && (
                <th
                  className={`${
                    isDarkMode
                      ? "dark-blue4 text-white"
                      : "light-blue2 text-black"
                  } font-normal`}
                  onClick={toggleDate}
                >
                  Date
                </th>
              )}
              {isAmountOn && (
                <th
                  className={`${
                    isDarkMode
                      ? "dark-blue4 text-white"
                      : "light-blue2 text-black"
                  } font-normal`}
                  onClick={toggleAmount}
                >
                  Amount
                </th>
              )}
              {isItemOn && (
                <th
                  className={`${
                    isDarkMode
                      ? "dark-blue4 text-white"
                      : "light-blue2 text-black"
                  } font-normal`}
                  onClick={toggleItem}
                >
                  Item
                </th>
              )}
              {isStatusOn && (
                <th
                  className={`${
                    isDarkMode
                      ? "dark-blue4 text-white"
                      : "light-blue2 text-black"
                  } font-normal`}
                  onClick={toggleStatus}
                >
                  Status
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {ordersTableData.slice(0, perPage).map((order, index) => (
              <tr
                key={index}
                className="h-[50px]"
              >
                {isOrderOn && (
                  <TableDataBlock index={index}>
                    #{order.orderNo}
                  </TableDataBlock>
                )}
                {isNameOn && (
                  <TableDataBlock index={index}>{order.name}</TableDataBlock>
                )}
                {isDateOn && (
                  <TableDataBlock index={index}>{order.date}</TableDataBlock>
                )}
                {isAmountOn && (
                  <TableDataBlock index={index}>€{order.amount}</TableDataBlock>
                )}
                {isItemOn && (
                  <TableDataBlock index={index}>{order.item}</TableDataBlock>
                )}
                {isStatusOn && (
                  <TableDataBlock
                    index={index}
                    border={false}
                  >
                    {order.status}
                  </TableDataBlock>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mx-[20px] flex justify-between flex-col xs:flex-row relative">
        <ActiveButton
          text="Table data"
          dropDown={true}
          onClick={toggleTableMenu}
        />

        {isTableMenuOpen && <TableToggleMenu />}

        <div className="hidden my-auto sm:flex text-center">
          {orderPageNumbers.map((number, index) => (
            <OrderPageNo
              key={index}
              page={number.page}
              active={number.active}
            />
          ))}
        </div>

        <ActiveButton
          text="Per page"
          dropDown={true}
          onClick={togglePerPageMenu}
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
