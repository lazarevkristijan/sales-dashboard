import { createContext, useState } from "react"

export const ReturnedSales = createContext("2")
export const TargetSales = createContext("120")
export const DeliveredSales = createContext("102")
export const DarkMode = createContext(false)
export const InCart = createContext("79")

const Contexts = ({ children }: { children: React.ReactNode }) => {
  const [deliveredSales, setDeliveredSales] = useState("102")
  const [returnedSales, setReturnedSales] = useState("2")
  const [inCart, setInCart] = useState("79")
  const [targetSales, setTargetSales] = useState("120")
  const [isDarkMode, setIsDarkMode] = useState(false)

  function removeSetErrors() {
    setReturnedSales
    setTargetSales
    setDeliveredSales
    setIsDarkMode
    setInCart
  }
  removeSetErrors

  return (
    <ReturnedSales.Provider value={returnedSales}>
      <TargetSales.Provider value={targetSales}>
        <DeliveredSales.Provider value={deliveredSales}>
          <DarkMode.Provider value={isDarkMode}>
            <InCart.Provider value={inCart}>{children}</InCart.Provider>
          </DarkMode.Provider>
        </DeliveredSales.Provider>
      </TargetSales.Provider>
    </ReturnedSales.Provider>
  )
}

export default Contexts
