import { useState } from "react"
import { PanelButton, DisplayPeriodsMenu, ChartDisplayMenu, Target } from "."
const SidePanel = ({ handlePanelClick }: { handlePanelClick: () => void }) => {
  const [isMenuOpen, setIsMenuOpen] = useState("")

  const handleChartMenu = () => {
    setIsMenuOpen("chartDisplay")
  }

  const handlePeriodsMenu = () => {
    setIsMenuOpen("displayPeriods")
  }

  const handleTargetMenu = () => {
    setIsMenuOpen("target")
  }

  return (
    <div className="light-blue3 p-[20px] pb-[10px] rou absolute z-[1] top-[80px] w-[300px]">
      <div
        className="w-0 h-0 absolute -top-[20px] left-0"
        style={{
          borderLeft: "30px solid transparent",
          borderRight: "30px solid transparent",
          borderBottom: "30px solid #48CAE4",
          rotate: "-15deg",
        }}
      ></div>
      <img
        src="x-square.svg"
        alt="close menu button"
        className="w-[35px] ml-auto mr-0 mb-[10px] hover:cursor-pointer"
        onClick={handlePanelClick}
      />

      <PanelButton
        title="Dark Mode"
        iconWidth="80"
        color="light-blue1"
      >
        <div className="rounded-full bg-[#000] w-[32.5px] h-[32.5px]"></div>
      </PanelButton>

      <PanelButton
        title="Chart Display"
        color="light-blue1"
        onClick={handleChartMenu}
      >
        <img
          src="light-drop-down-icon.svg"
          alt="Drop down button"
          className="p-1"
        />
      </PanelButton>
      {isMenuOpen === "chartDisplay" && <ChartDisplayMenu />}

      <PanelButton
        title="Display Periods"
        color="light-blue1"
        onClick={handlePeriodsMenu}
      >
        <span className="mx-auto">1w</span>
      </PanelButton>
      {isMenuOpen === "displayPeriods" && <DisplayPeriodsMenu />}

      <PanelButton
        title="Target"
        iconWidth="100"
        color="light-blue1"
        onClick={handleTargetMenu}
      >
        <span className="mx-auto">Change</span>
      </PanelButton>
      {isMenuOpen === "target" && <Target />}
    </div>
  )
}

export default SidePanel
