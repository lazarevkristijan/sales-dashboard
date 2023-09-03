import { PanelButton } from "."

const SidePanel = ({ handlePanelClick }: { handlePanelClick: () => void }) => {
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
        className="w-[35px] ml-auto mr-0 mb-[20px] hover:cursor-pointer"
        onClick={handlePanelClick}
      />

      <PanelButton
        title="Dark Mode"
        iconWidth="80"
      >
        <div className="rounded-full bg-[#000] w-[32.5px] h-[32.5px]"></div>
      </PanelButton>

      <PanelButton title="Display Time">
        <img
          src="light-drop-down-icon.svg"
          alt="Drop down button"
          className="p-1"
        />
      </PanelButton>

      <PanelButton title="Display Periods">
        <span className="mx-auto">1w</span>
      </PanelButton>

      <PanelButton
        title="Target"
        iconWidth="100"
      >
        <span className="mx-auto">Change</span>
      </PanelButton>
    </div>
  )
}

export default SidePanel
