import { useState } from "react"
import { RectBtn } from "."

const Target = () => {
  const [isInput, setIsInput] = useState(false)
  const [target, setTarget] = useState("120")
  const handleIsInput = () => {
    setIsInput(!isInput)
  }

  const handleTargetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTarget(e.target.value)
  }

  return (
    <div className="absolute w-[300px] light-blue1 left-0 sm:left-[300px] top-[355px] sm:top-0 rou smText border-black border-[1px]">
      <div className="m-[20px] bg-[#fff] text-center">
        <p>Monthly target sales</p>
        <div className="flex justify-center items-center">
          {!isInput && (
            <RectBtn
              text={target}
              onClick={() => handleIsInput}
            />
          )}

          {isInput && (
            <input
              type="text"
              value={target}
              onChange={(e) => handleTargetChange(e)}
              className="w-[80px] light-blue3 rou p-1 text-center"
            />
          )}
          <div
            className="ml-2 w-[30px] h-[30px] light-blue3 rou hover:cursor-pointer"
            onClick={handleIsInput}
          >
            {isInput ? (
              <img
                src="tick.svg"
                alt="tick"
                className="p-1"
              />
            ) : (
              <img
                src="edit.svg"
                alt="edit"
                className="p-1"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Target
