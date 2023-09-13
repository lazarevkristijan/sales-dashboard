import { useContext } from "react"
import { DarkModeContext } from "../src/App"

const Product = ({
  name,
  price,
  storage,
  ram,
  battery,
  available,
  rating,
  productNo,
}: {
  name: string
  price: number
  storage: number
  ram: number
  battery: number
  available: number
  rating: number
  productNo: number
}) => {
  // Contexts
  const { isDarkMode } = useContext(DarkModeContext)

  return (
    <div className="flex flex-col sm:flex-row">
      <div
        className={`${
          isDarkMode ? "bg-black" : "bg-white"
        } w-[140px] mx-auto sm:mx-0 mb-[20px] sm:mb-0 text-center rou`}
      >
        <img
          src={`${name}.svg`}
          alt="phone"
          className="h-[220px] w-[100px] mx-auto py-[10px]"
        />
        <span className={`${isDarkMode ? "dark-text" : "light-text"}`}>
          {name}
        </span>
      </div>

      <div>
        <div
          className={`${
            isDarkMode ? "bg-black dark-text" : "bg-white light-text"
          } w-[240px] h-fit sm:ml-[10px] p-[10px] smText rou`}
        >
          <p>Price: €{price} </p>
          <p>Storage: {storage}GB</p>
          <p>RAM: {ram}GB</p>
          <p>Battery: {battery}mAh</p>
        </div>
        <div
          className={`${
            isDarkMode ? "bg-black dark-text" : "bg-white light-text"
          } w-[240px] h-fit sm:ml-[10px] mb-[20px] sm:mb-0 mt-[10px] p-[10px] rou`}
        >
          <p> Available: {available}</p>
          <p> Rating: {rating}/5⭐</p>
        </div>
        <p className={`${isDarkMode ? "dark-text" : "light-text"} text-right`}>
          Product {productNo}/3
        </p>
      </div>
    </div>
  )
}

export default Product
