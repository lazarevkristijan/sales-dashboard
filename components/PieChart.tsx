import { chartStyles } from "../constants"
import { PieColorBox } from "."

const PieChart = () => {
  return (
    <div className={`${chartStyles}`}>
      <p className="text-center">Delivered</p>
      <div className="max-w-[1000px] mx-[20px] flex">
        <div className="w-1/2">
          <PieColorBox
            sliceFrom={0}
            sliceTo={5}
          />
        </div>
        <div className="w-1/2 flex flex-col items-end">
          <PieColorBox
            sliceFrom={5}
            sliceTo={9}
          />
        </div>
      </div>
      <div className="w-[200px] h-[200px] rounded-full bg-[#00FF00]"></div>
    </div>
  )
}

export default PieChart
