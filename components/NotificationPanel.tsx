import { Notification } from "."
import { topDropDownStyles } from "../constants"

const NotificationPanel = () => {
  return (
    <div className={`${topDropDownStyles} pb-0 max-w-[300px] right-[20px]`}>
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
