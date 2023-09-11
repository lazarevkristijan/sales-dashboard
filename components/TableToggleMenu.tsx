import { useContext, useEffect, useRef } from "react"

import { DarkMode, OrdersTableContext, OrdersOpenMenu } from "./Contexts"

const TableToggleMenu = () => {
  const { isDarkMode } = useContext(DarkMode)
  const { tableMenu, toggleTableMenu } = useContext(OrdersOpenMenu)
  const tableMenuRef = useRef<HTMLDivElement | null>(null)

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
  return (
    <div
      className={`w-[250px] sm:w-[300px] md:w-[400px] ${
        isDarkMode ? "dark-blue3 text-white" : "light-blue1 text-black"
      } absolute top-[50px] border-black border-[1px] rou`}
      ref={tableMenuRef}
    >
      <div
        className={`m-[20px] ${
          isDarkMode ? "bg-black" : "bg-white"
        } rou py-[10px]`}
      >
        <p className="text-center">Show/hide elements</p>
        <div className="md:flex pt-[10px] selection:bg-transparent">
          <div className="md:w-1/2">
            <div
              className="w-[150px] h-[40px] flex smText  mx-auto mb-[10px] hover:cursor-pointer"
              onClick={toggleOrder}
            >
              <div
                className={`w-[110px] h-full ${
                  isDarkMode ? "dark-blue3" : "light-blue1"
                } flex justify-center items-center rou-l`}
              >
                Order #
              </div>
              <div
                className={`w-[40px] h-[40px] 
        ${isDarkMode && isOrderOn && "dark-success"}
        ${isDarkMode && !isOrderOn && "dark-danger"}
        ${!isDarkMode && isOrderOn && "light-success"}
        ${!isDarkMode && !isOrderOn && "light-danger"}
        
        flex rou-r`}
              >
                <img
                  src={`${isOrderOn ? "tick" : "cross"}.svg`}
                  alt={`${isOrderOn ? "tick" : "cross"} icon`}
                  className="w-[20px] h-[20px] m-auto"
                />
              </div>
            </div>

            <div
              className="w-[150px] h-[40px] flex smText  mx-auto mb-[10px] hover:cursor-pointer"
              onClick={toggleName}
            >
              <div
                className={`w-[110px] h-full ${
                  isDarkMode ? "dark-blue3" : "light-blue1"
                } flex justify-center items-center rou-l`}
              >
                Name
              </div>
              <div
                className={`w-[40px] h-[40px] 
        ${isDarkMode && isNameOn && "dark-success"}
        ${isDarkMode && !isNameOn && "dark-danger"}
        ${!isDarkMode && isNameOn && "light-success"}
        ${!isDarkMode && !isNameOn && "light-danger"} flex rou-r`}
              >
                <img
                  src={`${isNameOn ? "tick" : "cross"}.svg`}
                  alt={`${isNameOn ? "tick" : "cross"} icon`}
                  className="w-[20px] h-[20px] m-auto"
                />
              </div>
            </div>

            <div
              className="w-[150px] h-[40px] flex smText  mx-auto mb-[10px] hover:cursor-pointer"
              onClick={toggleDate}
            >
              <div
                className={`w-[110px] h-full ${
                  isDarkMode ? "dark-blue3" : "light-blue1"
                } flex justify-center items-center rou-l hover:cursor-pointer`}
              >
                Date
              </div>
              <div
                className={`w-[40px] h-[40px] 
        ${isDarkMode && isDateOn && "dark-success"}
        ${isDarkMode && !isDateOn && "dark-danger"}
        ${!isDarkMode && isDateOn && "light-success"}
        ${!isDarkMode && !isDateOn && "light-danger"} flex rou-r`}
              >
                <img
                  src={`${isDateOn ? "tick" : "cross"}.svg`}
                  alt={`${isDateOn ? "tick" : "cross"} icon`}
                  className="w-[20px] h-[20px] m-auto"
                />
              </div>
            </div>
          </div>

          <div className="md:w-1/2">
            <div
              className="w-[150px] h-[40px] flex smText  mx-auto mb-[10px] hover:cursor-pointer"
              onClick={toggleAmount}
            >
              <div
                className={`w-[110px] h-full ${
                  isDarkMode ? "dark-blue3" : "light-blue1"
                } flex justify-center items-center rou-l`}
              >
                Amount
              </div>
              <div
                className={`w-[40px] h-[40px] 
        ${isDarkMode && isAmountOn && "dark-success"}
        ${isDarkMode && !isAmountOn && "dark-danger"}
        ${!isDarkMode && isAmountOn && "light-success"}
        ${!isDarkMode && !isAmountOn && "light-danger"} flex rou-r`}
              >
                <img
                  src={`${isAmountOn ? "tick" : "cross"}.svg`}
                  alt={`${isAmountOn ? "tick" : "cross"} icon`}
                  className="w-[20px] h-[20px] m-auto"
                />
              </div>
            </div>{" "}
            <div
              className="w-[150px] h-[40px] flex smText  mx-auto mb-[10px] hover:cursor-pointer"
              onClick={toggleItem}
            >
              <div
                className={`w-[110px] h-full ${
                  isDarkMode ? "dark-blue3" : "light-blue1"
                } flex justify-center items-center rou-l hover:cursor-pointer`}
              >
                Item{" "}
              </div>
              <div
                className={`w-[40px] h-[40px] 
        ${isDarkMode && isItemOn && "dark-success"}
        ${isDarkMode && !isItemOn && "dark-danger"}
        ${!isDarkMode && isItemOn && "light-success"}
        ${!isDarkMode && !isItemOn && "light-danger"} flex rou-r`}
              >
                <img
                  src={`${isItemOn ? "tick" : "cross"}.svg`}
                  alt={`${isItemOn ? "tick" : "cross"} icon`}
                  className="w-[20px] h-[20px] m-auto"
                />
              </div>
            </div>{" "}
            <div
              className="w-[150px] h-[40px] flex smText  mx-auto mb-[10px] hover:cursor-pointer"
              onClick={toggleStatus}
            >
              <div
                className={`w-[110px] h-full ${
                  isDarkMode ? "dark-blue3" : "light-blue1"
                } flex justify-center items-center rou-l`}
              >
                Status
              </div>
              <div
                className={`w-[40px] h-[40px] 
        ${isDarkMode && isStatusOn && "dark-success"}
        ${isDarkMode && !isStatusOn && "dark-danger"}
        ${!isDarkMode && isStatusOn && "light-success"}
        ${!isDarkMode && !isStatusOn && "light-danger"} flex rou-r`}
              >
                <img
                  src={`${isStatusOn ? "tick" : "cross"}.svg`}
                  alt={`${isStatusOn ? "tick" : "cross"} icon`}
                  className="w-[20px] h-[20px] m-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TableToggleMenu
