import { ProgressLine, Pillar, SalesInfoBox, RectBtn } from "../components/"
import {
  progressLineNumbers,
  pillarValues,
  salesInfoBoxes,
  additionalSalesInfoStyles,
} from "../constants"
const Sales = () => {
  return (
    <div className="mx-[10px] bg-[#caf0f8] py-[30px] rou">
      <div className="bg-[#fff] mx-[20px] py-[30px] rou mb-[30px] max-w-[1000px]">
        <p className="text-center">Delivered</p>
        <div className="relative">
          {progressLineNumbers.map((line, index) => (
            <ProgressLine
              value={line.value}
              key={index}
            />
          ))}
          {pillarValues.map((pillar, index) => (
            <Pillar
              left={pillar.value}
              week={pillar.week}
              key={index}
            />
          ))}
        </div>
      </div>
      {salesInfoBoxes.map((box, index) => (
        <SalesInfoBox
          heading={box.heading}
          qty={box.qty}
          bg={box.bg}
          key={index}
        />
      ))}
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
      <div className={`${additionalSalesInfoStyles}`}>
        <div className="mx-[20px] flex items-center">
          <span>Target progress</span>
          <RectBtn
            text="73%"
            color="#CAF0F8"
          />
        </div>
      </div>
      <div className={`${additionalSalesInfoStyles} relative`}>
        <img
          src="light-info.svg"
          alt="info button"
          className="w-[20px] absolute top-1 right-1"
        />
        <div className="mx-[20px] flex items-center">
          <span>Total calculated</span>
          <RectBtn
            text="$73,500"
            color="#CAF0F8"
          />
        </div>
      </div>
    </div>
  )
}

export default Sales
