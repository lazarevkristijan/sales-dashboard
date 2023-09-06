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
import { useContext } from "react"
import { DarkMode } from "../components/ContDarkMode"

function App() {
  const isDarkMode = useContext(DarkMode)

  return (
    <DarkMode.Provider value={isDarkMode}>
      <div
        className={`${
          isDarkMode ? "dark-blue4 text-white" : "light-blue2 text-black"
        } text mont`}
      >
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
    </DarkMode.Provider>
  )
}

export default App
