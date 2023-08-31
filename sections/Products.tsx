import { useState } from "react"

const Products = () => {
  const [arrowBackground, setArrowBackground] = useState("")

  const handleArrowHover = () => {
    setArrowBackground("#fff")
  }

  const handleArrowLeave = () => {
    setArrowBackground("")
  }

  return (
    <div className="mx-[10px] lg:mx-auto items-center light-blue1 py-[30px] rou mb-[50px] max-w-[500px]">
      <div className="flex justify-between items-center ">
        <div className="w-[30px] ml-2">
          <img
            src="light-arrow-left.svg"
            alt="left arrow"
          />
        </div>
        <div className="flex">
          <div className="bg-[#fff] h-[250px] w-[170px] text-center rou">
            <img
              src="phone.svg"
              alt="phone"
              className="h-[220px] mx-auto pt-[5px]"
            />
            <span>iPhone 11</span>
          </div>
          <div>
            <div className="bg-[#fff] h-fit w-[200px] rou ml-[30px] p-[10px]">
              Price: $500 <br />
              Storage: 128GB <br />
              RAM: 4GB <br />
              Battery: 3110mAh <br />
            </div>
            <div className="bg-[#fff] h-fit w-[200px] rou ml-[30px] p-[10px] mt-[10px]">
              Available: 327 <br />
              Rating: 4.7/5
            </div>
          </div>
        </div>
        <div className="mr-2 w-[30px]">
          <img
            src="light-arrow-right.svg"
            alt="right arrow"
          />
        </div>
      </div>
      <div className="text-right">
        <span className="mr-[60px]">Product 1/4</span>
      </div>
    </div>
  )
}

export default Products
