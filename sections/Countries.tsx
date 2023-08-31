import { countryTableData, countryTableHeadings } from "../constants"

const Countries = () => {
  return (
    <div className="light-blue1 py-[30px] mb-[50px] w-[500px] rou">
      <div className="mx-[20px]">
        <table className="w-full text-center">
          <thead>
            <tr>
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
              <tr>
                <td
                  key={index}
                  className="border-r-[1px] border-black"
                >
                  {place.country}
                </td>
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
