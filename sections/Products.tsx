// import { useState } from "react"
import { smSectionStyles, products } from "../constants"
import { Product, ProductArrow } from "../components"
import { useState, useContext } from "react"
import { DarkMode } from "../components/Contexts"
const Products = () => {
  const [productNumber, setProductNumber] = useState(0)

  const handleNextProduct = () => {
    if (productNumber == 2) {
      setProductNumber(0)
    } else {
      setProductNumber(productNumber + 1)
    }
  }

  const handlePrevProduct = () => {
    if (productNumber == 0) {
      setProductNumber(2)
    } else {
      setProductNumber(productNumber - 1)
    }
  }

  const isDarkMode = useContext(DarkMode)
  return (
    <div
      className={`${smSectionStyles} ${
        isDarkMode ? "dark-blue3" : "light-blue1"
      } items-center`}
    >
      <div className="flex justify-between items-center">
        <ProductArrow
          direction="left"
          onClick={handlePrevProduct}
        />
        <div className="flex flex-col sm:flex-row">
          {products
            .slice(productNumber, productNumber + 1)
            .map((product, index) => (
              <Product
                key={index}
                name={product.name}
                price={product.price}
                storage={product.storage}
                ram={product.ram}
                battery={product.battery}
                available={product.available}
                rating={product.rating}
                productNo={product.productNo}
              />
            ))}
        </div>
        <ProductArrow
          direction="right"
          onClick={handleNextProduct}
        />
      </div>
    </div>
  )
}

export default Products
