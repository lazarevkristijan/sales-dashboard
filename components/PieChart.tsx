import { pieColors } from "../constants"

const PieChart = () => {
  return (
    <div className="bg-[#fff] mx-[20px] py-[30px] rou mb-[30px] max-w-[1000px] overflow-x-scroll lg:overflow-hidden">
      <p className="text-center">Delivered</p>
      <div className="max-w-[1000px] mx-[20px] flex">
        <div className="w-1/2">
          {pieColors.slice(0, 5).map((sliceInfo, index) => (
            <div
              key={index}
              className="w-[120px] flex justify-between items-center"
            >
              {sliceInfo.text}
              <div
                className="w-[20px] h-[20px] inline-block"
                style={{ backgroundColor: sliceInfo.color }}
              ></div>
            </div>
          ))}
        </div>
        <div className="w-1/2 flex flex-col items-end">
          {pieColors.slice(5, 9).map((sliceInfo, index) => (
            <>
              <div
                key={index}
                className="w-[120px] flex justify-between items-center"
              >
                <div
                  className="w-[20px] h-[20px] inline-block"
                  style={{ backgroundColor: sliceInfo.color }}
                ></div>
                {sliceInfo.text}
              </div>
            </>
          ))}
        </div>
      </div>
      <div className="w-[200px] h-[200px] rounded-full bg-[#00FF00]"></div>
    </div>
  )
}

export default PieChart
