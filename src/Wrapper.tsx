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
import { DarkMode } from "../components/Contexts"

const Wrapper = () => {
  const { isDarkMode } = useContext(DarkMode)

  return (
    <div
      className={` ${
        isDarkMode ? "dark-blue4 text-white" : "light-blue2 text-black"
      } text mont`}
    >
      <div className="pt-[30px]">
        <Top />
        <Sales />
        <Orders />
        <div className="max-w-[1040px] flex flex-wrap mx-[10px] lg:mx-auto justify-between xs:justify-center lg:justify-between">
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
