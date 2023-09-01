import { Notification } from "."

const NotificationPanel = () => {
  return (
    <div className="light-blue3 p-[20px] pb-0 rou max-w-[350px] absolute z-[1] right-[20px] top-[60px]">
      <div
        className=" w-0 h-0 absolute -top-[20px] right-[7.5px]"
        style={{
          borderLeft: "30px solid transparent",
          borderRight: "30px solid transparent",
          borderBottom: "30px solid #48CAE4",
        }}
      ></div>
      <Notification evaluation={true} />
      <Notification evaluation={false} />
    </div>
  )
}

export default NotificationPanel
