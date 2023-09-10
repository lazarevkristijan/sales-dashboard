import { createContext, useEffect, useState } from "react"

export const SalesContext = createContext({
  returnedSales: 2,
  targetSales: 120,
  setTarget: ({ value }: { value: number }) => {
    return value
  },
  deliveredSales: 97,
  inCart: 79,
})
export const DarkMode = createContext({
  isDarkMode: false,
  toggleDarkMode: () => {},
})
export const ActiveChart = createContext({
  activeChart: "bar",
  setChart: ({ value }: { value: string }) => {
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
  setPerpage: ({ value }: { value: number }) => {
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
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const storedDarkMode = localStorage.getItem("isDarkMode")
    return storedDarkMode ? JSON.parse(storedDarkMode) : false
  })
  const [activeChart, setActiveChart] = useState("bar")

  function toggleDarkMode() {
    setIsDarkMode((prev: boolean) => {
      const newDarkMode = !prev

      localStorage.setItem("isDarkMode", JSON.stringify(newDarkMode))
      return newDarkMode
    })
  }

  const setChart = ({ value }: { value: string }) => {
    setActiveChart(value)
    return value
  }

  const setTarget = ({ value }: { value: number }) => {
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

  const setPerpage = ({ value }: { value: number }) => {
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
    <SalesContext.Provider
      value={{
        returnedSales,
        targetSales,
        setTarget,
        deliveredSales,
        inCart,
      }}
    >
      <DarkMode.Provider value={{ isDarkMode, toggleDarkMode }}>
        <ActiveChart.Provider value={{ activeChart, setChart }}>
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
              setPerpage,
            }}
          >
            <ScreenContext.Provider value={{ screenWidth, handleScreenSize }}>
              {children}
            </ScreenContext.Provider>
          </OrdersContext.Provider>
        </ActiveChart.Provider>
      </DarkMode.Provider>
    </SalesContext.Provider>
  )
}

export default Contexts
