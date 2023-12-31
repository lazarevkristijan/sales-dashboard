import { useState, useContext } from "react"
import { DarkModeContext, ScreenContext } from "../src/App"
import { Product, ProductArrow } from "../components"
import { smSectionStyles, products } from "../constants"
import React from "react"

const Products = () => {
  // Contexts
  const { isDarkMode } = useContext(DarkModeContext)
  const { screenWidth } = useContext(ScreenContext)

  // States
  const [productNumber, setProductNumber] = useState(0)

  // Functions
  const toggleNextProduct = () => {
    if (productNumber == 2) {
      setProductNumber(0)
    } else {
      setProductNumber((prev) => prev + 1)
    }
  }

  const togglePrevProduct = () => {
    if (productNumber == 0) {
      setProductNumber(2)
    } else {
      setProductNumber((prev) => prev - 1)
    }
  }

  return (
    <div
      className={`${smSectionStyles} ${
        isDarkMode ? "dark-blue3" : "light-blue1"
      }`}
    >
      <div className="flex justify-center xs:justify-between items-center">
        {/* Render arrows below if screen widrh >= 350px */}
        {screenWidth >= 350 && (
          <ProductArrow
            direction="left"
            onClick={togglePrevProduct}
          />
        )}

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
        {screenWidth >= 350 && (
          <ProductArrow
            direction="right"
            onClick={toggleNextProduct}
          />
        )}
      </div>
      {/* Render arrows below if screen widrh < 350px */}
      {screenWidth < 350 && (
        <div className="flex justify-between">
          <ProductArrow
            direction="left"
            onClick={togglePrevProduct}
          />

          <ProductArrow
            direction="right"
            onClick={toggleNextProduct}
          />
        </div>
      )}
    </div>
  )
}

const MemoizedProducts = React.memo(Products)
export default MemoizedProducts
