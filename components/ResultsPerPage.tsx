import { useContext, useEffect, useRef } from "react"

import { PerPageOption } from "."
import { DarkMode, OrdersContext } from "./Contexts"
import { OrdersOpenMenu } from "../sections/Orders"

const ResultsPerPage = () => {
  const { isDarkMode } = useContext(DarkMode)
  const { perPageSetter } = useContext(OrdersContext)
  const { perPageMenu, togglePerPageMenu } = useContext(OrdersOpenMenu)
  const perPageRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const isMenuIconClicked =
        e.target instanceof HTMLElement &&
        e.target.classList.contains("menuButtonPerPage")

      if (
        perPageRef.current &&
        !perPageRef.current.contains(e.target as Node) &&
        !isMenuIconClicked
      ) {
        togglePerPageMenu()
      }
    }

    if (perPageMenu) {
      document.addEventListener("mousedown", handleClickOutside)
    } else {
      document.removeEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.addEventListener("mousedown", handleClickOutside)
    }
  }, [perPageMenu, togglePerPageMenu])

  return (
    <div
      className={`${
        isDarkMode ? "dark-blue3 text-white" : "light-blue1 text-black"
      } w-[150px] absolute top-[50px] right-0 border-black border-[1px] rou`}
      ref={perPageRef}
    >
      <div className={`m-[20px] ${isDarkMode ? "bg-black" : "bg-white"} rou`}>
        <PerPageOption
          number={10}
          onClick={() => perPageSetter({ value: 10 })}
        />
        <PerPageOption
          number={15}
          onClick={() => perPageSetter({ value: 15 })}
        />
        <PerPageOption
          number={20}
          onClick={() => perPageSetter({ value: 20 })}
        />
        <PerPageOption
          number={25}
          onClick={() => perPageSetter({ value: 25 })}
        />
      </div>
    </div>
  )
}

export default ResultsPerPage
