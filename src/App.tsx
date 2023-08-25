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
    <div className=" bg-[#96f2ff]">
      <Top />
      <Sales />
      <Orders />
      <Products />
      <Users />
      <Countries />
      <Social />
    </div>
  )
}

export default App
