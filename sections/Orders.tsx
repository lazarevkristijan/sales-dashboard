import { tableData, tableHeadings } from "../constants"
import { ActiveButton } from "../components"

const Orders = () => {
  return (
    <div className="mx-[10px] lg:mx-auto py-[30px] rou light-blue1 max-w-[1040px] ">
      <div className="mx-[20px] mb-[25px] overflow-x-scroll rou">
        <table className="w-[1000px]">
          <thead>
            <tr>
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
          <tbody className="text-center">
            {tableData.map((order, index) => (
              <tr
                key={index}
                className="h-[50px]"
              >
                <td className="border-r-[1px] border-black">
                  #{order.orderNo}
                </td>
                <td className="border-r-[1px] border-black">{order.name}</td>
                <td className="border-r-[1px] border-black">{order.date}</td>
                <td className="border-r-[1px] border-black">{order.amount}</td>
                <td className="border-r-[1px] border-black">{order.item}</td>
                <td>{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mx-[20px] flex justify-between flex-col xs:flex-row ">
        <ActiveButton
          text="Table data"
          dropDown={true}
        />

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
