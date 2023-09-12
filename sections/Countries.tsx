import { useContext } from "react"
import { DarkMode } from "../components/Contexts"
import { TableDataBlock } from "../components"
import {
  countryTableData,
  countriesHeadings,
  smSectionStyles,
} from "../constants"

const Countries = () => {
  // Contexts
  const { isDarkMode } = useContext(DarkMode)

  return (
    <div
      className={`${smSectionStyles} ${
        isDarkMode ? "dark-blue3" : "light-blue1"
      } `}
    >
      <p className={`${isDarkMode ? "text-white" : "text-black"} text-center`}>
        Countries
      </p>
      <div className="h-[210px] mx-[20px] rou overflow-y-scroll">
        <table className="w-full text-center">
          <thead>
            <tr className="h-[45px]">
              {countriesHeadings.map((heading, index) => (
                <th
                  key={index}
                  className={`${
                    isDarkMode
                      ? "dark-blue4 text-white"
                      : "light-blue2 text-black"
                  } w-[50%] font-normal`}
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
