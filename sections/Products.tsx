// import { useState } from "react"
import { smSectionStyles, products } from "../constants"
import { Product } from "../components"
const Products = () => {
  return (
    <div className={`${smSectionStyles} items-center`}>
      <div className="flex justify-between items-center">
        <div className="w-[30px] ml-2">
          <img
            src="light-arrow-left.svg"
            alt="left arrow"
          />
        </div>
        <div className="flex flex-col sm:flex-row">
          {products.slice(0, 1).map((product, index) => (
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
        <div className="mr-2 w-[30px]">
          <img
            src="light-arrow-right.svg"
            alt="right arrow"
          />
        </div>
      </div>
    </div>
  )
}

export default Products
