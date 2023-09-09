import { createContext, useEffect, useState } from "react"

export const ReturnedSales = createContext(2)
export const TargetSales = createContext({
  targetSales: 120,
  toggleTarget: ({ value }: { value: number }) => {
    return value
  },
})
export const DeliveredSales = createContext(97)
export const DarkMode = createContext({
  isDarkMode: false,
  toggleDarkMode: () => {},
})
export const InCart = createContext(79)
export const ActiveChart = createContext({
  activeChart: "bar",
  toggleChart: ({ value }: { value: string }) => {
    return value
  },
})

export const OrdersContext = createContext({
  isOrderOn: true,
  toggleOrder: () => {},
  isNameOn: true,
  toggleName: () => {},
  isDateOn: true,
  toggleDate: () => {},
  isAmountOn: true,
  toggleAmount: () => {},
  isItemOn: true,
  toggleItem: () => {},
  isStatusOn: true,
  toggleStatus: () => {},
  perPage: 10,
  togglePerPage: ({ value }: { value: number }) => {
    return value
  },
})

export const ScreenContext = createContext({
  screenWidth: window.innerWidth,
  handleScreenSize: () => {},
})

const Contexts = ({ children }: { children: React.ReactNode }) => {
  const [deliveredSales, setDeliveredSales] = useState(97)
  const [returnedSales, setReturnedSales] = useState(2)
  const [inCart, setInCart] = useState(79)
  const [targetSales, setTargetSales] = useState(120)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [activeChart, setActiveChart] = useState("bar")

  function toggleDarkMode() {
    setIsDarkMode((prev) => !prev)
  }

  const toggleChart = ({ value }: { value: string }) => {
    setActiveChart(value)
    return value
  }

  const toggleTarget = ({ value }: { value: number }) => {
    setTargetSales(value)
    return value
  }

  function removeSetErrors() {
    setReturnedSales
    setTargetSales
    setDeliveredSales
    setIsDarkMode
    setInCart
    setActiveChart
  }
  removeSetErrors

  const [isOrderOn, setIsOrderOn] = useState(true)
  const [isNameOn, setIsNameOn] = useState(true)
  const [isDateOn, setIsDateOn] = useState(true)
  const [isAmountOn, setIsAmountOn] = useState(true)
  const [isItemOn, setIsItemOn] = useState(true)
  const [isStatusOn, setIsStatusOn] = useState(true)
  const [perPage, setPerPage] = useState(10)

  const toggleOrder = () => {
    setIsOrderOn((prev) => !prev)
  }

  const toggleName = () => {
    setIsNameOn((prev) => !prev)
  }

  const toggleDate = () => {
    setIsDateOn((prev) => !prev)
  }

  const toggleAmount = () => {
    setIsAmountOn((prev) => !prev)
  }

  const toggleItem = () => {
    setIsItemOn((prev) => !prev)
  }

  const toggleStatus = () => {
    setIsStatusOn((prev) => !prev)
  }

  const togglePerPage = ({ value }: { value: number }) => {
    setPerPage(value)
    return value
  }

  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  const handleScreenSize = () => {
    setScreenWidth(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener("resize", handleScreenSize)

    return () => {
      window.removeEventListener("resize", handleScreenSize)
    }
  }, [])

  return (
    <ReturnedSales.Provider value={returnedSales}>
      <TargetSales.Provider value={{ targetSales, toggleTarget }}>
        <DeliveredSales.Provider value={deliveredSales}>
          <DarkMode.Provider value={{ isDarkMode, toggleDarkMode }}>
            <InCart.Provider value={inCart}>
              <ActiveChart.Provider value={{ activeChart, toggleChart }}>
                <OrdersContext.Provider
                  value={{
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
                    perPage,
                    togglePerPage,
                  }}
                >
                  <ScreenContext.Provider
                    value={{ screenWidth, handleScreenSize }}
                  >
                    {children}
                  </ScreenContext.Provider>
                </OrdersContext.Provider>
              </ActiveChart.Provider>
            </InCart.Provider>
          </DarkMode.Provider>
        </DeliveredSales.Provider>
      </TargetSales.Provider>
    </ReturnedSales.Provider>
  )
}

export default Contexts
