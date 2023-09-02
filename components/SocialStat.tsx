const SocialStat = ({
  media,
  followers,
  growth,
}: {
  media: string
  followers: number
  growth: number
}) => {
  return (
    <div className="bg-[#fff] rou w-1/3 pb-[20px]">
      <img
        src={`${media}.svg`}
        alt={`${media} logo`}
        className="w-[60px] py-[20px] mx-auto"
      />
      <hr className="border-[1px] border-black mb-[10px]" />
      <span className="mb-[10px]">{followers}</span>
      <p>
        <span className="text-[#38da38] font-bold">+{growth}</span>
        %/ <br className="hidden xs:visible" /> month <br />
        Avg.
      </p>
    </div>
  )
}

export default SocialStat