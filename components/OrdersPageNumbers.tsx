import { useContext } from "react"
import { OrderPageNo } from "."
import { OrdersTableContext } from "../src/App"

const OrdersPageNumbers = () => {
  const { pageNumberSetter } = useContext(OrdersTableContext)

  return (
    <>
      <OrderPageNo
        page={1}
        onClick={() => pageNumberSetter({ value: 1 })}
      />
      <OrderPageNo
        page={2}
        onClick={() => pageNumberSetter({ value: 2 })}
      />
      <OrderPageNo
        page={3}
        onClick={() => pageNumberSetter({ value: 3 })}
      />
      <OrderPageNo
        page={67}
        onClick={() => {}}
      />
    </>
  )
}

export default OrdersPageNumbers
