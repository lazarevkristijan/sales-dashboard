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
    <div className="items-center light-blue1 py-[30px] rou mb-[50px] w-[500px]">
      <div className="flex justify-between items-center">
        <div className="w-[30px] ml-2">
          <img
            src="light-arrow-left.svg"
            alt="left arrow"
          />
        </div>
        <div className="flex flex-col sm:flex-row">
          <div className="bg-[#fff] h-[250px] mx-auto sm:mx-0 mb-[20px] sm:mb-0 w-[150px] text-center rou">
            <img
              src="phone.svg"
              alt="phone"
              className="h-[220px] mx-auto pt-[5px]"
            />
            <span>iPhone 11</span>
          </div>
          <div>
            <div className="bg-[#fff] h-fit w-[200px] rou sm:ml-[30px] p-[10px]">
              Price: $500 <br />
              Storage: 128GB <br />
              RAM: 4GB <br />
              Battery: 3110mAh <br />
            </div>
            <div className="bg-[#fff] h-fit w-[200px] rou sm:ml-[30px] mb-[20px] sm:mb-0 p-[10px] mt-[10px]">
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
      <div className="text-center sm:text-right">
        <span className="sm:mr-[60px]">Product 1/4</span>
      </div>
    </div>
  )
}

export default Products
