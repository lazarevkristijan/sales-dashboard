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
            <SalesContext.Provider
              value={{
                targetSales,
                setTarget,
              }}
            >
              <Top />
              <Sales />
            </SalesContext.Provider>
          </ActiveChartContext.Provider>
          <ScreenContext.Provider value={{ screenWidth }}>
            <Orders />
          </ScreenContext.Provider>
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
