import "./index.css"
import {
  Top,
  Sales,
  Orders,
  Products,
  Users,
  Countries,
  Social,
} from "../sections"
import { useState, useEffect, createContext } from "react"

export const UserDataContext = createContext({ firstName: "", lastName: "" })
export const SalesDataContext = createContext("")

function App() {
  const [userData, setUserData] = useState({ firstName: "", lastName: "" })
  const [salesData, setSalesData] = useState("")

  useEffect(() => {
    async function getData() {
      const response = await fetch("../AppData.json")
      const data = await response.json()
      setUserData(data.user)
      setSalesData(data.sales)
    }

    getData()
  }, [])

  return (
    <UserDataContext.Provider value={userData}>
      <SalesDataContext.Provider value={salesData}>
        <div className="light-blue2 text mont">
          <div className="pt-[30px]">
            <Top />
            <Sales />
            <Orders />
            <div className="max-w-[1040px] flex flex-wrap mx-[10px] lg:mx-auto xs:justify-center lg:justify-between justify-between">
              <Products />
              <Users />
              <Countries />
              <Social />
            </div>
          </div>
        </div>
      </SalesDataContext.Provider>
    </UserDataContext.Provider>
  )
}

export default App
