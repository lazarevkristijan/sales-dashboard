import { useState, useContext, useRef, useEffect } from "react"
import {
  PanelButton,
  DisplayPeriodsMenu,
  ChartDisplayMenu,
  TargetMenu,
} from "."

import { DarkMode } from "./Contexts"
import { OpenMenu } from "../sections/Top"

const SidePanel = ({ handlePanelClick }: { handlePanelClick: () => void }) => {
  const { sidePanelMenu, toggleSidePanelMenu } = useContext(OpenMenu)
  const menuRef = useRef<HTMLDivElement | null>(null)

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

  const [isMenuOpen, setIsMenuOpen] = useState("")

  const { isDarkMode, toggleDarkMode } = useContext(DarkMode)

  const [isHovered, setIsHovered] = useState(false)

  const handleHover = () => {
    setIsHovered((prev) => !prev)
  }

  const toggleChartMenu = () => {
    if (isMenuOpen === "chartDisplay") {
      setIsMenuOpen("")
    } else {
      setIsMenuOpen("chartDisplay")
    }
  }

  const togglePeriodsMenu = () => {
    if (isMenuOpen === "displayPeriods") {
      setIsMenuOpen("")
    } else {
      setIsMenuOpen("displayPeriods")
    }
  }

  const toggleTargetMenu = () => {
    if (isMenuOpen === "target") {
      setIsMenuOpen("")
    } else {
      setIsMenuOpen("target")
    }
  }

  return (
    <div
      className={`${
        isDarkMode ? "dark-blue1" : "light-blue3"
      } p-[20px] pb-[10px] rou absolute z-[1] top-[80px] w-[300px]`}
      ref={menuRef}
    >
      <div
        className="w-0 h-0 absolute -top-[20px] left-0"
        style={{
          borderLeft: "30px solid transparent",
          borderRight: "30px solid transparent",
          borderBottom: `30px solid ${isDarkMode ? "#00C0FF" : "#48CAE4"}`,
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

      {isDarkMode ? (
        <PanelButton
          title="Dark Mode"
          iconWidth="80"
          color="dark-blue4"
          onClick={toggleDarkMode}
        >
          <div className="rounded-full bg-[#fff] w-[32.5px] h-[32.5px] ml-auto mr-0"></div>
        </PanelButton>
      ) : (
        <PanelButton
          title="Dark Mode"
          iconWidth="80"
          color="light-blue2"
          onClick={toggleDarkMode}
        >
          <div className="rounded-full bg-[#000] w-[32.5px] h-[32.5px]"></div>
        </PanelButton>
      )}

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

      <PanelButton
        title="Display Periods"
        color={isDarkMode ? "dark-blue4" : "light-blue2"}
        onClick={togglePeriodsMenu}
      >
        <span className="mx-auto">1m</span>
      </PanelButton>
      {isMenuOpen === "displayPeriods" && <DisplayPeriodsMenu />}

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
