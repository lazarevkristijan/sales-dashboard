import { useContext } from "react"

import { PerPageOption } from "."
import { DarkMode, OrdersContext } from "./Contexts"

const ResultsPerPage = () => {
  const { isDarkMode } = useContext(DarkMode)
  const { togglePerPage } = useContext(OrdersContext)
  return (
    <div
      className={`${
        isDarkMode ? "dark-blue3 text-white" : "light-blue1 text-black"
      } w-[150px] absolute top-[50px] right-0 border-black border-[1px] rou`}
    >
      <div className={`m-[20px] ${isDarkMode ? "bg-black" : "bg-white"} rou`}>
        <PerPageOption
          number={10}
          onClick={() => togglePerPage({ value: 10 })}
        />
        <PerPageOption
          number={15}
          onClick={() => togglePerPage({ value: 15 })}
        />
        <PerPageOption
          number={20}
          onClick={() => togglePerPage({ value: 20 })}
        />
        <PerPageOption
          number={25}
          onClick={() => togglePerPage({ value: 25 })}
        />
      </div>
    </div>
  )
}

export default ResultsPerPage
