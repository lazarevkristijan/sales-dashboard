import { createContext, useState } from "react"

export const ReturnedSales = createContext("2")
export const TargetSales = createContext("120")
export const DeliveredSales = createContext("102")
export const DarkMode = createContext({
  isDarkMode: true,
  toggleDarkMode: () => {},
})
export const InCart = createContext("79")
export const ActiveChart = createContext("bar")

const Contexts = ({ children }: { children: React.ReactNode }) => {
  const [deliveredSales, setDeliveredSales] = useState("102")
  const [returnedSales, setReturnedSales] = useState("2")
  const [inCart, setInCart] = useState("79")
  const [targetSales, setTargetSales] = useState("120")
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [activeChart, setActiveChart] = useState("bar")

  function toggleDarkMode() {
    setIsDarkMode((prevTheme) => !prevTheme)
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

  return (
    <ReturnedSales.Provider value={returnedSales}>
      <TargetSales.Provider value={targetSales}>
        <DeliveredSales.Provider value={deliveredSales}>
          <DarkMode.Provider value={{ isDarkMode, toggleDarkMode }}>
            <InCart.Provider value={inCart}>
              <ActiveChart.Provider value={activeChart}>
                {children}
              </ActiveChart.Provider>
            </InCart.Provider>
          </DarkMode.Provider>
        </DeliveredSales.Provider>
      </TargetSales.Provider>
    </ReturnedSales.Provider>
  )
}

export default Contexts
