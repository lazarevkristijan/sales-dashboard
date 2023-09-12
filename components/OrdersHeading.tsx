import { useContext } from "react"
import { DarkMode } from "./Contexts"

const OrdersHeading = ({ title }: { title: string }) => {
  const { isDarkMode } = useContext(DarkMode)

  return (
    <th
      className={`${
        isDarkMode ? "dark-blue4 dark-text" : "light-blue2 light-text"
      } font-normal`}
    >
      {title}
    </th>
  )
}

export default OrdersHeading
