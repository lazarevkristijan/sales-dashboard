const Social = () => {
  return (
    <div className="light-blue1 text-center pt-[30px] mb-[50px] w-[500px] rou">
      <p>Social stats</p>
      <div className="mx-[20px] flex justify-between">
        <div className="bg-[#fff] rou w-1/3 h-[220px]">
          <img
            src="instagram.svg"
            alt="instagram logo"
            className="w-[60px] py-[20px] mx-auto"
          />
          <hr className="border-[1px] border-black mb-[10px]" />
          <span className="mb-[10px]">1666</span>
          <p>
            <span className="text-[#38da38] font-bold">+0.7</span>
            %/month <br />
            Avg.
          </p>
        </div>
        <div className="relative">
          <p className="absolute -translate-x-[50%] top-[110px]">Followers</p>
          <p className="absolute -translate-x-[50%] top-[140px]">Growth</p>
        </div>
        <div className="bg-[#fff] rou w-1/3">
          <img
            src="facebook.svg"
            alt="facebook logo"
            className="w-[60px] py-[20px] mx-auto"
          />
          <hr className="border-[1px] border-black mb-[10px]" />
          <span className="mb-[10px]">2730</span>
          <p>
            <span className="text-[#38da38] font-bold">+1</span>
            %/month <br />
            Avg.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Social
