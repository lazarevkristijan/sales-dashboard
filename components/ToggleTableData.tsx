import { OrdersToggleButton } from "."
import { tableDataOptions } from "../constants"
const ToggleTableData = () => {
  console.log(tableDataOptions.length / 2)
  return (
    <div className="w-[250px] sm:w-[300px] md:w-[400px] light-blue1 absolute top-[50px] border-black border-[1px] rou">
      <div className="m-[20px] bg-white rou py-[10px]">
        <p className="text-center">Show/hide elements</p>
        <div className="md:flex pt-[10px]">
          <div className="md:w-1/2">
            {tableDataOptions
              .slice(0, tableDataOptions.length / 2)
              .map((option, index) => (
                <OrdersToggleButton
                  name={option.name}
                  key={index}
                />
              ))}
          </div>
          <div className="md:w-1/2">
            {tableDataOptions
              .slice(tableDataOptions.length / 2)
              .map((option, index) => (
                <OrdersToggleButton
                  name={option.name}
                  key={index}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ToggleTableData
