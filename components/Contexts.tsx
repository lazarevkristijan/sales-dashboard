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

export const TopOpenMenu = createContext({
  sidePanelMenu: false,
  toggleSidePanelMenu: () => {},

  notificationMenu: false,
  toggleNotificationMenu: () => {},

  profileMenu: false,
  toggleProfileMenu: () => {},
})

export const OrdersOpenMenu = createContext({
  tableMenu: false,
  toggleTableMenu: () => {},

  perPageMenu: false,
  togglePerPageMenu: () => {},
})

export const OrdersTableContext = createContext({
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
  perPageSetter: ({ value }: { value: number }) => {
    return value
  },
  pageNumber: 0,
  pageNumberSetter: ({ page }: { page: number }) => {
    return page
  },
})

export const ScreenContext = createContext({
  screenWidth: window.innerWidth,
})

const Contexts = ({ children }: { children: React.ReactNode }) => {
  const deliveredSales = 97
  const returnedSales = 2
  const inCart = 79
  const [targetSales, setTargetSales] = useState(120)
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const storedDarkMode = localStorage.getItem("isDarkMode")
    return storedDarkMode ? JSON.parse(storedDarkMode) : false
  })
  const [activeChart, setActiveChart] = useState(() => {
    const storedChart = localStorage.getItem("activeChart")
    return storedChart ? JSON.parse(storedChart) : "bar"
  })

  const toggleDarkMode = () => {
    setIsDarkMode((prev: boolean) => {
      const newDarkMode = !prev

      localStorage.setItem("isDarkMode", JSON.stringify(newDarkMode))
      return newDarkMode
    })
  }

  const setChart = ({ value }: { value: string }) => {
    const newChart = value
    setActiveChart(value)
    localStorage.setItem("activeChart", JSON.stringify(newChart))

    return value
  }

  const setTarget = ({ value }: { value: number }) => {
    setTargetSales(value)
    return value
  }

  const [isOrderOn, setIsOrderOn] = useState(true)
  const [isNameOn, setIsNameOn] = useState(true)
  const [isDateOn, setIsDateOn] = useState(true)
  const [isAmountOn, setIsAmountOn] = useState(true)
  const [isItemOn, setIsItemOn] = useState(true)
  const [isStatusOn, setIsStatusOn] = useState(true)
  const [perPage, setPerPage] = useState(10)
  const [pageNumber, setPageNumber] = useState(1)

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

  const perPageSetter = ({ value }: { value: number }) => {
    setPerPage(value)
    return value
  }

  const pageNumberSetter = ({ page }: { page: number }) => {
    setPageNumber(page)
    return page
  }
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleScreenSize = () => {
      setScreenWidth(window.innerWidth)
    }
    window.addEventListener("resize", handleScreenSize)

    return () => {
      window.removeEventListener("resize", handleScreenSize)
    }
  }, [screenWidth])

  const [notificationMenu, setNotificationMenu] = useState(false)
  const [profileMenu, setProfileMenu] = useState(false)
  const [sidePanelMenu, setSidePanelMenu] = useState(false)

  const toggleNotificationMenu = () => {
    if (profileMenu || sidePanelMenu) {
      setProfileMenu(false)
      setSidePanelMenu(false)
    }
    setNotificationMenu((prev) => !prev)
  }

  const toggleProfileMenu = () => {
    if (notificationMenu || sidePanelMenu) {
      setNotificationMenu(false)
      setSidePanelMenu(false)
    }
    setProfileMenu((prev) => !prev)
  }

  const toggleSidePanelMenu = () => {
    if (notificationMenu || profileMenu) {
      setNotificationMenu(false)
      setProfileMenu(false)
    }
    setSidePanelMenu((prev) => !prev)
  }

  const [tableMenu, setTableMenu] = useState(false)
  const [perPageMenu, setPerPageMenu] = useState(false)
  const toggleTableMenu = () => {
    if (perPageMenu) {
      setPerPageMenu(false)
    }
    setTableMenu((prev) => !prev)
  }

  const togglePerPageMenu = () => {
    if (tableMenu) {
      setTableMenu(false)
    }
    setPerPageMenu((prev) => !prev)
  }

  return (
    <SalesContext.Provider
      value={{
        deliveredSales,
        returnedSales,
        inCart,
        targetSales,
        setTarget,
      }}
    >
      <DarkMode.Provider value={{ isDarkMode, toggleDarkMode }}>
        <ActiveChart.Provider value={{ activeChart, setChart }}>
          <OrdersTableContext.Provider
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
              perPageSetter,
              pageNumber,
              pageNumberSetter,
            }}
          >
            <ScreenContext.Provider value={{ screenWidth }}>
              <TopOpenMenu.Provider
                value={{
                  sidePanelMenu,
                  toggleSidePanelMenu,
                  notificationMenu,
                  toggleNotificationMenu,
                  profileMenu,
                  toggleProfileMenu,
                }}
              >
                <OrdersOpenMenu.Provider
                  value={{
                    perPageMenu,
                    togglePerPageMenu,
                    tableMenu,
                    toggleTableMenu,
                  }}
                >
                  {children}
                </OrdersOpenMenu.Provider>
              </TopOpenMenu.Provider>
            </ScreenContext.Provider>
          </OrdersTableContext.Provider>
        </ActiveChart.Provider>
      </DarkMode.Provider>
    </SalesContext.Provider>
  )
}

export default Contexts
