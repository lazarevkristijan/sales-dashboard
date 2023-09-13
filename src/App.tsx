import { createContext, useEffect, useState } from "react"
import {
  Top,
  Sales,
  Orders,
  Products,
  Users,
  Countries,
  Social,
} from "../sections"
import "./index.css"

export const DarkModeContext = createContext({
  isDarkMode: false,
  toggleDarkMode: () => {},
})

export const SalesContext = createContext({
  targetSales: 120,
  setTarget: ({ value }: { value: number }) => {
    return value
  },
})

export const ActiveChartContext = createContext({
  activeChart: "bar",
  setChart: ({ value }: { value: string }) => {
    return value
  },
})

export const TopOpenMenuContext = createContext({
  sidePanelMenu: false,
  toggleSidePanelMenu: () => {},

  notificationMenu: false,
  toggleNotificationMenu: () => {},

  profileMenu: false,
  toggleProfileMenu: () => {},
})

export const OrdersOpenMenuContext = createContext({
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
  pageNumberSetter: ({ value }: { value: number }) => {
    return value
  },
})

export const ScreenContext = createContext({
  screenWidth: window.innerWidth,
})

const App = () => {
  // Dark Mode data
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const storedDarkMode = localStorage.getItem("isDarkMode")
    return storedDarkMode ? JSON.parse(storedDarkMode) : false
  })

  const toggleDarkMode = () => {
    setIsDarkMode((prev: boolean) => {
      const newDarkMode = !prev

      localStorage.setItem("isDarkMode", JSON.stringify(newDarkMode))
      return newDarkMode
    })
  }

  // Sales Context data
  const [targetSales, setTargetSales] = useState(120)
  const [activeChart, setActiveChart] = useState(() => {
    const storedChart = localStorage.getItem("activeChart")
    return storedChart ? JSON.parse(storedChart) : "bar"
  })
  const setTarget = ({ value }: { value: number }) => {
    setTargetSales(value)
    return value
  }

  // Active Chart data
  const setChart = ({ value }: { value: string }) => {
    const newChart = value
    setActiveChart(value)
    localStorage.setItem("activeChart", JSON.stringify(newChart))

    return value
  }

  // Top Open Menu data
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

  // Orders Open Menu data
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
  // Orders Table Context data
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

  const pageNumberSetter = ({ value }: { value: number }) => {
    setPageNumber(value)
    return value
  }

  // Screen Context data
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

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      <div
        className={` ${
          isDarkMode ? "dark-blue4 dark-text" : "light-blue2 light-text"
        } min-w-[300px] text mont`}
      >
        <div className="pt-[30px]">
          <ActiveChartContext.Provider value={{ activeChart, setChart }}>
            <TopOpenMenuContext.Provider
              value={{
                sidePanelMenu,
                toggleSidePanelMenu,
                notificationMenu,
                toggleNotificationMenu,
                profileMenu,
                toggleProfileMenu,
              }}
            >
              <Top />
            </TopOpenMenuContext.Provider>
            <SalesContext.Provider
              value={{
                targetSales,
                setTarget,
              }}
            >
              <Sales />
            </SalesContext.Provider>
          </ActiveChartContext.Provider>
          <OrdersOpenMenuContext.Provider
            value={{
              perPageMenu,
              togglePerPageMenu,
              tableMenu,
              toggleTableMenu,
            }}
          >
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
                <Orders />
              </ScreenContext.Provider>
            </OrdersTableContext.Provider>
          </OrdersOpenMenuContext.Provider>
          <div className="max-w-[1040px] mx-[10px] flex flex-wrap lg:mx-auto justify-between xs:justify-center lg:justify-between">
            <ScreenContext.Provider value={{ screenWidth }}>
              <Products />
            </ScreenContext.Provider>
            <Users />
            <Countries />
            <Social />
          </div>
        </div>
      </div>
    </DarkModeContext.Provider>
  )
}

export default App
