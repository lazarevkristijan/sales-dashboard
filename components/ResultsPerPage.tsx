import { useContext, useEffect, useRef } from "react"
import { DarkMode, OrdersTableContext, OrdersOpenMenu } from "./Contexts"
import { PerPageOption } from "."
import { perPageOptions } from "../constants"

const ResultsPerPage = () => {
  // Contexts
  const { isDarkMode } = useContext(DarkMode)
  const { perPageSetter } = useContext(OrdersTableContext)
  const { perPageMenu, togglePerPageMenu } = useContext(OrdersOpenMenu)

  // Functions
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
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [perPageMenu, togglePerPageMenu])

  // Refs
  const perPageRef = useRef<HTMLDivElement | null>(null)

  return (
    <div
      className={`${
        isDarkMode ? "dark-blue3 dark-text" : "light-blue1 light-text"
      } w-[150px] absolute top-[50px] right-0 border-black border-[1px] rou`}
      ref={perPageRef}
    >
      <div className={`${isDarkMode ? "bg-black" : "bg-white"} m-[20px] rou`}>
        {perPageOptions.map((option, index) => (
          <PerPageOption
            key={index}
            number={option.number}
            onClick={() => perPageSetter({ value: option.number })}
          />
        ))}
      </div>
    </div>
  )
}

export default ResultsPerPage
