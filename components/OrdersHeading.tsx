import { useContext } from "react"
import { DarkMode } from "./Contexts"

const OrdersHeading = ({ title }: { title: string }) => {
  const { isDarkMode } = useContext(DarkMode)

  return (
    <th
      className={`${
        isDarkMode ? "dark-blue4 text-white" : "light-blue2 text-black"
      } font-normal`}
    >
      {title}
    </th>
  )
}

export default OrdersHeading
