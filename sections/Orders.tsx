import { tableData, tableHeadings } from "../constants"

const Orders = () => {
  return (
    <div className="mx-[10px] py-[30px] rou light-blue1 max-w-[1040px] ">
      <div className="mx-[20px]">
        <table className="w-[1000px]">
          <thead className="light-blue2">
            {tableHeadings.map((heading, index) => (
              <th
                key={index}
                className="border-[1px] border-black"
              >
                {heading.text}
              </th>
            ))}
          </thead>
          <tbody>
            {tableData.map((order, index) => (
              <tr key={index}>
                <td>#{order.orderNo}</td>
                <td>{order.name}</td>
                <td>{order.date}</td>
                <td>{order.amount}</td>
                <td>{order.item}</td>
                <td>{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Orders
