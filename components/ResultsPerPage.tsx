import { PerPageOption } from "."

const ResultsPerPage = () => {
  return (
    <div className="light-blue1 w-[150px] absolute top-[50px] right-0 border-black border-[1px] rou">
      <div className="m-[20px] bg-white rou">
        <PerPageOption
          number={10}
          active
        />
        <PerPageOption number={15} />
        <PerPageOption number={20} />
        <PerPageOption number={25} />
      </div>
    </div>
  )
}

export default ResultsPerPage
