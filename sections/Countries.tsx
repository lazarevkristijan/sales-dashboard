import {
  countryTableData,
  countryTableHeadings,
  smSectionStyles,
} from "../constants"

const Countries = () => {
  return (
    <div className={`${smSectionStyles}`}>
      <div className="mx-[20px]">
        <table className="w-full text-center">
          <thead>
            <tr className="h-[50px]">
              {countryTableHeadings.map((heading, index) => (
                <th
                  key={index}
                  className="light-blue2 font-normal w-[50%]"
                >
                  {heading.text}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {countryTableData.map((place, index) => (
              <tr
                key={index}
                className="h-[50px]"
              >
                <td className="border-r-[1px] border-black">{place.country}</td>
                <td>{place.purchases}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
export default Countries
