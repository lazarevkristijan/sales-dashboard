import { TableDataBlock } from "../components"
import { DarkMode } from "../components/ContDarkMode"
import {
  countryTableData,
  countryTableHeadings,
  smSectionStyles,
} from "../constants"
import { useContext } from "react"

const Countries = () => {
  const isDarkMode = useContext(DarkMode)

  return (
    <div
      className={`${smSectionStyles} ${
        isDarkMode ? "dark-blue3" : "light-blue1"
      }`}
    >
      <p className={`${isDarkMode ? "text-white" : "text-black"} text-center`}>
        Countries
      </p>
      <div className="mx-[20px] rou">
        <table className="w-full text-center rou">
          <thead className="rou">
            <tr className="h-[45px] rou">
              {countryTableHeadings.map((heading, index) => (
                <th
                  key={index}
                  className={`${
                    isDarkMode
                      ? "dark-blue4 text-white"
                      : "light-blue2 text-black"
                  } font-normal w-[50%]`}
                >
                  {heading.text}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="rou">
            {countryTableData.map((place, index) => (
              <tr
                key={index}
                className="h-[45px]"
              >
                <TableDataBlock index={index}>{place.country}</TableDataBlock>
                <TableDataBlock
                  index={index}
                  border={false}
                >
                  {place.purchases}
                </TableDataBlock>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
export default Countries
