const OrdersToggleButton = ({ name }: { name: string }) => {
  return (
    <div className="w-[150px] h-[40px] flex smText  mx-auto mb-[10px]">
      <div className="w-[110px] h-full light-blue1 flex justify-center items-center rou-l">
        {name}
      </div>
      <div className="w-[40px] h-full light-success flex rou-r">
        <img
          src="tick.svg"
          alt="tick icon"
          className="w-[20px] mx-auto"
        />
      </div>
    </div>
  )
}

export default OrdersToggleButton
