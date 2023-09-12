import { useContext, useEffect, useRef } from "react"
import { DarkMode, OrdersTableContext, OrdersOpenMenu } from "./Contexts"
import { TableToggleOption } from "."

const TableToggleMenu = () => {
  // Contexts
  const { isDarkMode } = useContext(DarkMode)
  const { tableMenu, toggleTableMenu } = useContext(OrdersOpenMenu)
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
  } = useContext(OrdersTableContext)

  // Functions
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const isMenuIconClicked =
        e.target instanceof HTMLElement &&
        e.target.classList.contains("menuButtonTable")

      if (
        tableMenuRef.current &&
        !tableMenuRef.current.contains(e.target as Node) &&
        !isMenuIconClicked
      ) {
        toggleTableMenu()
      }
    }

    if (tableMenu) {
      document.addEventListener("mousedown", handleClickOutside)
    } else {
      document.removeEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [tableMenu, toggleTableMenu])

  // Refs
  const tableMenuRef = useRef<HTMLDivElement | null>(null)

  return (
    <div
      className={`${
        isDarkMode ? "dark-blue3 text-white" : "light-blue1 text-black"
      } w-[250px] sm:w-[300px] md:w-[400px] absolute top-[50px] border-black border-[1px] rou`}
      ref={tableMenuRef}
    >
      <div
        className={`${
          isDarkMode ? "bg-black" : "bg-white"
        } m-[20px] py-[10px] rou`}
      >
        <p className="text-center">Show/hide elements</p>
        <div className="pt-[10px] md:flex selection:bg-transparent">
          <div className="md:w-1/2">
            <TableToggleOption
              title="Order #"
              toggleFunction={toggleOrder}
              state={isOrderOn}
            />
            <TableToggleOption
              title="Name"
              toggleFunction={toggleName}
              state={isNameOn}
            />
            <TableToggleOption
              title="Date"
              toggleFunction={toggleDate}
              state={isDateOn}
            />
          </div>

          <div className="md:w-1/2">
            <TableToggleOption
              title="Amount"
              toggleFunction={toggleAmount}
              state={isAmountOn}
            />
            <TableToggleOption
              title="Item"
              toggleFunction={toggleItem}
              state={isItemOn}
            />
            <TableToggleOption
              title="Status"
              toggleFunction={toggleStatus}
              state={isStatusOn}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TableToggleMenu
