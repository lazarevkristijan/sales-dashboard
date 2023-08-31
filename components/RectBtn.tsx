const RectBtn = ({ text, color }: { text: string; color: string }) => {
  return (
    <span
      className={`bg-[${color}] py-1 px-2 rou ml-auto mr-0 min-w-[80px] text-center`}
    >
      {text}
    </span>
  )
}

export default RectBtn
