const ProductArrow = ({
  direction,
  onClick,
}: {
  direction: string
  onClick: React.MouseEventHandler
}) => {
  return (
    <div
      className={`w-[30px] ${
        direction === "left" ? "ml-2" : direction === "right" && "mr-2"
      } ml-2`}
      onClick={onClick}
    >
      <img
        src={`light-arrow-${direction}.svg`}
        alt={`${direction} arrow`}
      />
    </div>
  )
}

export default ProductArrow
