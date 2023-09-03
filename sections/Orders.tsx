import {
  tableData,
  tableHeadings,
  sectionStyles,
  tableBorderStyle,
} from "../constants"
import { ActiveButton, ToggleTableData } from "../components"

const Orders = () => {
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
        />

        <ToggleTableData />

        <span className="hidden sm:inline">1 2 3 4 5 ... 13</span>

        <ActiveButton
          text="Per page"
          dropDown={true}
        />
      </div>
      <div className="sm:hidden text-center">1 2 ... 13</div>
    </div>
  )
}

export default Orders
