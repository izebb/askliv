import React from 'react'
import { SearchProvider } from './SearchContext'

export const AppContext = React.createContext({})

export const AppProvider = ({ children }) => {
  return (
    <AppContext.Provider value={{}}>
      <SearchProvider>{children}</SearchProvider>
    </AppContext.Provider>
  )
}
