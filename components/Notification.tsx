const Notification = ({ evaluation }: { evaluation: boolean }) => {
  return (
    <div
      className={`${
        evaluation ? "light-success" : "light-danger"
      } rou flex justify-between mb-[20px] p-[20px]`}
    >
      <div className="bg-[#fff] p-[10px] rou mr-[10px] w-1/3 my-auto">
        <img
          src="phone.svg"
          alt="phone"
        />
      </div>
      <div className="w-2/3 my-auto">
        <p>
          {evaluation ? "New order" : "Cancelled order"} by User Name, item
          name, quantity, price
        </p>
      </div>
    </div>
  )
}

export default Notification
