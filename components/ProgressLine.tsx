const ProgressLine = ({ value }: { value: number }) => {
  return (
    <div className="flex h-[20px] mx-[20px] mb-7">
      <div className="h-full w-[30px] text-right">{value}</div>
      <div className="w-full h-full">
        <hr className="border-black mx-2 mt-[13px] w-[900px]" />
      </div>
    </div>
  )
}

export default ProgressLine
