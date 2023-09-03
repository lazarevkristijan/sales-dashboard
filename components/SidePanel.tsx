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
      />

      <div className="p-[10px] bg-[#fff] flex justify-between items-center rou mb-[10px]">
        <span>Dark Mode</span>
        <div className="light-blue1 w-[80px] h-[40px] rou flex items-center p-1">
          <div className="rounded-full bg-[#000] w-[32.5px] h-[32.5px]"></div>
        </div>
      </div>

      <div className="p-[10px] bg-[#fff] flex justify-between items-center rou mb-[10px]">
        <span>Stats Display</span>
        <div className="light-blue1 w-[40px] h-[40px] rou">
          <img
            src="light-drop-down-icon.svg"
            alt="Drop down button"
            className="w-full h-full"
          />
        </div>
      </div>

      <div className="p-[10px] bg-[#fff] flex justify-between items-center rou mb-[10px]">
        <span>Stats Display</span>
        <div className="light-blue1 w-[40px] h-[40px] rou flex justify-center items-center">
          1w
        </div>
      </div>

      <div className="p-[10px] bg-[#fff] flex justify-between items-center rou mb-[10px]">
        <span>Target</span>
        <div className="light-blue1 w-[100px] h-[40px] rou flex justify-center items-center">
          Change
        </div>
      </div>
    </div>
  )
}

export default SidePanel
