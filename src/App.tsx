import "./index.css"
import { Sales, Orders, Products, Users, Countries, Social } from "./sections"

function App() {
  return (
    <div className="bg-black">
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
