import { useContext } from "react"
import { DarkMode } from "../components/Contexts"
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

const Wrapper = () => {
  const { isDarkMode } = useContext(DarkMode)

  return (
    <div
      className={` ${
        isDarkMode ? "dark-blue4 dark-text" : "light-blue2 light-text"
      } min-w-[300px] text mont`}
    >
      <div className="pt-[30px]">
        <Top />
        <Sales />
        <Orders />
        <div className="max-w-[1040px] mx-[10px] flex flex-wrap lg:mx-auto justify-between xs:justify-center lg:justify-between">
          <Products />
          <Users />
          <Countries />
          <Social />
        </div>
      </div>
    </div>
  )
}

export default Wrapper
