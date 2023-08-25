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
      <div className="mx-[100px]">
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
