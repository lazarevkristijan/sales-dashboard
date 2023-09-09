import { useContext } from "react"

import { DarkMode, OrdersContext } from "./Contexts"
const ToggleTableData = () => {
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
  } = useContext(OrdersContext)
  return (
    <div
      className={`w-[250px] sm:w-[300px] md:w-[400px] ${
        isDarkMode ? "dark-blue3 text-white" : "light-blue1 text-black"
      } absolute top-[50px] border-black border-[1px] rou`}
    >
      <div
        className={`m-[20px] ${
          isDarkMode ? "bg-black" : "bg-white"
        } rou py-[10px]`}
      >
        <p className="text-center">Show/hide elements</p>
        <div className="md:flex pt-[10px]">
          <div className="md:w-1/2">
            <div className="w-[150px] h-[40px] flex smText  mx-auto mb-[10px]">
              <div
                className={`w-[110px] h-full ${
                  isDarkMode ? "dark-blue3" : "light-blue1"
                } flex justify-center items-center rou-l`}
              >
                Order #
              </div>
              <div
                className={`w-[40px] h-[40px] ${
                  isDarkMode
                    ? isOrderOn
                      ? "dark-success"
                      : "dark-danger"
                    : isOrderOn
                    ? "light-success"
                    : "light-danger"
                }hover:cursor-pointer flex rou-r`}
                onClick={toggleOrder}
              >
                <img
                  src={`${isOrderOn ? "tick" : "cross"}.svg`}
                  alt={`${isOrderOn ? "tick" : "cross"} icon`}
                  className="w-[20px] h-[20px] m-auto"
                />
              </div>
            </div>

            <div className="w-[150px] h-[40px] flex smText  mx-auto mb-[10px]">
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
        ${!isDarkMode && !isNameOn && "light-danger"}

        
        ${
          isNameOn ? "light-success" : "light-danger"
        } hover:cursor-pointer flex rou-r`}
                onClick={toggleName}
              >
                <img
                  src={`${isNameOn ? "tick" : "cross"}.svg`}
                  alt={`${isNameOn ? "tick" : "cross"} icon`}
                  className="w-[20px] h-[20px] m-auto"
                />
              </div>
            </div>

            <div className="w-[150px] h-[40px] flex smText  mx-auto mb-[10px]">
              <div
                className={`w-[110px] h-full ${
                  isDarkMode ? "dark-blue3" : "light-blue1"
                } flex justify-center items-center rou-l`}
              >
                Date
              </div>
              <div
                className={`w-[40px] h-[40px] 
        ${isDarkMode && isDateOn && "dark-success"}
        ${isDarkMode && !isDateOn && "dark-danger"}
        ${!isDarkMode && isDateOn && "light-success"}
        ${!isDarkMode && !isDateOn && "light-danger"}

        
        ${
          isDateOn ? "light-success" : "light-danger"
        } hover:cursor-pointer flex rou-r`}
                onClick={toggleDate}
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
            <div className="w-[150px] h-[40px] flex smText  mx-auto mb-[10px]">
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
        ${!isDarkMode && !isAmountOn && "light-danger"}

        
        ${
          isAmountOn ? "light-success" : "light-danger"
        } hover:cursor-pointer flex rou-r`}
                onClick={toggleAmount}
              >
                <img
                  src={`${isAmountOn ? "tick" : "cross"}.svg`}
                  alt={`${isAmountOn ? "tick" : "cross"} icon`}
                  className="w-[20px] h-[20px] m-auto"
                />
              </div>
            </div>{" "}
            <div className="w-[150px] h-[40px] flex smText  mx-auto mb-[10px]">
              <div
                className={`w-[110px] h-full ${
                  isDarkMode ? "dark-blue3" : "light-blue1"
                } flex justify-center items-center rou-l`}
              >
                Item{" "}
              </div>
              <div
                className={`w-[40px] h-[40px] 
        ${isDarkMode && isItemOn && "dark-success"}
        ${isDarkMode && !isItemOn && "dark-danger"}
        ${!isDarkMode && isItemOn && "light-success"}
        ${!isDarkMode && !isItemOn && "light-danger"}

        
        ${
          isItemOn ? "light-success" : "light-danger"
        } hover:cursor-pointer flex rou-r`}
                onClick={toggleItem}
              >
                <img
                  src={`${isItemOn ? "tick" : "cross"}.svg`}
                  alt={`${isItemOn ? "tick" : "cross"} icon`}
                  className="w-[20px] h-[20px] m-auto"
                />
              </div>
            </div>{" "}
            <div className="w-[150px] h-[40px] flex smText  mx-auto mb-[10px]">
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
        ${!isDarkMode && !isStatusOn && "light-danger"}

        
        ${
          isStatusOn ? "light-success" : "light-danger"
        } hover:cursor-pointer flex rou-r`}
                onClick={toggleStatus}
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

export default ToggleTableData
