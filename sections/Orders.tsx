import { useContext } from "react"
import {
  DarkMode,
  OrdersTableContext,
  OrdersOpenMenu,
  ScreenContext,
} from "../components/Contexts"
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

const Orders = () => {
  // Contexts
  const { isDarkMode } = useContext(DarkMode)
  const {
    isOrderOn,
    isNameOn,
    isDateOn,
    isAmountOn,
    isItemOn,
    isStatusOn,
    perPage,
    pageNumber,
  } = useContext(OrdersTableContext)
  const { screenWidth } = useContext(ScreenContext)
  const { tableMenu, toggleTableMenu, perPageMenu, togglePerPageMenu } =
    useContext(OrdersOpenMenu)

  // Constants
  const turnedOnOptions = [
    isOrderOn,
    isNameOn,
    isDateOn,
    isAmountOn,
    isItemOn,
    isStatusOn,
  ].filter((column) => column).length

  return (
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
                    <TableDataBlock index={index}>{order.name}</TableDataBlock>
                  )}
                  {isDateOn && (
                    <TableDataBlock index={index}>{order.date}</TableDataBlock>
                  )}
                  {isAmountOn && (
                    <TableDataBlock index={index}>
                      €{order.amount}
                    </TableDataBlock>
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
      <div className="mx-[20px] relative flex justify-between flex-col xs:flex-row">
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
      </div>
      {screenWidth < 640 && (
        <div className="mt-[10px] text-center flex justify-center">
          <OrdersPageNumbers />
        </div>
      )}
    </div>
  )
}

export default Orders
