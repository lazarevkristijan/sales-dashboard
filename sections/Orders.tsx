import { useContext, createContext, useState } from "react"
import { DarkModeContext, ScreenContext } from "../src/App"
import {
  ActiveButton,
  TableToggleMenu,
  ResultsPerPage,
  TableDataBlock,
  OrdersHeading,
  OrdersPageNumbers,
} from "../components"
import { sectionStyles } from "../constants"
import { ordersTableData } from "../constants/Orders"
import React from "react"

export const OrdersOpenMenuContext = createContext({
  tableMenu: false,
  toggleTableMenu: () => {},

  perPageMenu: false,
  togglePerPageMenu: () => {},
})

export const OrdersTableContext = createContext({
  isOrderOn: true,
  toggleOrder: () => {},
  isNameOn: true,
  toggleName: () => {},
  isDateOn: true,
  toggleDate: () => {},
  isAmountOn: true,
  toggleAmount: () => {},
  isItemOn: true,
  toggleItem: () => {},
  isStatusOn: true,
  toggleStatus: () => {},
  perPage: 10,
  perPageSetter: ({ value }: { value: number }) => {
    return value
  },
  pageNumber: 0,
  pageNumberSetter: ({ value }: { value: number }) => {
    return value
  },
})

const Orders = () => {
  // Contexts
  const { isDarkMode } = useContext(DarkModeContext)
  const { screenWidth } = useContext(ScreenContext)

  // Orders Open Menu data
  const [tableMenu, setTableMenu] = useState(false)
  const [perPageMenu, setPerPageMenu] = useState(false)
  const toggleTableMenu = () => {
    if (perPageMenu) {
      setPerPageMenu(false)
    }
    setTableMenu((prev) => !prev)
  }

  const togglePerPageMenu = () => {
    if (tableMenu) {
      setTableMenu(false)
    }
    setPerPageMenu((prev) => !prev)
  }

  // Orders Table Context data
  const [isOrderOn, setIsOrderOn] = useState(true)
  const [isNameOn, setIsNameOn] = useState(true)
  const [isDateOn, setIsDateOn] = useState(true)
  const [isAmountOn, setIsAmountOn] = useState(true)
  const [isItemOn, setIsItemOn] = useState(true)
  const [isStatusOn, setIsStatusOn] = useState(true)
  const [perPage, setPerPage] = useState(10)
  const [pageNumber, setPageNumber] = useState(1)

  const toggleOrder = () => {
    setIsOrderOn((prev) => !prev)
  }

  const toggleName = () => {
    setIsNameOn((prev) => !prev)
  }

  const toggleDate = () => {
    setIsDateOn((prev) => !prev)
  }

  const toggleAmount = () => {
    setIsAmountOn((prev) => !prev)
  }

  const toggleItem = () => {
    setIsItemOn((prev) => !prev)
  }

  const toggleStatus = () => {
    setIsStatusOn((prev) => !prev)
  }

  const perPageSetter = ({ value }: { value: number }) => {
    setPerPage(value)
    return value
  }

  const pageNumberSetter = ({ value }: { value: number }) => {
    setPageNumber(value)
    return value
  }

  const turnedOnOptions = [
    isOrderOn,
    isNameOn,
    isDateOn,
    isAmountOn,
    isItemOn,
    isStatusOn,
  ].filter((column) => column).length

  return (
    <OrdersTableContext.Provider
      value={{
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
        perPageSetter,
        pageNumber,
        pageNumberSetter,
      }}
    >
      <div
        className={`${sectionStyles} ${
          isDarkMode ? "dark-blue3" : "light-blue1"
        }`}
      >
        <div className="mx-[20px] mb-[25px] rou overflow-x-scroll lg:overflow-hidden">
          <table
            className={`
          ${
            turnedOnOptions <= 3 && screenWidth <= 500
              ? "w-[500px]"
              : "w-[1000px]"
          }
          } text-center`}
          >
            <thead>
              <tr className="h-[50px]">
                {isOrderOn && <OrdersHeading title="Order #" />}
                {isNameOn && <OrdersHeading title="Name" />}
                {isDateOn && <OrdersHeading title="Date" />}
                {isAmountOn && <OrdersHeading title="Amount" />}
                {isItemOn && <OrdersHeading title="Item" />}
                {isStatusOn && <OrdersHeading title="Status" />}
              </tr>
            </thead>
            <tbody>
              {/* Calculations depending on results per page */}
              {ordersTableData
                .slice(
                  pageNumber === 1 ? 0 : perPage * (pageNumber - 1),
                  pageNumber === 1 ? perPage : perPage * pageNumber
                )
                .map((order, index) => (
                  <tr
                    key={index}
                    className="h-[50px]"
                  >
                    {/* Render table data if option is turned on */}
                    {isOrderOn && (
                      <TableDataBlock index={index}>
                        #{order.orderNo}
                      </TableDataBlock>
                    )}
                    {isNameOn && (
                      <TableDataBlock index={index}>
                        {order.name}
                      </TableDataBlock>
                    )}
                    {isDateOn && (
                      <TableDataBlock index={index}>
                        {order.date}
                      </TableDataBlock>
                    )}
                    {isAmountOn && (
                      <TableDataBlock index={index}>
                        €{order.amount}
                      </TableDataBlock>
                    )}
                    {isItemOn && (
                      <TableDataBlock index={index}>
                        {order.item}
                      </TableDataBlock>
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
        <div className="mx-[20px] relative flex justify-between flex-col xs:flex-row">
          <OrdersOpenMenuContext.Provider
            value={{
              perPageMenu,
              togglePerPageMenu,
              tableMenu,
              toggleTableMenu,
            }}
          >
            <ActiveButton
              text="Table data"
              dropDown={true}
              onClick={toggleTableMenu}
              extraStyles="menuButtonTable"
            />
            {tableMenu && <TableToggleMenu />}

            {screenWidth >= 640 && (
              <div className="my-auto text-center flex">
                <OrdersPageNumbers />
              </div>
            )}
            <ActiveButton
              text="Per page"
              dropDown={true}
              onClick={togglePerPageMenu}
              extraStyles="menuButtonPerPage"
            />

            {perPageMenu && <ResultsPerPage />}
          </OrdersOpenMenuContext.Provider>
        </div>
        {screenWidth < 640 && (
          <div className="mt-[10px] text-center flex justify-center">
            <OrdersPageNumbers />
          </div>
        )}
      </div>
    </OrdersTableContext.Provider>
  )
}

const MemoizedOrders = React.memo(Orders)
export default MemoizedOrders
