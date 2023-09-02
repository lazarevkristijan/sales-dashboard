const Product = ({
  name,
  price,
  storage,
  ram,
  battery,
  available,
  rating,
  productNo,
}: {
  name: string
  price: number
  storage: number
  ram: number
  battery: number
  available: number
  rating: number
  productNo: number
}) => {
  return (
    <div className="flex flex-col sm:flex-row">
      <div className="bg-[#fff] mx-auto sm:mx-0 mb-[20px] sm:mb-0 w-[140px] text-center rou">
        <img
          src="phone.svg"
          alt="phone"
          className="h-[220px] mx-auto pt-[5px]"
        />
        <span>{name}</span>
      </div>
      <div>
        <div className="bg-[#fff] h-fit w-[240px] rou sm:ml-[10px] p-[10px] smText">
          <p>Price: ${price} </p>
          <p>Storage: {storage}GB</p>
          <p> RAM: {ram}GB</p>
          <p> Battery: {battery}mAh</p>
        </div>
        <div className="bg-[#fff] h-fit w-[240px] rou sm:ml-[10px] mb-[20px] sm:mb-0 p-[10px] mt-[10px]">
          <p> Available: {available}</p>
          <p> Rating: {rating}/5</p>
        </div>
        <p className="text-right">Product {productNo}/3</p>
      </div>
    </div>
  )
}

export default Product
