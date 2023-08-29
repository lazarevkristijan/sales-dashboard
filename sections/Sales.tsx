import { useState } from "react"
import { SalesInfoBox, RectBtn, TotalInfo, BarChart } from "../components/"
import { salesInfoBoxes, additionalSalesInfoStyles } from "../constants"
const Sales = () => {
  const [handleInfoHover, setHandleInfoHover] = useState(false)

  function infoHover() {
    setHandleInfoHover(true)
  }

  function infoHoverLeave() {
    setHandleInfoHover(false)
  }

  return (
    <div className="mx-[10px] lg:mx-auto bg-[#caf0f8] pt-[30px] rou mb-[50px] max-w-[1040px]">
      <BarChart />
      <div className="flex flex-wrap justify-center">
        {salesInfoBoxes.map((box, index) => (
          <SalesInfoBox
            heading={box.heading}
            qty={box.qty}
            bg={box.bg}
            key={index}
          />
        ))}
        b
      </div>
      <div className="flex flex-wrap justify-center items-center">
        <div className={`${additionalSalesInfoStyles}`}>
          <div className="mx-[20px] flex items-center">
            <span>Gross profits</span>
            <RectBtn
              text="$74,000"
              color="#CAF0F8"
            />
          </div>
          <div className="mx-[20px] flex items-center mt-[10px]">
            <span>Net profits</span>
            <RectBtn
              text="$21,000"
              color="#CAF0F8"
            />
          </div>
        </div>
        <div className={`${additionalSalesInfoStyles} relative`}>
          <div className="mx-[20px] flex items-center">
            <span>Target progress</span>

            <RectBtn
              text="73%"
              color="#CAF0F8"
            />
          </div>
          <div className="mx-[20px] flex items-center mt-[10px]">
            <img
              src="light-info.svg"
              alt="info button"
              className={`w-[20px] absolute top-1 right-1 `}
              onMouseEnter={infoHover}
              onMouseLeave={infoHoverLeave}
            />
            {handleInfoHover ? <TotalInfo /> : ""}
            <span>Total calculated</span>
            <RectBtn
              text="$73,500"
              color="#CAF0F8"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sales
