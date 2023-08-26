import "./index.css"
import {
  Top,
  Sales,
  Orders,
  Products,
  Users,
  Countries,
  Social,
} from "./sections"

function App() {
  return (
    <div className="bg-[#96f2ff]">
      <div className="pt-[60px] mx-auto 2xl:w-[1336px] xl:w-[1080px] lg:w-[824px]">
        <Top />
        <Sales />
        <Orders />
        <Products />
        <Users />
        <Countries />
        <Social />
      </div>
    </div>
  )
}

export default App
