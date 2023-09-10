import { useContext } from "react"

import { PerPageOption } from "."
import { DarkMode, OrdersContext } from "./Contexts"

const ResultsPerPage = () => {
  const { isDarkMode } = useContext(DarkMode)
  const { setPerpage } = useContext(OrdersContext)
  return (
    <div
      className={`${
        isDarkMode ? "dark-blue3 text-white" : "light-blue1 text-black"
      } w-[150px] absolute top-[50px] right-0 border-black border-[1px] rou`}
    >
      <div className={`m-[20px] ${isDarkMode ? "bg-black" : "bg-white"} rou`}>
        <PerPageOption
          number={10}
          onClick={() => setPerpage({ value: 10 })}
        />
        <PerPageOption
          number={15}
          onClick={() => setPerpage({ value: 15 })}
        />
        <PerPageOption
          number={20}
          onClick={() => setPerpage({ value: 20 })}
        />
        <PerPageOption
          number={25}
          onClick={() => setPerpage({ value: 25 })}
        />
      </div>
    </div>
  )
}

export default ResultsPerPage
