import { sectionStyles } from "../constants"
import { ordersTableData } from "../constants/Orders"

import {
  ActiveButton,
  TableToggleMenu,
  ResultsPerPage,
  OrderPageNo,
  TableDataBlock,
} from "../components"
import { useContext } from "react"
import {
  DarkMode,
  OrdersTableContext,
  OrdersOpenMenu,
  ScreenContext,
} from "../components/Contexts"

const Orders = () => {
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
    pageNumber,
    pageNumberSetter,
  } = useContext(OrdersTableContext)
  const { tableMenu, toggleTableMenu, perPageMenu, togglePerPageMenu } =
    useContext(OrdersOpenMenu)
  const { screenWidth } = useContext(ScreenContext)

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
      <div className="mx-[20px] flex justify-between flex-col xs:flex-row relative">
        <ActiveButton
          text="Table data"
          dropDown={true}
          onClick={toggleTableMenu}
          extraStyles="menuButtonTable"
        />
        {tableMenu && <TableToggleMenu />}

        {screenWidth >= 640 && (
          <div className="hidden my-auto sm:flex text-center">
            <OrderPageNo
              page={1}
              onClick={() => pageNumberSetter({ page: 1 })}
            />
            <OrderPageNo
              page={2}
              onClick={() => pageNumberSetter({ page: 2 })}
            />
            <OrderPageNo
              page={3}
              onClick={() => pageNumberSetter({ page: 3 })}
            />
            <OrderPageNo
              page={67}
              onClick={() => {}}
            />
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
        <div className="sm:hidden text-center mt-[10px] flex justify-center">
          <OrderPageNo
            page={1}
            onClick={() => pageNumberSetter({ page: 1 })}
          />
          <OrderPageNo
            page={2}
            onClick={() => pageNumberSetter({ page: 2 })}
          />
          <OrderPageNo
            page={3}
            onClick={() => pageNumberSetter({ page: 3 })}
          />
          <OrderPageNo
            page={67}
            onClick={() => {}}
          />
        </div>
      )}
    </div>
  )
}

export default Orders
