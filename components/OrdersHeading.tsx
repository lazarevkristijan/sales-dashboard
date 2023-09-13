import { useContext } from "react"
import { DarkModeContext } from "../src/App"

const OrdersHeading = ({ title }: { title: string }) => {
  const { isDarkMode } = useContext(DarkModeContext)

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
