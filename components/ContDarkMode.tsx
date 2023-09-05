import { createContext, useState } from "react"

export const DarkMode = createContext(true)

const ContDarkMode = ({ children }: { children: React.ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState(true)

  return <DarkMode.Provider value={isDarkMode}>{children}</DarkMode.Provider>
}

export default ContDarkMode
