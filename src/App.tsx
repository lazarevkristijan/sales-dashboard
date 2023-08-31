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

function App() {
  return (
    <div className="bg-[#96f2ff] text mont">
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
  )
}

export default App
