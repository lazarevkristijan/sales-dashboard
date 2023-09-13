import { useState, useContext, useRef, useEffect } from "react"
import { DarkModeContext, TopOpenMenuContext } from "../src/App"
import {
  PanelButton,
  DisplayPeriodsMenu,
  ChartDisplayMenu,
  TargetMenu,
} from "."

const SidePanel = ({ handlePanelClick }: { handlePanelClick: () => void }) => {
  // Contexts
  const { sidePanelMenu, toggleSidePanelMenu } = useContext(TopOpenMenuContext)

  // States
  const [isMenuOpen, setIsMenuOpen] = useState("")
  const [isHovered, setIsHovered] = useState(false)

  // Functions
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const isMenuIconClicked =
        e.target instanceof HTMLElement &&
        e.target.classList.contains("menuButtonSide")

      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        !isMenuIconClicked
      ) {
        toggleSidePanelMenu()
      }
    }

    if (sidePanelMenu) {
      document.addEventListener("mousedown", handleClickOutside)
    } else {
      document.removeEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [sidePanelMenu, toggleSidePanelMenu])

  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext)

  const handleHover = () => {
    setIsHovered((prev) => !prev)
  }

  const toggleChartMenu = () => {
    isMenuOpen === "chartDisplay"
      ? setIsMenuOpen("")
      : setIsMenuOpen("chartDisplay")
  }

  const togglePeriodsMenu = () => {
    isMenuOpen === "displayPeriods"
      ? setIsMenuOpen("")
      : setIsMenuOpen("displayPeriods")
  }

  const toggleTargetMenu = () => {
    isMenuOpen === "target" ? setIsMenuOpen("") : setIsMenuOpen("target")
  }

  // Refs
  const menuRef = useRef<HTMLDivElement | null>(null)

  return (
    <div
      className={`${
        isDarkMode ? "dark-blue1" : "light-blue4"
      } w-[300px] p-[20px] pb-[10px] absolute z-[1] top-[80px] rou drop-shadow-2xl`}
      ref={menuRef}
    >
      {/* Arrow that points to icon */}
      <div
        className="w-0 h-0 absolute -top-[20px] left-0"
        style={{
          borderLeft: "30px solid transparent",
          borderRight: "30px solid transparent",
          borderBottom: `30px solid ${isDarkMode ? "#00C0FF" : "#00b4d8"}`,
          rotate: "-15deg",
        }}
      ></div>
      <img
        src={`${isHovered ? "x-square-fill" : "x-square"}.svg`}
        alt="close menu button"
        className="w-[35px] ml-auto mr-0 mb-[10px] hover:cursor-pointer"
        onClick={handlePanelClick}
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
      />

      {/* Theme button */}
      <PanelButton
        title="Theme"
        iconWidth="80"
        color={isDarkMode ? "dark-blue4" : "light-blue2"}
        onClick={toggleDarkMode}
      >
        <div
          className={`${
            isDarkMode ? "bg-white ml-auto mr-0" : "bg-black"
          } rounded-full w-[32.5px] h-[32.5px]`}
        >
          <img
            src={`${isDarkMode ? "moon" : "sun"}.svg`}
            alt={`${isDarkMode ? "moon" : "sun"} icon`}
            className="p-1"
          />
        </div>
      </PanelButton>

      {/* Chart Display button */}
      <PanelButton
        title="Chart Display"
        color={isDarkMode ? "dark-blue4" : "light-blue2"}
        onClick={toggleChartMenu}
      >
        <img
          src={`${isDarkMode ? "dark" : "light"}-drop-down-icon.svg`}
          alt="Drop down button"
          className="p-1"
        />
      </PanelButton>
      {isMenuOpen === "chartDisplay" && <ChartDisplayMenu />}

      {/* Display Periods button */}
      <PanelButton
        title="Display Periods"
        color={isDarkMode ? "dark-blue4" : "light-blue2"}
        onClick={togglePeriodsMenu}
      >
        <span className="mx-auto">1m</span>
      </PanelButton>
      {isMenuOpen === "displayPeriods" && <DisplayPeriodsMenu />}

      {/* Target button */}
      <PanelButton
        title="Target"
        iconWidth="100"
        color={isDarkMode ? "dark-blue4" : "light-blue2"}
        onClick={toggleTargetMenu}
      >
        <span className="mx-auto">Change</span>
      </PanelButton>
      {isMenuOpen === "target" && <TargetMenu />}
    </div>
  )
}

export default SidePanel
